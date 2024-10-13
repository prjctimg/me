---
title: Getting comfy with Neovim
date: 2024-10-10
draft: false
tags: [neovim]
layout: PostSimple
summary: Neovim isn't bad if you give it a chance, though setting it up may piss you off lol
---

## Introduction

Leaving VSCode, probably the most user friendly code editor I ever ran `Hello, world!` in, was the biggest change I made this year.

Because I'm running on 4GB LPDDR4 RAM, I need a way to achieve the same end result with less resource intense tooling. On my machine, VSCode consumed around 1.3 GB of memory when I had a server running. That's way to much memory than I can afford and makes my other apps  delay notifications.

However, how can you know what's out there if you never leave your comfort zone ?

So I challenged myself by uninstalling my current editor and installing Neovim using the LazyVim template. I also installed Warp because of it's AI intergration meaning that I can look up how to do stuff without leaving my terminal. I have lately fantasised about the `lean` setup in which I do everything from the shell, and because Neovim does just that (run inside the terminal), it seemed like a natural fit.

In this post, I'll share some random stuff I liked about Neovim and some bad advice to anyone who wants to go all in.
For those who have configured custom keymaps in any code editor, the learning curve is gentle. I had a decent keymap configuration in VS Code but I usually relied on the mouse to navigate around the UI.

This is bad because you're switching to and fro when in reality you could have just as well used a keymap to achieve that action. Vim based editors are a testimony that laziness can be elegant, if done right.

However a notable hurdle with getting dirty with the configuration is that you have to write it in Lua, which is a programming language on its own (I like Neovim and all, but learning a new programming language just to configure my editor is a bit extreme. At least for now).

### Learn how to navigate

How can you be efficient with a code editor when you don't know how to look around ?

Getting to know the commands which allow you to search for symbols (functions, variables etc) in a buffer (or currently opened file) or even throughout your entire workspace (like `livegrep`) can give you a quick overview of where that symbol is being implemented (if it is exported for, example).

### Know the conventions

When you use something long enough you start to make out 'patterns' which give you insight on how it was designed. A good example is how to quit a window which can be done by pressing `q` or `esc`. To be honest, it took me a while to understand how to exit contexts properly. For example, to exit the terminal mode you press `esc` twice followed by `q` (although I just type `exit` in the terminal and the window closes)

### Familiarise with the features you relied on in your previous editor

I'm not much of a fast learner and often have to repeat the same information a few times to be confident enough that it's now committed to memory. When I decided to start learning `nvim`, I made a mental note to myself.

> The wise man knows that he knows nothing.
>

This is true (to a point) because arrogance is bad for learning since it makes you overlook information that may be important because you'll have that mentality of 'knowing it all'

> You learn nothing in life if you think you're right all the time.
>

By assuming that we know it all, we create a barrier of arrogance that has to be overcome by the knowledge you're trying to assimilate. Which will produce a steep learning curve because your mind is in denial of anything that threatens to challenge its familiar way of doing things.

### Disable the mouse entirely

The best way to hone one's survival instincts is to put them in a constrained environment with their worst fear. And what better way to wean off the bad habit of fiddling the trackpad than just disabling it altogether. I'm not going to waste keystrokes telling you how to do it though, because a million other blogs already did.

### Uninstall your current code editor, bro

This is a leap of faith. If you don't think skydiving is a good way to get adrenaline rush then I suggest you keep your current code editor and only remove it after you feel comfortable enough to be productive in `nvim`.

Not only will your computer thank you for saving computing resources, but you're also broadening your skill as a programmer and one step closer to become a certified nerd.

### Practice everyday

Use your newly found knowledge whenever you can else you'll find yourself forgetting it all. At the moment, I'm exploring all the buffer related keymaps so that I can work across multiple files simultaneously with ease. The key combinations still feel a bit alien, but I can swear that every successful key combo gives me a deep satisfaction.

Whatever happens don't touch the mouse/trackpad.

> Running `nvim` a day keeps other editors away.
