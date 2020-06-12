# portfolio

## About

This project is a central showcase for my personal projects.

## Tech stack

Vue CLI
Vuetify
GitHub Pages

## Deploy on GitHub Pages

The command lines need to be manually run. The shell script with execa package did not work for me. The full [instruction document is here.](https://dev.to/rolanddoda/deploy-to-github-pages-like-a-pro-with-github-actions-4hdg)

```bash
git checkout --orphan gh-pages
npm run build
git --work-tree dist add --all
git --work-tree dist commit -m 'Deploy'
git push origin HEAD:gh-pages --force
rm -r dist
git checkout -f master
git branch -D gh-pages
```
