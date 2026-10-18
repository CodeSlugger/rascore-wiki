#!/usr/bin/env bash
# Сборка и выкладка вики: исходники → main, сайт → gh-pages. Токен — в GH_TOKEN, нигде не сохраняется.
set -euo pipefail
cd "$(dirname "$0")/.."
: "${GH_TOKEN:?нужен GH_TOKEN (classic, repo)}"
REPO=https://github.com/CodeSlugger/rascore-wiki.git
AUTH="Authorization: Basic $(printf 'x-access-token:%s' "$GH_TOKEN" | base64 -w0)"
npm run build
git add -A
git -c user.name=rascore -c user.email=docs@rascore.local commit -q -m "${1:-Обновление вики}" || true
GIT_TERMINAL_PROMPT=0 git -c credential.helper= -c http.extraHeader="$AUTH" push -q "$REPO" main
touch build/.nojekyll
(cd build && rm -rf .git && git init -q -b gh-pages && git add -A \
  && git -c user.name=rascore -c user.email=docs@rascore.local commit -q -m "Сборка вики" \
  && GIT_TERMINAL_PROMPT=0 git -c credential.helper= -c http.extraHeader="$AUTH" push -q -f "$REPO" gh-pages && rm -rf .git)
echo "опубликовано: https://codeslugger.github.io/rascore-wiki/"
