---
title: How I made this
description: Over-engineering a simple personal blog with Nuxt, Vue and github pages.
date: 05/23/2021
published: true
author:
    name: Thomas Tu
---


## Background

A few years ago, I decided I would become a more well rounded developer and pick up some of the frankly amazing tooling that has come about in front end development.  Over the past few years, the rise of PWAs and SPAs has been a technical marvel to me.  My first foray into web development came about when I was in elementary school, modifying CSS and HTML templates for my user profile on Neopets.com (it used to be cool!)  As a professional developer, I would do some template-based front end work (mostly django) every now and then and to be honest that wasn't so different from my lived experiences as a child.  But this new world of front end development was a world apart and completely unfamiliar so I set out on a mission to learn enough of the frontend toolchain to take a peek in this fast growing world of client-side computing.  The text on the splash page I had up for a solid 2 years originally read:  

> I'm currently over-engineering a new personal site! Stay tuned!

and it took a while to find the bandwidth, time and interest to over-engineer something, but here we are!

![Original site splash page](/pictures/original-splash.png)


## Tools

My original github pages site was based off of the ruby-based static site generator, Jekyll.  I loved it - it worked "out of the box" with github pages, the liquid templating system felt awkward to me but it mostly worked, and the mental model made a lot of sense to me.  But then github released github workflows, and suddenly, any build system was possible without the need to integrate with an external CI service.  At around the time I decided to move away from the comfort of Jekyll, [VueJS had just surpassed React in github stars](https://www.reddit.com/r/vuejs/comments/8r7tb7/vue_has_passed_react_in_stars_on_github_almost_at/).  Like all serious programmers, my technology choices are driven by hype-cycles and social affirmation so I knew I was going to use VueJS.  In all seriousness, I was curious about the hype and being able to start using Vue without having to build a project was a helpful bridge to break out of the mental model of SSR.

For building static sites, the VueJS ecosystem basically offers up two ([and a half](https://vuepress.vuejs.org/)) major frameworks -- [NuxtJS](https://nuxtjs.org/) and [Gridsome](https://gridsome.org/).  At the time, the decision came down to which project could create better scaffolding, and the winner was originally Gridsome.  And then life sort of just happened (had a wedding, went on a honeymoon, enrolled in graduate school, adopted cats) and I never really did anything beyond a splash page.  So two years later and a free weekend, I decided to revisit this site with the following goals:

- be able to write prose in markdown, and have that show up in a "blog" or "article" format.
- support dynamic data driven content to be able to separate out content and display concerns
