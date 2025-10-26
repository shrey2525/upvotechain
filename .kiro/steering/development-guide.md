# Development Guide - Word Chain Game

## Kiro-Enhanced Development Workflow

This project leverages Kiro to streamline development and maintain code quality.

## Development Commands

### Initial Setup
```bash
npm install
```

### Development Workflow
```bash
# Start local development server
npm run dev

# Build for production
npm run build

# Upload to Reddit
npm run upload
```

## Kiro Integration Points

### 1. Specifications (/.kiro/specs/)
- **game-mechanics.md**: Complete game logic and data model
- **ui-components.md**: UI/UX specifications and design system

**How Kiro Helps**:
- Specs serve as source of truth for AI assistance
- Consistent implementation across components
- Easy onboarding for new developers

### 2. Git Hooks (/.kiro/hooks/)
- **pre-commit.sh**: Type checking and validation before commits
- **post-build.sh**: Build output verification

**How Kiro Helps**:
- Automated quality gates
- Catches errors before they reach repository
- Ensures build artifacts are valid

### 3. Steering Documents (/.kiro/steering/)
- This file! Development guidelines and conventions
- Best practices for Devvit development

**How Kiro Helps**:
- Maintains consistent coding patterns
- Guides AI-assisted code generation
- Documents project-specific conventions

## Code Conventions

### Component Structure
```typescript
// 1. Imports
import { Devvit } from '@devvit/public-api';

// 2. Interface definitions
interface MyComponentProps {
  // props here
}

// 3. Component implementation
export const MyComponent = (props: MyComponentProps): JSX.Element => {
  // Component logic
  return (
    // JSX
  );
};
```

### State Management
- Use `Devvit.useState()` for component state
- Use `context.useState()` for custom post state
- Use Redis for persistent, shared state

### Styling Conventions
- Use semantic color names from design system
- Prefer vstack/hstack over complex layouts
- Maintain consistent spacing (small/medium/large)
- Use cornerRadius for cards and buttons

### Error Handling
```typescript
try {
  // API call or Redis operation
} catch (error) {
  setErrorMessage('User-friendly error message');
  // Log for debugging if needed
}
```

## Testing Strategy

### Manual Testing Checklist
- [ ] Game starts correctly from splash screen
- [ ] Words validate correctly (dictionary API)
- [ ] Chain length increments properly
- [ ] Leaderboard displays top players
- [ ] Error messages show for invalid inputs
- [ ] Responsive design on various screen sizes
- [ ] Round timer counts down correctly

### Edge Cases to Test
- [ ] Empty input submission
- [ ] Word starting with wrong letter
- [ ] Recently used word
- [ ] Non-alphabetic characters
- [ ] Very long words (>20 chars)
- [ ] Network errors (dictionary API down)
- [ ] Concurrent submissions by multiple players

## Performance Considerations

### Redis Optimization
- Use sorted sets for leaderboards (efficient ranking)
- Limit recent_words to 50 entries (memory management)
- Consider TTL for old game data

### API Rate Limiting
- Dictionary API: Free tier limits apply
- Consider caching common words if needed
- Handle API failures gracefully

## Deployment

### Pre-deployment Checklist
- [ ] All TypeScript errors resolved
- [ ] Components render correctly
- [ ] Redis keys properly namespaced
- [ ] Settings properly configured
- [ ] Custom post preview looks good
- [ ] Menu action works correctly

### Upload to Reddit
```bash
npm run upload
```

Then test in a subreddit where you have permissions.

## Kiro Workflow Benefits

### During Development
1. **Specs** guide implementation
2. **Hooks** catch errors early
3. **Steering** maintains consistency

### For Collaboration
- Clear documentation for team members
- AI assistants understand project structure
- Onboarding time reduced significantly

### For Maintenance
- Easy to understand existing code
- Specifications document decisions
- Hooks prevent regressions

## Future Enhancements

Ideas for v2.0:
- [ ] Themed word categories
- [ ] Daily challenges
- [ ] Word difficulty ratings
- [ ] Achievement badges
- [ ] Multiplayer rooms (separate chains)
- [ ] Real-time player presence
- [ ] Word definitions on hover
- [ ] Chain export/sharing

## Troubleshooting

### Common Issues

**TypeScript errors**:
- Run `npx tsc --noEmit` to check
- Ensure @devvit/public-api is latest version

**Build fails**:
- Check devvit.yaml syntax
- Verify all imports resolve correctly
- Check post-build hook output

**Game state not persisting**:
- Verify Redis keys are correct
- Check context.redis is available
- Ensure redditAPI capability enabled

**Dictionary API fails**:
- Check network connectivity
- Verify URL allowlist in devvit.yaml
- Test with known valid word

## Resources

- [Devvit Documentation](https://developers.reddit.com/docs)
- [Devvit Web Guide](https://developers.reddit.com/docs/devvit-web)
- [Building Games on Reddit](https://developers.reddit.com/docs/games)
- [Dictionary API](https://dictionaryapi.dev/)
