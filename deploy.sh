#!/usr/bin/env bash

# clean old:
rm -rf assets
rm -rf get-started
rm -rf *.html

# new files:
cp -R docs/.vuepress/dist/** .