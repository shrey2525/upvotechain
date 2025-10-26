import { Devvit } from '@devvit/public-api';
/** @jsx Devvit.createElement */
/** @jsxFrag Devvit.Fragment */

interface SplashScreenProps {
  onStart: () => void;
  username: string;
}

export const SplashScreen = (props: SplashScreenProps): JSX.Element => {
  return (
    <zstack height="100%" width="100%" alignment="center middle">
      {/* Background gradient effect */}
      <vstack height="100%" width="100%" backgroundColor="#FF4500" />

      <vstack
        height="100%"
        width="100%"
        alignment="center middle"
        padding="large"
        gap="medium"
      >
        {/* Logo/Title */}
        <vstack alignment="center middle" gap="small">
          <text size="xxlarge" weight="bold" color="white">
            🔗 WORD CHAIN
          </text>
          <text size="medium" color="#FFE5D9" alignment="center">
            Massively Multiplayer Word Game
          </text>
        </vstack>

        <spacer size="large" />

        {/* Game description */}
        <vstack
          backgroundColor="rgba(255, 255, 255, 0.1)"
          padding="large"
          cornerRadius="large"
          gap="medium"
          width="90%"
        >
          <text size="large" weight="bold" color="white" alignment="center">
            How to Play
          </text>

          <vstack gap="small">
            <hstack gap="small">
              <text size="medium" color="white">1.</text>
              <text size="medium" color="#FFE5D9">
                Each word must start with the last letter of the previous word
              </text>
            </hstack>

            <hstack gap="small">
              <text size="medium" color="white">2.</text>
              <text size="medium" color="#FFE5D9">
                Words must be valid English words (3+ letters)
              </text>
            </hstack>

            <hstack gap="small">
              <text size="medium" color="white">3.</text>
              <text size="medium" color="#FFE5D9">
                Work together to build the longest chain possible!
              </text>
            </hstack>
          </vstack>
        </vstack>

        <spacer size="large" />

        {/* Player info */}
        <vstack alignment="center middle" gap="small">
          <text size="small" color="#FFE5D9">
            Playing as
          </text>
          <text size="large" weight="bold" color="white">
            u/{props.username}
          </text>
        </vstack>

        <spacer size="medium" />

        {/* Start button */}
        <vstack width="80%" maxWidth="300px">
          <button
            appearance="primary"
            size="large"
            onPress={props.onStart}
          >
            START PLAYING
          </button>
        </vstack>

        <spacer size="large" />

        {/* Footer */}
        <text size="small" color="rgba(255, 255, 255, 0.6)">
          Built with Devvit Web + Kiro
        </text>
      </vstack>
    </zstack>
  );
};
