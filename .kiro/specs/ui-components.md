# UI Components Specification

## Design System

### Color Palette
- Primary (Reddit Orange): `#FF4500`
- Secondary (Reddit Blue): `#0079D3`
- Background: `#F6F7F8`
- Card Background: `#FFFFFF`
- Text Primary: `#1A1A1B`
- Text Secondary: `#7C7C7C`
- Error: `#EA0027`
- Success: `#46D160`

### Typography
- Display: xxlarge, bold
- Headings: large-xlarge, bold
- Body: medium
- Captions: small

### Spacing
- Small: 8px
- Medium: 16px
- Large: 24px

## Component Specifications

### SplashScreen
**Purpose**: First-time user experience and game introduction

**Layout**:
- Full-screen gradient background (Reddit Orange)
- Centered content with game logo/title
- "How to Play" card with numbered instructions
- Player username display
- Primary CTA button: "START PLAYING"
- Footer attribution

**Interactions**:
- Single button press transitions to GameScreen
- No back navigation from here

**Responsive Design**:
- Maximum content width: 90% of screen
- Button max width: 300px
- Adequate padding on all screen sizes

### GameScreen
**Purpose**: Main gameplay interface

**Header Section**:
- Chain length counter (left)
- Player score (right)
- Reddit Orange background

**Main Content**:
1. Current word display card
   - Current word in large text
   - Attribution to last player
   - White background, centered

2. Next letter hint card
   - Blue background
   - Required starting letter (emphasized)
   - Instructional text

3. Input section (if game active)
   - Text input field
   - Submit button
   - Placeholder with hint
   - Error message display area (conditional)

4. End game card (if game inactive)
   - Final statistics
   - "Start New Round" button

**Footer**:
- Leaderboard navigation button
- Time remaining indicator

**Interactions**:
- Text input with character limit (20)
- Submit button disabled if input empty
- Real-time error feedback
- Toast notifications for success

### LeaderboardScreen
**Purpose**: Display top players and rankings

**Header**:
- Back button
- Title and subtitle
- Reddit Orange background

**Content**:
- Loading state
- Empty state (no players yet)
- Player list (top 10)
  - Each entry shows:
    - Rank with medal emoji (1st-3rd)
    - Username
    - Score with "words" label
  - White card per player
  - Adequate spacing between entries

**Footer**:
- Motivational text

**Interactions**:
- Back button returns to GameScreen
- Scrollable list (if >10 players in future)

## Accessibility
- High contrast text on all backgrounds
- Clear button states (disabled, active)
- Readable font sizes (minimum small)
- Touch-friendly button sizes

## Responsive Design
- Adapts to "tall" post height
- Full width utilization
- Proper padding on small screens
- Stacked layouts (vstack) for mobile-first design
