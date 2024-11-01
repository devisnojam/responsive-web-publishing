#!/bin/bash

TARGET=$(find ./apps -mindepth 1 -maxdepth 1 -type d | fzf --prompt="Select an app to run: ")

# 선택한 디렉토리로 dev 명령어 실행
if [ -n "$TARGET" ]; then
  pnpm --filter $TARGET dev
else
  echo "No directory selected."
fi
