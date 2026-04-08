#!/bin/bash

# 1. Argument Validation
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <input_markdown_path> <output_html_path>"
    echo "Example: $0 src/presentation.md dist/index.html"
    exit 1
fi

INPUT_FILE="$1"
OUTPUT_FILE="$2"

# Check if inotifywait is installed
if ! command -v inotifywait &> /dev/null; then
    echo "Error: 'inotify-tools' is not installed."
    echo "Installation:"
    echo "  Ubuntu/Debian: sudo apt-get install inotify-tools"
    echo "  macOS: brew install inotify-tools"
    exit 1
fi

# 2. Initial Build Execution
echo "🚀 Running initial build..."
bun run md2reveal.ts "$INPUT_FILE" "$OUTPUT_FILE"

echo "👀 Starting recursive markdown file watcher. (Exit: Ctrl+C)"

# 3. Enter watch loop (Monitoring current directory and subdirectories recursively)
# Added '-r' flag to watch subdirectories.
# Changed format to "%w%f" to output the full relative directory path and file name.
inotifywait -r -m -e close_write,moved_to . --format "%w%f" 2>/dev/null | while read -r CHANGED_FILE
do
    # Ignore events caused by updating the output file itself (Prevent infinite loop)
    # Using wildcard (*) to match paths accurately even if './' is prepended by inotifywait
    if [[ "$CHANGED_FILE" == *"$OUTPUT_FILE" ]]; then
        continue
    fi

    # 4. Check if the file has a .md extension
    if [[ "$CHANGED_FILE" == *.md ]]; then
        echo "---------------------------------------------------"
        echo "[$(date +'%H:%M:%S')] 🔄 Changes detected in '$CHANGED_FILE'. Rebuilding..."
        
        # Execute build script
        bun run md2reveal.ts "$INPUT_FILE" "$OUTPUT_FILE"
        
        # Debouncing: Prevent duplicate builds caused by consecutive write events from the editor
        sleep 0.5
    fi
done
