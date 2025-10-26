import { Devvit } from '@devvit/public-api';
import { SplashScreen } from './components/SplashScreen.js';
import { GameScreen } from './components/GameScreen.js';
import { LeaderboardScreen } from './components/LeaderboardScreen.js';
import { isValidWord, getExampleWords } from './utils/wordValidator.js';

/** @jsx Devvit.createElement */
/** @jsxFrag Devvit.Fragment */

Devvit.configure({
  redditAPI: true,
  redis: true,
  http: true,
  media: true,
});

// Add custom post type
Devvit.addCustomPostType({
  name: 'Word Chain Game',
  description: 'A massively multiplayer word chain game',
  height: 'tall',
  render: (context) => {
    const [screen, setScreen] = context.useState('splash');
    const [username, setUsername] = context.useState<string>('Player');
    const [currentWord, setCurrentWord] = context.useState<string>('reddit');
    const [chainLength, setChainLength] = context.useState(0);
    const [playerScore, setPlayerScore] = context.useState(0);
    const [timeRemaining, setTimeRemaining] = context.useState(0);
    const [lastPlayer, setLastPlayer] = context.useState<string>('Game');
    const [gameActive, setGameActive] = context.useState(true);
    const [errorMessage, setErrorMessage] = context.useState<string>('');
    const [loaded, setLoaded] = context.useState(false);
    const [inputWord, setInputWord] = context.useState('');
    const [leaderboardData, setLeaderboardData] = context.useState<Array<{ username: string; score: number }>>([]);
    const [leaderboardLoading, setLeaderboardLoading] = context.useState(false);
    const [leaderboardLoaded, setLeaderboardLoaded] = context.useState(false);

    // Submit word handler
    const submitWord = async (word: string) => {
      setErrorMessage('');
      const redis = context.redis;

      // Validate word
      const normalizedWord = word.toLowerCase().trim();
      const minLength = 3;

      if (normalizedWord.length < minLength) {
        setErrorMessage(`Word must be at least ${minLength} letters!`);
        return;
      }

      // Check if word starts with correct letter
      const requiredLetter = currentWord.slice(-1).toLowerCase();
      if (!normalizedWord.startsWith(requiredLetter)) {
        setErrorMessage(`Word must start with "${requiredLetter.toUpperCase()}"!`);
        return;
      }

      // Check if word contains only letters
      if (!/^[a-z]+$/.test(normalizedWord)) {
        setErrorMessage('Word must contain only letters!');
        return;
      }

      // Validate word against common words list
      if (!isValidWord(normalizedWord)) {
        const examples = getExampleWords(requiredLetter);
        const suggestion = examples.length > 0 ? ` Try: ${examples.slice(0, 3).join(', ')}` : '';
        setErrorMessage(`Not a recognized word!${suggestion}`);
        return;
      }

      // Check if word was recently used
      const recentWords = await redis.zRange('recent_words', 0, 49);
      if (recentWords.some(w => w.member === normalizedWord)) {
        setErrorMessage('Word was used recently! Try another.');
        return;
      }

      // Word is valid! Update game state
      const newChainLength = chainLength + 1;

      await redis.set('current_word', normalizedWord);
      await redis.set('chain_length', newChainLength.toString());
      await redis.set('last_player', username);

      // Add to recent words (keep last 50)
      await redis.zAdd('recent_words', {
        member: normalizedWord,
        score: Date.now(),
      });

      // Update player score
      const newScore = playerScore + 1;
      await redis.zAdd('leaderboard', {
        member: username,
        score: newScore,
      });

      // Record word in history
      await redis.zAdd('word_history', {
        member: `${username}:${normalizedWord}`,
        score: Date.now(),
      });

      // Update local state
      setCurrentWord(normalizedWord);
      setChainLength(newChainLength);
      setPlayerScore(newScore);
      setLastPlayer(username);

      context.ui.showToast({
        text: `Great! Chain is now ${newChainLength} words long!`,
        appearance: 'success',
      });
    };

    // Word submission form
    const wordForm = context.useForm(
      {
        fields: [
          {
            name: 'word',
            label: 'Enter your word',
            type: 'string',
            required: true,
          },
        ],
        title: 'Submit Word',
        acceptLabel: 'Submit',
        cancelLabel: 'Cancel',
      },
      async (values) => {
        if (values && values.word) {
          await submitWord(values.word as string);
        }
      }
    );

    // Show word form
    const showWordForm = () => {
      context.ui.showForm(wordForm);
    };

    const startNewRound = async () => {
      const redis = context.redis;
      const settings = await context.settings.getAll();
      const duration = (settings.roundDuration as number) || 3600;

      const endTime = Date.now() + (duration * 1000);

      await redis.set('current_word', 'reddit');
      await redis.set('chain_length', '0');
      await redis.set('last_player', 'Game');
      await redis.set('round_end_time', endTime.toString());
      await redis.set('game_active', 'true');
      await redis.del('recent_words');

      setCurrentWord('reddit');
      setChainLength(0);
      setLastPlayer('Game');
      setTimeRemaining(duration);
      setGameActive(true);

      context.ui.showToast({
        text: 'New round started!',
        appearance: 'success',
      });
    };

    // Render appropriate screen
    if (screen === 'splash') {
      return (
        <SplashScreen
          onStart={() => setScreen('game')}
          username={username}
        />
      );
    }

    if (screen === 'leaderboard') {
      return (
        <LeaderboardScreen
          onBack={() => setScreen('game')}
          leaderboardData={leaderboardData}
          loading={false}
        />
      );
    }

    return (
      <GameScreen
        currentWord={currentWord}
        chainLength={chainLength}
        playerScore={playerScore}
        lastPlayer={lastPlayer}
        username={username}
        timeRemaining={timeRemaining}
        gameActive={gameActive}
        errorMessage={errorMessage}
        onSubmitWord={showWordForm}
        onShowLeaderboard={() => setScreen('leaderboard')}
        onNewRound={startNewRound}
      />
    );
  },
});

// Add menu action to create new game post
Devvit.addMenuItem({
  label: 'Create Word Chain Game',
  location: 'subreddit',
  onPress: async (event, context) => {
    const { reddit, ui } = context;
    const subreddit = await reddit.getCurrentSubreddit();

    const post = await reddit.submitPost({
      title: 'Word Chain Challenge - Build the Longest Chain Together!',
      subredditName: subreddit.name,
      preview: (
        <vstack height="100%" width="100%" alignment="middle center" backgroundColor="#FF4500">
          <text size="xxlarge" weight="bold" color="white">
            Word Chain Game
          </text>
          <spacer size="medium" />
          <text size="large" color="white">
            Tap to start playing!
          </text>
        </vstack>
      ),
    });

    ui.showToast({ text: 'Game created!', appearance: 'success' });
    ui.navigateTo(post);
  },
});

export default Devvit;
