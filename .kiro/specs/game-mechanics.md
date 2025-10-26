# Word Chain Game Mechanics Specification

## Overview
A massively multiplayer asynchronous word game where players collaborate to build the longest possible word chain.

## Core Rules

### Word Validation
1. Each word must start with the last letter of the previous word
2. Minimum word length: 3 characters (configurable)
3. Words must be valid English words (verified via Dictionary API)
4. Words must contain only alphabetic characters (a-z)
5. Recently used words cannot be reused (last 50 words tracked)

### Scoring System
- Each valid word submission: +1 point to player's score
- Chain length tracks total community progress
- Leaderboard shows top 10 players by total words contributed

### Round Management
- Configurable round duration (default: 1 hour)
- Rounds can be manually reset by moderators
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

## API Integration
- Dictionary API: https://api.dictionaryapi.dev/api/v2/entries/en/{word}
- Used for real-time word validation
- Fallback error handling for API failures

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
