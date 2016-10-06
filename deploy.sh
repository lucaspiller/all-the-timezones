#!/bin/sh

if [ ! -d deploy ]; then
  git clone -b gh-pages git@github.com:lucaspiller/all-the-timezones.git deploy
fi

gulp webpack:build-release

cd deploy

git rm -f *
git reset HEAD CNAME
git checkout -f CNAME
cp ../build/release/* .
git add .

git commit -m "Release `date`"

git push origin gh-pages
