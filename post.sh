#! /usr/bin/bash


_encode() {
  local string="$1"
  echo "${string//[[:space:]]/_}" | tr 'A-Z' 'a-z'

}


# Get current date in YYYY-MM-DD format
date=$(date +%Y-%m-%d)

# Prompt for frontmatter fields
echo "Let's get it, Tari🌃"
read -p "Title 🖋:" title
read -p "Summary 📜:" summary
read -p "Tags 🏷 (comma-separated): " tags
read -p "Canonical url🔗: " canonicalUrl


# Customize it to launch vscode when I'm on a compatible machine


# Create file name in kebab case
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
layout: PostSimple
---
EOF
)


# Create file in docs directory
echo "$frontmatter" > data/blog/"$filename"

git add . && git commit -a -m "Created a new post: $title" & echo "New post created! $title"