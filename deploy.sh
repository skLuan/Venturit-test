#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git push -f git@github.com:skLuan/Venturit-test.git master:gh-pages

cd -