// Achievement system for Upvotechain

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  condition: (stats: PlayerStats) => boolean;
  points: number;
}

export interface PlayerStats {
  totalWords: number;
  currentStreak: number;
  longestStreak: number;
  totalScore: number;
  roundsPlayed: number;
  longestChain: number;
  perfectRounds: number; // Rounds with no errors
}

// Achievement definitions
export const ACHIEVEMENTS: Achievement[] = [
  // Beginner achievements
  {
    id: 'first_word',
    title: 'First Steps',
    description: 'Submit your first word',
    icon: '🎯',
    condition: (stats) => stats.totalWords >= 1,
    points: 10,
  },
  {
    id: 'word_warrior',
    title: 'Word Warrior',
    description: 'Submit 10 words',
    icon: '⚔️',
    condition: (stats) => stats.totalWords >= 10,
    points: 25,
  },
  {
    id: 'word_master',
    title: 'Word Master',
    description: 'Submit 50 words',
    icon: '👑',
    condition: (stats) => stats.totalWords >= 50,
    points: 100,
  },
  {
    id: 'word_legend',
    title: 'Word Legend',
    description: 'Submit 100 words',
    icon: '🏆',
    condition: (stats) => stats.totalWords >= 100,
    points: 250,
  },

  // Streak achievements
  {
    id: 'on_fire',
    title: 'On Fire!',
    description: 'Get a 5-word streak',
    icon: '🔥',
    condition: (stats) => stats.currentStreak >= 5,
    points: 50,
  },
  {
    id: 'unstoppable',
    title: 'Unstoppable',
    description: 'Get a 10-word streak',
    icon: '⚡',
    condition: (stats) => stats.currentStreak >= 10,
    points: 100,
  },
  {
    id: 'legendary_streak',
    title: 'Legendary Streak',
    description: 'Get a 25-word streak',
    icon: '💫',
    condition: (stats) => stats.longestStreak >= 25,
    points: 500,
  },

  // Score achievements
  {
    id: 'rising_star',
    title: 'Rising Star',
    description: 'Reach 100 points',
    icon: '⭐',
    condition: (stats) => stats.totalScore >= 100,
    points: 50,
  },
  {
    id: 'superstar',
    title: 'Superstar',
    description: 'Reach 500 points',
    icon: '🌟',
    condition: (stats) => stats.totalScore >= 500,
    points: 150,
  },
  {
    id: 'hall_of_fame',
    title: 'Hall of Fame',
    description: 'Reach 1000 points',
    icon: '💎',
    condition: (stats) => stats.totalScore >= 1000,
    points: 500,
  },

  // Chain achievements
  {
    id: 'chain_builder',
    title: 'Chain Builder',
    description: 'Help build a 50-word chain',
    icon: '🔗',
    condition: (stats) => stats.longestChain >= 50,
    points: 100,
  },
  {
    id: 'chain_architect',
    title: 'Chain Architect',
    description: 'Help build a 100-word chain',
    icon: '🏗️',
    condition: (stats) => stats.longestChain >= 100,
    points: 250,
  },
  {
    id: 'chain_titan',
    title: 'Chain Titan',
    description: 'Help build a 200-word chain',
    icon: '🌉',
    condition: (stats) => stats.longestChain >= 200,
    points: 1000,
  },

  // Special achievements
  {
    id: 'perfect_round',
    title: 'Perfectionist',
    description: 'Complete a round without errors',
    icon: '✨',
    condition: (stats) => stats.perfectRounds >= 1,
    points: 75,
  },
  {
    id: 'dedicated_player',
    title: 'Dedicated Player',
    description: 'Play 10 rounds',
    icon: '🎮',
    condition: (stats) => stats.roundsPlayed >= 10,
    points: 100,
  },
  {
    id: 'veteran',
    title: 'Veteran',
    description: 'Play 50 rounds',
    icon: '🎖️',
    condition: (stats) => stats.roundsPlayed >= 50,
    points: 500,
  },
];

/**
 * Check which achievements a player has earned
 */
export function checkAchievements(stats: PlayerStats): Achievement[] {
  return ACHIEVEMENTS.filter((achievement) => achievement.condition(stats));
}

/**
 * Get newly unlocked achievements
 */
export function getNewAchievements(
  previouslyUnlocked: string[],
  stats: PlayerStats
): Achievement[] {
  const currentlyUnlocked = checkAchievements(stats);
  return currentlyUnlocked.filter(
    (achievement) => !previouslyUnlocked.includes(achievement.id)
  );
}

/**
 * Calculate total achievement points
 */
export function getTotalAchievementPoints(unlockedIds: string[]): number {
  return ACHIEVEMENTS
    .filter((achievement) => unlockedIds.includes(achievement.id))
    .reduce((total, achievement) => total + achievement.points, 0);
}

/**
 * Get achievement progress percentage
 */
export function getAchievementProgress(unlockedIds: string[]): number {
  return Math.floor((unlockedIds.length / ACHIEVEMENTS.length) * 100);
}
