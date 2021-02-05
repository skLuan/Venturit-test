#!/usr/bin/env sh

# abort on errors
# set -e

# build
npm run build

git init
git add -A
git commit -m 'deploy'

# navigate into the build output directory
cd dist

git push -f git@github.com:skLuan/Venturit-test.git main:gh-pages

cd -