---
title: Habits for productivity
date: 2024-09-14
canonicalUrl: https://deantarisai.me/blog/habits_for_productivity
draft: false
layout: PostSimple
summary: The guide for lazy overachievers
tags:
  - tips
---

There are times when I find myself not performing at my best, not because of burnouts ,but being simply overwhelmed. Now, what do I mean by being overwhelmed ? In my context, being overwhelmed means:

- Having so many things to do, but not knowing where to start or leaving tasks half done and moving on to the next one
- Having many knowledge gaps on a subject (or topic) which forces you to learn whilst implementing

In this post, I'm going to share a few ways I try to simplify my workflow. This is opinionated and views may vary depending on your experience.

### Procrastination is the devil

> The best way to fight procrastination is to stop scrolling this post immediately and go work on that side project gathering dust in your repository.


In the past few days, I have been reflecting on how I do things in general and I managed to pick a few traits about myself which I already knew (and had come to peace with) subconsciously.

The "I'll do it later" syndrome is a common mental disorder caused by knowing what you're supposed to be doing at a particular time yet postponing the task, usually for negligible reasons. I found [this article](https://www.mcleanhospital.org/essential/procrastination) on the subject and it was enlightening. The main takeaway (for me) was that procrastination in itself is not a sign of laziness, but rather it's linked to other mental conditions such as anxiety and depression.
Whenever you find yourself procrastinating, take a step back and look at everything that's affecting your emotional state. Prioritise understanding yourself better so that you know what triggers you and affects your work.  

Understand that at the end of the day after all that procrastinating, we'll still have to get things done. We can't hustle our way out of not doing things and expect to remain in sync with the demands of life. 
Like it or not, we'll not live forever so make good use of time while you still can.


This isn't medical advice though.

### Multitasking is a scam 😲

We're not 💻computers.

As tempting as it sounds to try and many things at once, multitasking (if not done properly) can become a black hole🕳 for productivity, leading to hours of frustration because you're jumping around different contexts so it's difficult to concetrate on the details.

If you're thinking of trying multitasking, my advice is don't. Whenever you can, always opt for doing one task at a time making sure that you do it from start to finish before moving on to the next task. If finishing the task at one sprint is not possible, then split the task into small achievable milestones. 

### You don't need all those tabs 🗃


![Screenshot of Chrome](/static/images/chrome.png)

> Look at all those tabs. Disgusting 🤢



I'll be honest for a moment and admit that closing tabs is not something I do often enough. I like to keep them open so that it's easy to navigate back to some interesting tab later on. 

My mom had this rule that I should clean my room before I began a study session. It sounds obvious enough, but the environment you work in DOES have an impact on your productivity. 
And we're not talking about the physical environment only, but anywhere you're trying to channel your focus to.

Your work environment also includes those many tabs open in your browser or any program that's rendering attention grabbing content on your screen. Not only does it slow down your machine (obviously) but it's bad for concetration as well. Having as little distractions as possible when doing a task helps you achieve that 'flow' state which makes your work faster and with more confidence.

Save your application states and bookmark those other tabs and you can resume later. Whatever it takes, just keep your desktop decluttered to give you the room for focus.

### Automate 'em

For `n` steps that have to be done per task try to find which steps have automatable behaviour. 
By taking time to properly setup automated behaviour(s) in your workspace, you reduce the amount of steps that you have to manually go through before the task is done. 
This lowers the amount of mental overhead when you're working because you can focus on the main task at hand while being assured that certain stages will be handled for you.

This is where scripting comes handy, because you can write the instructions and call that script later on when you need it. For instance, `bash` scripts can be helpful if you define them and set them up with proper settings allowing you to call them like global commands such as `ls` or `cd` from anywhere in your system.


Here's a simple example for a bash script I use to create a new post template filled with the basic required frontmatter fields. It ain't pretty but it works😎

```bash

#! /usr/bin/bash


# function to replace whitespace with '_'
_encode() {
  local string="$1"
  echo "${string//[[:space:]]/_}" | tr 'A-Z' 'a-z'

}


# Get current date in YYYY-MM-DD format
date=$(date +%Y-%m-%d)

# Prompt for frontmatter fields
echo "Create new post🌃"
read -p "Title 🖋 : " title
read -p "Summary 📜 : " summary
read -p "Tags 🏷 (comma-separated): " tags
read -p "Canonical url 🔗 : " canonicalUrl



# create filename from the passed in title
filename=$(_encode "$title").mdx;
baseUrl="https://deantarisai.me/blog/";

# Create frontmatter
frontmatter=$(cat <<EOF
---
title: $title
date: $date
canonicalUrl: "$baseUrl$(_encode "$canonicalUrl")"
draft: true
tags: [$tags]
layout: PostLayout
summary: $summary
---
EOF
)


# direct the output to a file at the path stored by $filename
echo "$frontmatter" > data/blog/"$filename"

# track the file and make a commit. This last part is opinionated
git add . && git commit -a -m "New✨ post draft - $title  🖋." & echo "New✨ template for the post - $title. written 🖋."

```


### Don't sweep sh*t under the carpet and expect it not to stink

Hiding a problem doesn't necessarily solve it, it's like burying your head in the sand. By all means, instead of keeping bad progress sometimes it's better to gaslight the whole thing and start on a fresh mind. 
For example, try not to leave half implemented functions in your code because it makes it difficult when you try to make sense of what's going on later on.

If you can't properly do something at the moment then don't do it at all otherwise it will just be another mess for you to clean up later on.

TL;DR
