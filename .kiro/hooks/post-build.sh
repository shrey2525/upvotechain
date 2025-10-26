#!/bin/bash

# Post-build hook for Word Chain Game
# Runs after successful build to validate output

echo "🎯 Running post-build validation..."

# Check if dist directory was created
if [ ! -d "dist" ]; then
  echo "❌ Build failed - dist directory not found"
  exit 1
fi

# Check for main bundle
if [ -f "dist/main.js" ] || [ -f "dist/main.tsx" ] || ls dist/*.js 1> /dev/null 2>&1; then
  echo "✅ Build output verified"
else
  echo "❌ No JavaScript output found in dist/"
  exit 1
fi

# Display build statistics
if [ -d "dist" ]; then
  echo "📊 Build Statistics:"
  echo "   Files: $(find dist -type f | wc -l | xargs)"
  echo "   Total size: $(du -sh dist | cut -f1)"
fi

echo "✅ Post-build validation complete!"
exit 0
