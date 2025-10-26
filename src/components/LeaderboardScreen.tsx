import { Devvit } from '@devvit/public-api';
/** @jsx Devvit.createElement */
/** @jsxFrag Devvit.Fragment */

interface LeaderboardScreenProps {
  onBack: () => void;
  leaderboardData: Array<{ username: string; score: number }>;
  loading: boolean;
}

export const LeaderboardScreen = (props: LeaderboardScreenProps): JSX.Element => {

  const getMedalEmoji = (rank: number): string => {
    if (rank === 0) return '🥇';
    if (rank === 1) return '🥈';
    if (rank === 2) return '🥉';
    return `${rank + 1}.`;
  };

  return (
    <vstack height="100%" width="100%" backgroundColor="#F6F7F8">
      {/* Header */}
      <vstack
        backgroundColor="#FF4500"
        padding="medium"
        width="100%"
        gap="small"
      >
        <hstack width="100%" alignment="start middle">
          <button
            appearance="secondary"
            onPress={props.onBack}
            size="small"
          >
            Back
          </button>
        </hstack>
        <text size="xxlarge" weight="bold" color="white">
          Leaderboard
        </text>
        <text size="medium" color="rgba(255, 255, 255, 0.8)">
          Top Word Chain Champions
        </text>
      </vstack>

      {/* Leaderboard content */}
      <vstack padding="large" gap="small" grow>
        {props.loading ? (
          <vstack
            height="100%"
            width="100%"
            alignment="center middle"
          >
            <text size="large" color="#7C7C7C">
              Loading leaderboard...
            </text>
          </vstack>
        ) : props.leaderboardData.length === 0 ? (
          <vstack
            height="100%"
            width="100%"
            alignment="center middle"
            gap="medium"
          >
            <text size="xlarge">🎮</text>
            <text size="large" color="#7C7C7C" alignment="center">
              No players yet!
            </text>
            <text size="medium" color="#7C7C7C" alignment="center">
              Be the first to add a word to the chain!
            </text>
          </vstack>
        ) : (
          <vstack gap="small">
            {props.leaderboardData.map((player, index) => (
              <vstack
                backgroundColor="white"
                padding="medium"
                cornerRadius="medium"
              >
                <hstack width="100%" alignment="space-between middle">
                  <hstack gap="medium" alignment="start middle">
                    <vstack width="40px" alignment="center middle">
                      <text size="large" weight="bold" color="#FF4500">
                        {getMedalEmoji(index)}
                      </text>
                    </vstack>
                    <vstack gap="none">
                      <text size="medium" weight="bold" color="#1A1A1B">
                        u/{player.username}
                      </text>
                      <text size="small" color="#7C7C7C">
                        Rank #{index + 1}
                      </text>
                    </vstack>
                  </hstack>
                  <vstack alignment="end middle">
                    <text size="xlarge" weight="bold" color="#0079D3">
                      {player.score}
                    </text>
                    <text size="small" color="#7C7C7C">
                      words
                    </text>
                  </vstack>
                </hstack>
              </vstack>
            ))}
          </vstack>
        )}
      </vstack>

      {/* Footer */}
      <vstack
        backgroundColor="white"
        padding="medium"
        width="100%"
        alignment="center middle"
      >
        <text size="small" color="#7C7C7C">
          Keep playing to climb the ranks!
        </text>
      </vstack>
    </vstack>
  );
};
