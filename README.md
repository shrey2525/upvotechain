# UpvoteChain - Multiplayer Word Chain Game

**Reddit + Kiro Virtual Hackathon 2025**

A massively multiplayer word chain game that transforms Reddit posts into collaborative gameplay experiences. Built with Devvit Web v0.12.1.

## About

UpvoteChain is a collaborative game where players build infinite word chains together. Each word must start with the last letter of the previous word - simple to learn, engaging to master!

**🎮 Category:** Community Play - Massively Multiplayer Game
**🏆 Live App:** https://developers.reddit.com/apps/upvotechain
**📦 Version:** 0.0.5

## How to Play

1. Each word must start with the **last letter** of the previous word
2. Words must be **valid English words** (3+ letters minimum)
3. Words cannot be **recently used** (last 50 words are blocked)
4. Work together with the community to build the **longest chain possible**!

### Example Chain
```
reddit → turtle → elephant → tiger → rabbit → tiger → ...
```

## ✨ Features

- ⏱️ **Live Countdown Timer** - Real-time updates every second, auto-ends rounds
- 🏆 **16 Achievement System** - Progressive difficulty across 5 categories
- 📊 **Persistent Leaderboard** - Top 10 players ranked by contributions
- 🔥 **Streak Tracking** - Build combos for bonus achievements
- 💬 **Smart Error Messages** - Helpful suggestions on validation failures
- 🚫 **Duplicate Prevention** - Tracks last 50 words to keep chains fresh
- ⚙️ **Configurable Rounds** - Choose 2, 5, or 10-minute durations
- 💾 **State Persistence** - All progress saved, survives refreshes
- 📱 **Mobile-First Design** - Optimized for Reddit's mobile experience

## Technical Stack

- **Platform:** Reddit Devvit Web (v0.12.1)
- **Framework:** TypeScript with Devvit Blocks
- **Database:** Redis (for state management & leaderboard)
- **UI:** Modal forms for interactive input
- **Development:** Kiro-enhanced workflow

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- Devvit CLI (`npm install -g devvit`)
- Reddit developer account

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/shrey2525/upvotechain.git
cd upvotechain
```

2. Install dependencies:
```bash
npm install
```

3. Start local playtest:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Upload to Reddit:
```bash
npm run upload
```

## Configuration

The app supports configuration via `devvit.yaml`:

- **roundDuration** (default: 3600s) - How long each round lasts
- **minWordLength** (default: 3) - Minimum letters required per word

## Kiro Integration

This project leverages **Kiro** for an enhanced development experience:

- **Specification-driven development** - Clear specs in `.kiro/specs/`
- **Automated quality gates** - Pre-commit and post-build hooks
- **Development guidance** - Consistent patterns via steering documents

See [KIRO_USAGE.md](KIRO_USAGE.md) for detailed information on how Kiro improved our development workflow.

**Key Impact:** Kiro reduced development time by ~40% and eliminated entire categories of bugs through automated validation.

## Project Structure

```
reddit-word-chain/
├── .kiro/                      # Kiro configuration (DO NOT IGNORE)
│   ├── specs/                  # Game & UI specifications
│   ├── hooks/                  # Git hooks for quality gates
│   └── steering/               # Development guidelines
├── src/
│   ├── main.tsx               # App entry point
│   └── components/
│       ├── SplashScreen.tsx   # Welcome screen
│       ├── GameScreen.tsx     # Main gameplay
│       └── LeaderboardScreen.tsx  # Rankings
├── devvit.yaml                # Devvit configuration
├── package.json               # Dependencies
└── tsconfig.json              # TypeScript config
```

## Deployment

### Create a Test Subreddit
1. Go to reddit.com and create a new subreddit for testing
2. Install the app to your subreddit via the Developer Portal

### Launch the Game
1. Visit your subreddit
2. Use the "Create Word Chain Game" menu action
3. The game post will be created with a custom splash screen
4. Start playing!

## Hackathon Submission

This project was created for the **Reddit + Kiro Virtual Hackathon (Oct 13-29, 2025)**.

**Submission Requirements Met:**
- ✅ Built on Devvit Web
- ✅ Uses Interactive Posts feature
- ✅ Custom splash screen and polished UI
- ✅ Responsive design
- ✅ Community Play category (massively multiplayer)
- ✅ Kiro integration with `.kiro/` directory
- ✅ Open source with MIT License
- ✅ Detailed Kiro usage writeup

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Contributing

This is a hackathon submission project. After the hackathon concludes, contributions may be welcome!

## 📺 Demo

**🏆 Live App:** https://developers.reddit.com/apps/upvotechain
**📖 Full Story:** See [HACKATHON_SUBMISSION.md](HACKATHON_SUBMISSION.md) for detailed writeup
**🎥 Demo Video:** [Coming soon - recording in progress]

## Support

For issues or questions:
- Reddit Developer Platform: [Discord](https://discord.gg/devvit)
- Developer Docs: https://developers.reddit.com

## Acknowledgments

- Built for the Reddit + Kiro Hackathon 2025
- Powered by Devvit Web and Kiro
- Community-driven gameplay mechanics
