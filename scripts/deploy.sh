#!/usr/bin/env sh

yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m deploy &&
git branch -M main &&
git remote add origin git@github.com:Mike1638/bigscreen-website.git &&
git push -uf origin main &&
cd -;
