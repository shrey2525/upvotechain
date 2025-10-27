# Achievement System Specification

## Overview
A comprehensive 16-achievement system across 5 categories designed to drive player engagement and reward different playstyles.

## Achievement Categories

### 1. Word Count Achievements
Reward total words submitted over lifetime.

| Achievement | Requirement | Points | Emoji |
|------------|-------------|--------|-------|
| First Steps | 1 word | 10 | 🎯 |
| Getting Started | 5 words | 20 | 📝 |
| Word Wizard | 10 words | 25 | 🧙 |
| Dedicated Player | 50 words | 75 | ⭐ |
| Word Master | 100 words | 150 | 👑 |

**Design Rationale**: Progressive difficulty encourages long-term engagement. Easy first achievement (1 word) onboards players quickly.

### 2. Streak Achievements
Reward consecutive correct word submissions.

| Achievement | Requirement | Points | Emoji |
|------------|-------------|--------|-------|
| On Fire! | 5 streak | 50 | 🔥 |
| Unstoppable | 10 streak | 100 | 💪 |
| Legendary | 20 streak | 250 | 🌟 |

**Design Rationale**: Streaks add tension and risk. Any validation error resets streak to 0, creating high-stakes gameplay.

### 3. Point Achievements
Reward accumulated score (10 points per word).

| Achievement | Requirement | Points | Emoji |
|------------|-------------|--------|-------|
| Century Club | 100 points | 50 | 💯 |
| High Roller | 500 points | 100 | 🎲 |
| Hall of Fame | 1000 points | 500 | 💎 |

**Design Rationale**: Long-term goals for dedicated players. 1000 points = 100 words submitted.

### 4. Round Achievements
Reward participation across multiple rounds.

| Achievement | Requirement | Points | Emoji |
|------------|-------------|--------|-------|
| Veteran | 5 rounds | 50 | 🎖️ |
| Dedicated | 10 rounds | 100 | 🏅 |
| Champion | 25 rounds | 200 | 🏆 |

**Design Rationale**: Encourages returning to game over time. Builds habit formation.

### 5. Chain Length Achievements
Reward contribution to community-wide chain building.

| Achievement | Requirement | Points | Emoji |
|------------|-------------|--------|-------|
| Chain Master | 50 chain length | 200 | 🔗 |
| Epic Chain | 100 chain length | 500 | 🌈 |

**Design Rationale**: Community-focused achievements. Everyone benefits when chain grows.

## Total Rewards
- **Total Achievements**: 16
- **Total Achievement Points**: 2,475
- **Categories**: 5

## Implementation

### Data Storage (Redis)
```typescript
// Per-player achievement tracking
player:{username}:totalWords    // Integer
player:{username}:longestStreak // Integer
player:{username}:roundsPlayed  // Integer
player:{username}:achievements  // Comma-separated string of unlocked IDs
```

### Achievement Checking Algorithm
```typescript
interface PlayerStats {
  totalWords: number;
  currentStreak: number;
  longestStreak: number;
  totalScore: number;
  roundsPlayed: number;
  longestChain: number;
}

function checkAchievements(
  stats: PlayerStats,
  unlocked: string[]
): Achievement[] {
  // Check each achievement definition
  // Return newly unlocked achievements
  // Filter out already-unlocked
}
```

### Achievement Notification
- Toast notification on unlock
- Format: "🎉 Achievement Unlocked: {emoji} {name}!"
- Appears immediately after word submission
- Duration: 3 seconds

### Achievement Display
- Shown on achievement toast only (for now)
- Future: Achievement screen showing all 16 with lock/unlock states
- Future: Progress bars for partially completed achievements

## User Experience Flow

1. **Player submits word**
2. **Word validation passes**
3. **Stats updated in Redis**
4. **Achievement checker runs**
5. **If new achievement unlocked:**
   - Show toast notification
   - Update unlocked achievements list
   - Give player satisfaction moment
6. **Continue gameplay**

## Design Principles

### Progressive Difficulty
- Early achievements are easy (1 word)
- Mid-tier achievements require dedication (50 words, 10 streak)
- Late-game achievements are prestige (100 words, 20 streak, 1000 points)

### Multiple Paths to Success
- Casual players: Word count achievements
- Skilled players: Streak achievements
- Long-term players: Round achievements
- Community players: Chain achievements

### Immediate Feedback
- Achievement unlocks happen instantly
- Toast notifications create dopamine hits
- Visual confirmation (emoji + name)

### Balanced Rewards
- Point values scale with difficulty
- Prevents "achievement farming"
- Encourages natural gameplay

## Future Enhancements

### Short-Term
- Achievement progress display
- "Next achievement" indicator
- Achievement screen showing all 16

### Long-Term
- Weekly/daily achievements
- Seasonal achievements
- Special event achievements
- Achievement badges on leaderboard
- Reddit flair integration

## Testing Checklist

- [ ] First Steps unlocks on first word
- [ ] Getting Started unlocks on 5th word
- [ ] On Fire! unlocks on 5-word streak
- [ ] Streak resets on validation error
- [ ] Multiple achievements can unlock simultaneously
- [ ] Achievements persist across sessions
- [ ] No duplicate unlock notifications
- [ ] Toast notifications display correctly
- [ ] Achievement points add to player score

## Performance Considerations

- Achievement checking is O(1) for each achievement (constant time)
- Total check time: O(16) = O(1) effectively
- Redis operations are atomic
- No race conditions in multi-player scenarios
- Checking happens after word submission (not during validation)
