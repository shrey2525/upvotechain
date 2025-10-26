import { Devvit } from '@devvit/public-api';
/** @jsx Devvit.createElement */
/** @jsxFrag Devvit.Fragment */

interface GameScreenProps {
  currentWord: string;
  chainLength: number;
  playerScore: number;
  lastPlayer: string;
  username: string;
  timeRemaining: number;
  gameActive: boolean;
  errorMessage: string;
  onSubmitWord: () => void;
  onShowLeaderboard: () => void;
  onNewRound: () => void;
}

export const GameScreen = (props: GameScreenProps): JSX.Element => {

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    }
    return `${secs}s`;
  };

  const requiredLetter = props.currentWord.slice(-1).toUpperCase();

  return (
    <vstack height="100%" width="100%" backgroundColor="#F6F7F8">
      {/* Header */}
      <vstack
        backgroundColor="#FF4500"
        padding="medium"
        width="100%"
      >
        <hstack width="100%" alignment="space-between middle">
          <vstack gap="none">
            <text size="small" color="rgba(255, 255, 255, 0.8)">
              Chain Length
            </text>
            <text size="xlarge" weight="bold" color="white">
              {props.chainLength}
            </text>
          </vstack>

          <vstack gap="none" alignment="end">
            <text size="small" color="rgba(255, 255, 255, 0.8)">
              Your Score
            </text>
            <text size="xlarge" weight="bold" color="white">
              {props.playerScore}
            </text>
          </vstack>
        </hstack>
      </vstack>

      {/* Main content */}
      <vstack padding="medium" gap="small" grow>
        {/* Current word display */}
        <vstack
          backgroundColor="white"
          padding="medium"
          cornerRadius="medium"
          alignment="center middle"
          gap="small"
        >
          <text size="small" color="#7C7C7C">
            Current Word
          </text>
          <text size="xxlarge" weight="bold" color="#1A1A1B">
            {props.currentWord.toUpperCase()}
          </text>
          <text size="small" color="#7C7C7C">
            by u/{props.lastPlayer}
          </text>
        </vstack>

        {/* Next letter hint */}
        <vstack
          backgroundColor="#0079D3"
          padding="medium"
          cornerRadius="medium"
          alignment="center middle"
        >
          <text size="medium" color="white">
            Next word must start with:
          </text>
          <text size="xxlarge" weight="bold" color="white">
            {requiredLetter}
          </text>
        </vstack>

        {/* Input section */}
        {props.gameActive ? (
          <vstack gap="small">
            <vstack
              backgroundColor="white"
              padding="medium"
              cornerRadius="medium"
              gap="small"
              alignment="center middle"
            >
              <text size="medium" color="#1A1A1B" weight="bold">
                Submit Your Word
              </text>
              <text size="small" color="#7C7C7C">
                Click below to enter a word starting with {requiredLetter}
              </text>
              <button
                appearance="primary"
                onPress={props.onSubmitWord}
                size="large"
              >
                Enter Word
              </button>
            </vstack>

            {/* Error message */}
            {props.errorMessage && (
              <vstack
                backgroundColor="#EA0027"
                padding="medium"
                cornerRadius="small"
              >
                <text size="small" color="white">
                  {props.errorMessage}
                </text>
              </vstack>
            )}
          </vstack>
        ) : (
          <vstack
            backgroundColor="white"
            padding="large"
            cornerRadius="medium"
            alignment="center middle"
            gap="medium"
          >
            <text size="large" weight="bold" color="#1A1A1B">
              Round Ended!
            </text>
            <text size="medium" color="#7C7C7C" alignment="center">
              Final chain length: {props.chainLength}
            </text>
            <button
              appearance="primary"
              onPress={props.onNewRound}
            >
              Start New Round
            </button>
          </vstack>
        )}

        <spacer grow />

        {/* Leaderboard button */}
        <vstack width="100%">
          <button
            appearance="secondary"
            onPress={props.onShowLeaderboard}
          >
            View Leaderboard
          </button>
        </vstack>
      </vstack>

      {/* Footer stats */}
      <vstack
        backgroundColor="white"
        padding="small"
        width="100%"
        alignment="center middle"
      >
        <text size="small" color="#7C7C7C">
          {props.gameActive
            ? `Time remaining: ${formatTime(props.timeRemaining)}`
            : 'Round ended'}
        </text>
      </vstack>
    </vstack>
  );
};
