---
title: Shell scripting in Unix-like systems with bash
date: 2024-09-21
draft: false
tags: ['shell','bash']
layout: PostSimple
summary: Dominate your operating system by interacting with the shell.
---

## Introduction

Learning how to work efficiently with the terminal can make your life easier. The shell is very odd and takes some time getting used to. With enough practice however, you'll find your way of thinking changing as you follow the ancient path of Unix.

In this post we'll be using `bash` which is the default shell on Unix-like systems such as Linux. Bash is a shell program/command language.

Note that in this post I use the term shell to refer to `bash`.


> ### What's a command language
>
> A command language is a language for job control in computing and is domain specific. It usually has strong coupling with the underlying operating system which makes it ideal for system administration tasks. 
>
> _Source:_ [Wikipedia](https://en.wikipedia.org/wiki/Command_language)


 ### GNU coreutils

 The [GNU Core Utilities](https://en.wikipedia.org/wiki/GNU_Core_Utilities) allow us to do some cool stuff by exposing functions for manipulating text/files, making system changes and a lot more. Follow that link for an exhaustive list of the available commands. 

 ## Getting started

 Okay now that we have all the jargons out of the way let's take a deep dive and understand how we can make the most of bash by taking a look at some of its concepts. 
 
 This post is in no particular order so feel free to skip parts you already know.


 ### Output redirection

 This allows us to send the result of running a command (or simply its output) to the specified file path. It basically follows this syntax:

 ```bash

command  > file.txt

 ```


 The command can be any utility that writes to the standard output (henceforth referred to `stdout`) such as `cat`. 
 
 The `>` symbol means send the output to the filepath which is specified in this case itb is `file.txt`.

 Here is an example:


 ```bash

echo 'This text will be sent to the specified file instead of being printed to stdout\n' > file.txt && cat file.txt


```

If you run this command it will take the output from the `echo` utility and write it into `file.txt` and then we read the file contents by using the `cat` utility on the created file which then outputs the contents to the `stdout`. The `\n` adds a newline at the end of our file.


#### Difference between `>` and `>>`

The `>>` operator will *append data at the end of the file* without overwriting the file entirely if it already existed as opposed to `>`:


```bash

echo 'This is appended' >> file.txt && cat file.txt

```

You should see the following output: 


```plain
This text will be sent to the specified file instead of being printed to stdout

This is appended
```

After that, run `echo` again, this time with `>` only....


```bash

echo 'This sentence will replace what was in the file' > file.txt

# 'This sentence will replace what was in the file'

```


> #### Tip
>
> You can also check out `2>` which redirects `stderr` (which is useful for automatically creating a log dump when your script fails)  and `&>` which redirects both the error and output.


### Pipelines

You can pass on the output of one command to another using the pipe or `|` symbol. It can be used to create pipelines which transform output as it passes from one utility to the other.


For example let's say I have a folder with some text files but I only want those with the `.md` extension. How did I quickly get the results ?

We'll first create some dummy files. Save this file using the `.sh` (optional) extension. I'll call it `app.sh`


```bash

# Creates two files for each iteration each with a .txt and .md extension

mkdir temp && seq 1 10 | xargs -I {} touch temp/file_{}.txt temp/file_{}.md && ls -h temp/ | grep ".md" > out.txt
```

Okay, let's take a moment to appreciate what's going on here. 

First we made our `temp` directory and then specified a sequence with the `seq` utility from 1-10. The `xargs` utility reads the `stdin` which is coming from our `seq` output. The `-I {}` flag tells us to replace `{}` with the current input effectively creating files with sequential names.

Lastly, we list all the files in the `temp` directory in a human readable format using `ls` with the the `-h` flag and pipe the output to `grep` which matches the specified pattern in filenames and sending the result to an output file `out.txt` for us to read later.


When we `cat` our file to `stdout`:

```bash

cat out.txt

```

...we should see this:

```plain

file_10.md
file_1.md
file_2.md
file_3.md
file_4.md
file_5.md
file_6.md
file_7.md
file_8.md
file_9.md


```


### Command substitution

Command substitution allows us to execute a command within another command. If you're coming from JavaScript you can liken it to the template literal syntax which allows us to access the global scope from within strings (or within JSX if you've worked with React).


```bash

echo "The raw date $(date)"

```

Remember to always use double quotes " " instead of single quotes ' ' to get the expected behaviour. Command substitution will NOT work with single quotes in the above example.


### Execution behaviour with &

The `&` symbol has different meanings depending on where it is used in a command.

If you have a long running task that you'd like to run in the background even after exiting the terminal you can do this


```bash

# Here, command can be anything that can be run like a script or command...

command &
```

This makes the command behave like a daemon (in Linux) but with a few differences which I'll not cover in here. The important takeaway is that daemons can run in its own session and detach itself from the terminal.


However, certain programs like `git` don't play nice with this technic and may throw an exception:


Let's say I try to `git add` and `git commit -a` at the same time:


```bash
git add . & git commit -a
```

This will blow up resulting in the following exception:

```plain


hint: Waiting for your editor to close the file... code or code-insiders is not installed
error: There was a problem with the editor 'code --wait'.
Please supply the message using either -m or -F option.

```

This usually happens when more than one process is trying to modify the same file or resource which is not allowed by the operating system since it can cause data corruption or unexpected behaviour. This concept is called mutual exclusion and is what happens when you try to delete a file e.g a song that is being played by another program like  amusic player in your computer.


### Registering your custom scripts globally

Let's say you have a cool script that you just wrote that does a `git` add,commit and push action all at once. Very useful if you just want to push your code without caring about the commit message, we'll save our script to a file to a new file called `push.sh`. Notice that I wrapped the command in double quotes so that it is not executed and is just written to the file instead:


```bash

echo "git add . && git commit -am 'everything has changed' && git push -f" > push.sh

```
> #### Tip 
>
> This is just for tutorial purposes though, you should ALWAYS write clear commit messages otherwise it would defeat the entire purpose of using `git`.
>

But how do you make the script callable from anywhere like `cd` or `rm` ? To do this we must add the script to a directory in our PATH. To see the available directories in your path you can do this:

```bash

echo $PATH

```

 In this example, we'll use `usr/local/bin` but before we move it we'll modify its permissions to make it executable (if it already wasn't).
 
 
 > #### Tip
 >
 > The first line is a shebang which tells the operating system what shell interpreter to use. This is useful if you have multiple interpreters installed like `fish` or `zsh` and want to override the default shell. 
 >
 > For example, `fish` is not fully POSIX compliant thus your `bash` script that ran well in would break in certain edge cases:


 ```bash
#!/usr/bin/bash

chmod +x push.sh && mv push.sh usr/local/bin 

 ```


And we should now be able to call our script from anywhere without the `.sh` extension. Of course our script will only make sense if we invoke it from a diretory that is being tracked by `git`.


```shell
push

```

For disclaimer reasons, it works on my machine 👀


## Conclusion

I hope you'll find these tips useful in making your scripts more powerful. 