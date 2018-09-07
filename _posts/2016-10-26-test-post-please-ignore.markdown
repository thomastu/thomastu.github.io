---
layout: post
title:  "Test Post Please Ignore"
date:   2016-10-27 00:27:00 PDT
category: misc
tags:
  - test
---

Test post, please ignore.  

# Git Tips and Tricks

Keep your blame ambiguous with heavy use of linting, and action-oriented commit messages.  According to the message below, I *made* something!  That's work you can take home to the bank.

```bash
git add -u
git commit -m'made some changes'
git push
```

Eliminate the competition by committing in your enemy's name!

```bash
git config --global user.name "Rival Dev"
rm -rf .git
git init
git add .
git commit -m "Initial commit"
git remote add origin git@central_server/repo
git push -u --force origin master
```

# Table of Contents

[TOC]
