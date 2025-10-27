# Word Chain Game Mechanics Specification

## Overview
A massively multiplayer asynchronous word game where players collaborate to build the longest possible word chain.

## Core Rules

### Word Validation
1. Each word must start with the last letter of the previous word
2. Minimum word length: 2 characters
3. Words must be valid English words (1000+ curated word list)
4. Words must contain only alphabetic characters (a-z)
5. Recently used words cannot be reused (last 50 words tracked)
6. Form-based input using `context.useForm()` modal

### Scoring System
- Each valid word submission: +1 point to player's score
- Chain length tracks total community progress
- Leaderboard shows top 10 players by total words contributed
- Streak tracking: consecutive correct words
- Streaks reset on validation errors

### Achievement System (16 Total)
**Word Achievements**
- First Steps (1 word) - 10 pts
- Getting Started (5 words) - 20 pts
- Word Wizard (10 words) - 25 pts
- Dedicated Player (50 words) - 75 pts
- Word Master (100 words) - 150 pts

**Streak Achievements**
- On Fire! (5 streak) - 50 pts
- Unstoppable (10 streak) - 100 pts
- Legendary (20 streak) - 250 pts

**Point Achievements**
- Century Club (100 pts) - 50 pts
- High Roller (500 pts) - 100 pts
- Hall of Fame (1000 pts) - 500 pts

**Round Achievements**
- Veteran (5 rounds) - 50 pts
- Dedicated (10 rounds) - 100 pts
- Champion (25 rounds) - 200 pts

**Chain Achievements**
- Chain Master (50 chain) - 200 pts
- Epic Chain (100 chain) - 500 pts

### Round Management
- Configurable round duration (2, 5, or 10 minutes)
- Live countdown timer (updates every second)
- Automatic round ending when timer expires
- Manual round reset by moderators
- Round statistics preserved in Redis

## Data Storage (Redis)

### Keys
- `current_word`: The latest valid word in the chain
- `chain_length`: Total number of words in current round
- `last_player`: Username of last contributor
- `round_end_time`: Timestamp when current round ends
- `game_active`: Boolean indicating if round is active

### Sorted Sets
- `leaderboard`: Player scores (member: username, score: word count)
- `recent_words`: Last 50 words (member: word, score: timestamp)
- `word_history`: Complete word history (member: "username:word", score: timestamp)

## Word Validation Implementation
- Curated word list (1000+ common English words)
- Client-side validation using JavaScript Set for O(1) lookup
- Word suggestions on validation failure
- Progressive validation: format → letter → dictionary → duplicates

## User Experience

### Screens
1. **Splash Screen**: Game introduction and rules
2. **Game Screen**: Main gameplay interface
3. **Leaderboard Screen**: Top players and rankings

### Feedback
- Success toast on valid submission
- Error messages for invalid words
- Visual indication of required starting letter
- Real-time score updates

## Multiplayer Mechanics
- Asynchronous gameplay (no turn-based waiting)
- All players contribute to single global chain
- Community achievement tracking via chain length
- Competitive element through individual leaderboards
