# Word Chain - Complete Testing Guide

This guide will help you thoroughly test all functionality before submission.

---

## Prerequisites Checklist

Before starting tests, ensure you have:

- [ ] Node.js installed (v16 or higher): `node --version`
- [ ] npm installed: `npm --version`
- [ ] Devvit CLI installed: `devvit --version`
- [ ] Reddit account for authentication
- [ ] Terminal/command line access

---

## Step 1: Install Devvit CLI

If you haven't installed Devvit CLI yet:

```bash
npm install -g devvit
```

Verify installation:
```bash
devvit --version
```

**Expected Output**: Version number (e.g., `0.11.x`)

---

## Step 2: Authenticate with Reddit

```bash
devvit login
```

This will:
1. Open a browser window
2. Ask you to authorize the Devvit CLI
3. Log you in automatically

**Expected Output**: "Successfully logged in as u/[your-username]"

---

## Step 3: Install Project Dependencies

```bash
cd /Users/sansy/reddit-word-chain
npm install
```

**Expected Output**:
- `added X packages`
- `found 0 vulnerabilities`

---

## Step 4: Build the Project

```bash
npm run build
```

**What to check:**
- [ ] No TypeScript errors
- [ ] No compilation errors
- [ ] `dist/` directory created
- [ ] Build completes successfully

**Expected Output**:
```
✓ Building project...
✓ Build complete
```

**❌ If build fails:**
- Read error messages carefully
- Check for missing imports
- Verify all files exist in `src/`
- Run `npm install` again if needed

---

## Step 5: Start Local Playtest

```bash
npm run dev
```

**What happens:**
- Devvit starts a local development server
- Creates a test environment in your browser
- Simulates Reddit's environment locally

**Expected Output**:
```
Starting playtest...
Open your browser to: https://developers.reddit.com/playtest
```

**Keep this terminal window open** - it needs to stay running!

---

## Step 6: Open Playtest in Browser

1. Browser should open automatically to playtest URL
2. If not, manually open: `https://developers.reddit.com/playtest`
3. You should see the Word Chain post preview

---

## Step 7: Comprehensive Functionality Tests

### 🎨 TEST 1: Splash Screen

**What to test:**

- [ ] **Visual Check**
  - [ ] Orange background (#FF4500) displays
  - [ ] Title "🔗 WORD CHAIN" is visible
  - [ ] Subtitle "Massively Multiplayer Word Game" shows
  - [ ] "How to Play" section with 3 rules visible
  - [ ] Your username displays as "Playing as u/[username]"
  - [ ] "START PLAYING" button is visible and styled
  - [ ] Footer text "Built with Devvit Web + Kiro" appears

- [ ] **Interaction Check**
  - [ ] Click "START PLAYING" button
  - [ ] Should transition to Game Screen
  - [ ] Transition should be smooth (no errors)

**✅ Pass Criteria**: All elements visible, button click navigates to game

---

### 🎮 TEST 2: Game Screen - Initial State

**What to test:**

- [ ] **Header Section**
  - [ ] Chain Length displays (should be 0 initially)
  - [ ] Your Score displays (should be 0 initially)
  - [ ] Both values clearly visible in white text on orange background

- [ ] **Current Word Display**
  - [ ] Shows "REDDIT" as starting word
  - [ ] Displayed in large, bold text
  - [ ] Shows "by u/Game" as the last player

- [ ] **Next Letter Hint**
  - [ ] Blue box shows "Next word must start with:"
  - [ ] Shows "T" (last letter of REDDIT)
  - [ ] Letter is large and clear

- [ ] **Input Section**
  - [ ] Text input field visible
  - [ ] Placeholder text shows "Word starting with T..."
  - [ ] Submit button visible
  - [ ] Submit button is disabled when input is empty

- [ ] **Navigation**
  - [ ] "View Leaderboard" button at bottom
  - [ ] Footer shows time remaining (or "Round ended")

**✅ Pass Criteria**: All UI elements display correctly

---

### ✍️ TEST 3: Word Submission - Valid Word

**Test Case 1: Submit a valid word**

1. Type a valid word starting with "T" (e.g., "turtle")
2. Click Submit

**What to check:**

- [ ] Input field accepts text
- [ ] Submit button becomes enabled when text entered
- [ ] After submission:
  - [ ] Success toast appears: "Great! Chain is now X words long!"
  - [ ] Input field clears
  - [ ] Current word updates to "TURTLE"
  - [ ] Last player shows your username
  - [ ] Chain length increases by 1
  - [ ] Your score increases by 1
  - [ ] Next letter hint updates to "E" (last letter of turtle)
  - [ ] No error messages appear

**✅ Pass Criteria**: Word accepted, all state updates correctly

---

### ❌ TEST 4: Word Validation - Error Cases

**Test Case 2: Word too short**

1. Current word ends with "E"
2. Type "et" (2 letters)
3. Click Submit

**Expected Result:**
- [ ] Error message: "Word must be at least 3 letters!"
- [ ] Word NOT added to chain
- [ ] Chain length unchanged
- [ ] Score unchanged

---

**Test Case 3: Wrong starting letter**

1. Current word ends with "E"
2. Type "apple" (starts with A, not E)
3. Click Submit

**Expected Result:**
- [ ] Error message: "Word must start with 'E'!"
- [ ] Word NOT added to chain

---

**Test Case 4: Invalid characters**

1. Type "e123" or "e-test" (contains non-letters)
2. Click Submit

**Expected Result:**
- [ ] Error message: "Word must contain only letters!"
- [ ] Word NOT added to chain

---

**Test Case 5: Not a real word**

1. Type "ezzzzzz" (not a dictionary word)
2. Click Submit

**Expected Result:**
- [ ] Error message: "Not a valid English word!"
- [ ] Word NOT added to chain
- [ ] Dictionary API was called (may take 1-2 seconds)

---

**Test Case 6: Recently used word**

1. Submit a valid word (e.g., "elephant")
2. Submit another word to continue chain
3. Try to submit "elephant" again

**Expected Result:**
- [ ] Error message: "Word was used recently! Try another."
- [ ] Word NOT added to chain

**✅ Pass Criteria**: All validation rules work correctly

---

### 📊 TEST 5: Leaderboard Screen

1. Submit at least 2-3 words to build up your score
2. Click "View Leaderboard" button

**What to check:**

- [ ] **Navigation**
  - [ ] Transitions to Leaderboard screen
  - [ ] Orange header with title "Leaderboard"
  - [ ] Subtitle "Top Word Chain Champions"
  - [ ] Back button visible in header

- [ ] **Leaderboard Display**
  - [ ] Your username appears in the list
  - [ ] Your score is correct (matches number of words submitted)
  - [ ] Rank #1 shows 🥇 (gold medal)
  - [ ] Your username format: "u/[username]"
  - [ ] Score displays as large blue number
  - [ ] "words" label appears below score

- [ ] **Empty State** (if testing fresh)
  - [ ] If no scores yet: Shows "No players yet!" message
  - [ ] Friendly emoji (🎮) displays
  - [ ] Helpful text: "Be the first to add a word to the chain!"

- [ ] **Back Navigation**
  - [ ] Click "Back" button
  - [ ] Returns to Game Screen
  - [ ] Game state preserved (current word, chain length, etc.)

**✅ Pass Criteria**: Leaderboard displays correctly, navigation works

---

### 🔄 TEST 6: Multi-Word Chain Flow

**Build a complete word chain:**

1. Start with "REDDIT"
2. Submit "turtle" → T
3. Submit "elephant" → T
4. Submit "tiger" → R
5. Submit "rabbit" → T
6. Submit "turtle" (should fail - recently used!)
7. Submit "tiger" (should fail - recently used!)
8. Submit "toast" → T

**What to verify:**

- [ ] Each valid word increases chain length
- [ ] Each valid word increases your score
- [ ] Current word always updates to last valid word
- [ ] Next letter hint always correct
- [ ] Recently used words blocked (last 50)
- [ ] Error messages clear and helpful
- [ ] Toast notifications appear for successes

**✅ Pass Criteria**: Can build chain of 5+ words successfully

---

### 🔄 TEST 7: Round Management

**Test new round functionality:**

1. Look for "Start New Round" button (may need to end current round or wait)
2. If available, click it

**What to check:**

- [ ] Success toast: "New round started!"
- [ ] Current word resets to "REDDIT"
- [ ] Chain length resets to 0
- [ ] Last player shows "Game"
- [ ] Timer resets
- [ ] Recent words cleared (can reuse old words)
- [ ] Your score persists (leaderboard maintained)

**Note**: Round auto-ends after configured duration (default: 1 hour)

**✅ Pass Criteria**: Round can be manually reset

---

### 💾 TEST 8: State Persistence

**Test Redis state persistence:**

1. Submit several words to build a chain
2. Note your current score and chain length
3. **Stop the playtest** (Ctrl+C in terminal)
4. **Restart playtest**: `npm run dev`
5. Reload browser

**What to check:**

- [ ] Chain length persists
- [ ] Current word persists
- [ ] Your score persists
- [ ] Leaderboard data persists
- [ ] Recent words list persists

**✅ Pass Criteria**: Game state survives server restart

---

### 📱 TEST 9: Responsive Design

**Test different viewport sizes:**

1. In browser DevTools, open responsive design mode (Cmd+Option+M on Mac, Ctrl+Shift+M on Windows)
2. Test these sizes:

**Mobile (375x667 - iPhone SE)**
- [ ] All text readable
- [ ] Buttons touchable (not too small)
- [ ] Input field usable
- [ ] No horizontal scrolling
- [ ] Spacing appropriate

**Tablet (768x1024 - iPad)**
- [ ] Layout scales properly
- [ ] Good use of space
- [ ] Text not too large or small

**Desktop (1920x1080)**
- [ ] Content centered
- [ ] Not stretched too wide
- [ ] Max-width constraints work

**✅ Pass Criteria**: Playable on all screen sizes

---

### ⚡ TEST 10: Performance & Edge Cases

**Test Case: Rapid submissions**

1. Type a word
2. Click Submit rapidly (double-click)
3. Check if word added twice

**Expected:**
- [ ] Word only added once (no duplicate submissions)
- [ ] No crashes or errors

---

**Test Case: Empty input**

1. Don't type anything
2. Submit button should be disabled

**Expected:**
- [ ] Cannot click Submit when empty
- [ ] No error if somehow submitted

---

**Test Case: Very long word**

1. Type "antidisestablishmentarianism" (28 letters)
2. Submit

**Expected:**
- [ ] Word accepted if it starts with correct letter
- [ ] UI doesn't break with long word
- [ ] Displays properly

---

**Test Case: Dictionary API failure**

1. Disconnect internet temporarily (or block dictionary API)
2. Try to submit a word

**Expected:**
- [ ] Error message: "Could not verify word. Please try again."
- [ ] App doesn't crash
- [ ] User can try again

---

**Test Case: Lowercase vs Uppercase**

1. Type "ELEPHANT" (all caps)
2. Submit

**Expected:**
- [ ] Word normalized to lowercase
- [ ] Accepted if valid
- [ ] Displayed in uppercase in UI

**✅ Pass Criteria**: No crashes, graceful error handling

---

## Step 8: Create Test Report

After completing all tests, create a checklist:

### ✅ Functionality Test Results

**Core Features:**
- [ ] Splash screen displays and navigates
- [ ] Game screen displays correctly
- [ ] Can submit valid words
- [ ] Word validation works (all 5 rules)
- [ ] Leaderboard displays correctly
- [ ] Navigation between screens works
- [ ] State persists across restarts

**Polish Features:**
- [ ] Responsive design works
- [ ] Error messages clear and helpful
- [ ] Toast notifications appear
- [ ] Loading states handled
- [ ] No console errors
- [ ] Performance is smooth

**Edge Cases:**
- [ ] Empty inputs handled
- [ ] Invalid inputs rejected
- [ ] API failures handled gracefully
- [ ] Duplicate submissions prevented
- [ ] Very long words supported

---

## Step 9: Check Build Output

```bash
npm run build
```

Verify `dist/` directory:

```bash
ls -lh dist/
```

**Should see:**
- JavaScript bundle files
- Source maps
- Asset files

**Check bundle size:**
```bash
du -sh dist/
```

**Expected**: < 5MB total

---

## Step 10: Test Hooks (Optional)

### Test Pre-commit Hook

```bash
# Make .kiro hooks executable
chmod +x .kiro/hooks/pre-commit.sh

# Test it
./.kiro/hooks/pre-commit.sh
```

**Expected Output:**
```
✓ TypeScript type check passed
✓ devvit.yaml is valid
✓ package.json is valid
```

---

## Common Issues & Solutions

### Issue: "devvit: command not found"

**Solution:**
```bash
npm install -g devvit
# Or use npx
npx devvit playtest
```

---

### Issue: Build fails with TypeScript errors

**Solution:**
- Devvit-specific type errors are normal with `tsc` directly
- Use `devvit build` instead of `tsc`
- Errors about JSX runtime are expected

---

### Issue: "Cannot find module @devvit/public-api"

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

---

### Issue: Playtest page doesn't load

**Solution:**
- Check if `npm run dev` is still running
- Refresh browser
- Try incognito mode
- Clear browser cache

---

### Issue: Dictionary API too slow

**Expected behavior**: Word validation takes 1-2 seconds
- This is normal for external API
- Not a bug

---

### Issue: Redis state not persisting

**In playtest mode**: Redis is ephemeral (resets on restart)
**In production**: Redis persists properly
- This is expected in local dev

---

## Step 11: Final Pre-Submission Checklist

Before uploading to Reddit:

- [ ] All tests passed
- [ ] No critical bugs found
- [ ] Build completes successfully
- [ ] Local playtest works smoothly
- [ ] Responsive design verified
- [ ] Error handling tested
- [ ] Edge cases handled
- [ ] Performance is acceptable
- [ ] No console errors in browser
- [ ] Ready for production deployment

---

## Step 12: Document Any Issues Found

If you find bugs during testing, document them:

**Bug Template:**
```markdown
### Bug: [Short description]

**Steps to reproduce:**
1.
2.
3.

**Expected behavior:**


**Actual behavior:**


**Severity:** Critical / Major / Minor

**Fix needed:** Yes / No / Nice to have
```

---

## Next Steps After Testing

Once all tests pass:

1. ✅ **Fix any critical bugs found**
2. ✅ **Verify fixes with another test pass**
3. ✅ **Proceed to deployment**: `npm run upload`
4. ✅ **Create demo post in test subreddit**
5. ✅ **Test in production environment**
6. ✅ **Submit to hackathon**

---

## Support

If you encounter issues:

- Check Devvit docs: https://developers.reddit.com
- Discord support: https://discord.gg/devvit
- Review error messages carefully
- Check browser console for errors

---

**Good luck with testing! 🚀**
