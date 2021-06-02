---
title: How I made this
description: Over-engineering a simple personal blog with Nuxt, Vue and github pages.
date: 05/23/2021
published: true
author:
    name: Thomas Tu
---


## Motivation

One of the most important trends we've seen in web development over the past 10 years has been the evolution of client-side applications.  My first exposure to the web came in the form of customizing MySpace layouts and Neopets profiles as a kid.  From the web 1.0 era well into the mid 2010s, the basic SSR model stayed more or less the same.  Even when jQuery came along (and ushered in a new era of poorly written asynchronous web pages), most processing, routing, content management happened at the data center.  But it's fair to say that the web has come a long way since Google released Angular in 2010 ("Don't be evil" was still in the company's code of conduct).   In the years that followed, it felt like some major new framework was being released every year (Backbone, Ember, Meteor, React, Vue, etc.) and frontends rapidly evolved from static interfaces to fully interactive applications.  Well into the mid 2010s, it wasn't that important to chase the latest and maybe-greatest - you could build highly performant and functional front-ends with just vanilla HTML/CSS/jQuery+javascript and a little bit of copy and paste for code re-use.  While that's still kind of true today, it's also true that tooling, tutorials, and communities have fully adopted one of Angular/React/Vue going forward.  Even if they aren't the right technology fit, it's worth knowing what the development workflow looks like because moving forward the size of these ecosystems simply makes it *easier* to scaffold and build front-ends within a framework as opposed to starting with vanilla HTML/CSS/JS + some backend server.

My original github pages site was based off of the ruby-based static site generator, Jekyll.  I loved it - it worked "out of the box" with github pages, the liquid templating system felt awkward at times but it mostly did everything I wanted it to, and working with it didn't require any major mental gymnastics coming from django.  But then github released github workflows, and suddenly, any build system was possible without the need to integrate with an external CI service and I decided it was a good opportunity to get a basic grasp on the foreign world of client-side applications.  So I googled "VueJS static sites", found a thing called Gridsome, went through the quickstart and scaffolded a splash page which read originally read:  

> I'm currently over-engineering a new personal site! Stay tuned!

And then life sort of just happened (had a wedding, went on a honeymoon, enrolled in graduate school, adopted cats, went into quarantine) and I never really did anything beyond a splash page.  So two years later and a free weekend, I decided to revisit this site with two very simple design parameters:

- be able to write prose in markdown, and have that show up in a "blog" or "article" format.
- support dynamic data driven content to be able to separate out content and display concerns

![Original site splash page](/pictures/original-splash.png)


This isn't going to be a technical guide or walkthrough, because there's enough of that out there from people far more talented and experienced than myself.  But I figured it would be nice to write about the challenges and decisions for developers like myself who are completely new to the modern front end stack.

## Picking A Framework

At around the time I decided to move away from the comfort of Jekyll, [VueJS had just surpassed React in github stars](https://www.reddit.com/r/vuejs/comments/8r7tb7/vue_has_passed_react_in_stars_on_github_almost_at/).  Like all serious programmers, my technology choices are driven by hype-cycles and social affirmation so I knew I was going to use VueJS.  

But in all seriousness, what drew me to VueJS was the ability to import a CDN, and just start using it.  Coming from the world of SSR, this was a mental model I could adapt to.  Vue has you start at creating a single `.html` file where the only unfamiliar content is a little snippet initializing a vue app `var app = new Vue({el: '#app'})`.  I didn't have to start by learning how to compile a javascript project, or by writing/designing re-usable components, I didn't even have to know what `npm` or `yarn` were.  I could build as quickly or slowly as the leisurely pace of my own understanding.  That said, it's hard to keep even a simple project that small for long (re-usable components self-motivate very quickly in the front-end development process), but being able to start small was a massive boon to productivity.

In contrast, the tutorial for React actually has you starting at `create-react-app`.  I'm not an expert in pedagogy but there are *way* too many new elements here as a non-frontend dev; when you have to blackbox 95% of what's in front of you, it's just distracting to find the important bits.  I had even more trouble with the Angular tutorial, and I'm honestly still not sure what is going on in the starter "phonecat" project after all these years (this is mostly the same starter project as when Google still included "Don't be evil" in its code of conduct.)   This isn't by any means a critique of how React or Angular onboard new users - I just think for the subset of potential users out there whose point of common reference is from some SSR-only framework like django or rails, VueJS is going to be the easiest tool to learn from scratch.  I'm not nearly knowledgeable or experienced enough to evaluate the right technology choice if I were to lead an engineering team or build a new product, but from a learning perspective starting with Vue was a no-brainer to me.

### Static Sites With Vue

Once I went felt comfortable with how to manipulate the DOM from a Vue instance, I started looking into frameworks for building static sites.  I found that the VueJS ecosystem basically offers up two ([and a half](https://vuepress.vuejs.org/)) major frameworks -- [NuxtJS](https://nuxtjs.org/) and [Gridsome](https://gridsome.org/).  My process for figuring out how to build this site consisted of three parts - (1) figure out how to scaffold a project, (2) figure out how to work in the scaffolding by implementing a single feature, (3) figure out a deployment system in the context of the scaffolding.  The minimal documentation I needed to do so is outlined below.  From this, I was able to get started and figure out what to search in StackOverflow or within the docs.  I think the concept of minimal documentation is important when learning something new because it's the footing on which you figure out everything else.  In my short time working with Nuxt and Gridsome, I felt that abstractions in Nuxt were much easier to follow.  Just comparing the directory structure docs for [nuxt](https://nuxtjs.org/docs/2.x/get-started/directory-structure/) vs [gridsome](https://gridsome.org/docs/directory-structure/), note that the gridsome docs have several sections that contain the sentence pattern "If you want to do X, then you may find this useful".  In contrast, every explanatory paragraph in the NuxtJS docs is written in the declarative tense.  For a new user, it's less distracting and much appreciated.  Nuxt has somehow written its documentation in a way such that it exposes "optional" information only when that information is useful - i.e. information is slow-dripped.  Many parts of the Gridsome docs are the complete opposite.  For me, the documentation styles ultimately prompted me to continue building with Nuxt.  As far as I could tell, the two frameworks have something close to feature parity, and both have a rich ecosystem of extensions (what Nuxt calls `modules` and what Gridsome calls `Plugins`.)

<p class="has-text-centered is-size-7">Table 1.  Resources I used to get started with Nuxt and Gridsome</p>

|                                      | Nuxt                                                                                           | Gridsome                                                                                                        |
|--------------------------------------|------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| 1. Scaffold a project                | `yarn create nuxt-app`                                                                         | `gridsome create`                                                                                               |
| 2. Implement a blog                  | [Creating a Blog With Nuxt-Content](https://nuxtjs.org/blog/creating-blog-with-nuxt-content/)  | [Build a blog with Gridsome](https://nicholaskhang.github.io/my-blog/post/build-a-blog-with-gridsome-tutorial/) |
| 3. Figure out deployment             | [Deploying a NuxtJS app on Github Pages](https://nuxtjs.org/docs/2.x/deployment/github-pages/) | [Deploy to Github](https://gridsome.org/docs/deploy-to-github/)                                                 |
| 4. (optional) Explore the ecosystem! | [NuxtJS Modules](https://modules.nuxtjs.org/)                                                  | [Gridsome Plugins](https://gridsome.org/plugins/)                                                               |

