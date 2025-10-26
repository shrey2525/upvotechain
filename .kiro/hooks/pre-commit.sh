#!/bin/bash

# Pre-commit hook for Word Chain Game
# Validates code quality before committing

echo "🔍 Running pre-commit checks..."

# Check if TypeScript files are present
if git diff --cached --name-only | grep -q '\.tsx\?$'; then
  echo "📝 TypeScript files detected, running type check..."

  # Run TypeScript compiler in check mode
  npx tsc --noEmit

  if [ $? -ne 0 ]; then
    echo "❌ TypeScript type check failed!"
    echo "Please fix type errors before committing."
    exit 1
  fi

  echo "✅ TypeScript type check passed"
fi

# Validate devvit.yaml exists
if [ ! -f "devvit.yaml" ]; then
  echo "❌ devvit.yaml not found!"
  exit 1
fi

# Check for common issues
echo "🔍 Checking for common issues..."

# Check for console.log statements (optional - can be strict)
if git diff --cached --name-only | xargs grep -l "console\.log" 2>/dev/null; then
  echo "⚠️  Warning: console.log statements found. Consider using Devvit's logging."
fi

# Validate package.json
if [ -f "package.json" ]; then
  echo "📦 Validating package.json..."
  node -e "JSON.parse(require('fs').readFileSync('package.json', 'utf8'))" 2>/dev/null

  if [ $? -ne 0 ]; then
    echo "❌ package.json is invalid!"
    exit 1
  fi
fi

echo "✅ All pre-commit checks passed!"
exit 0
