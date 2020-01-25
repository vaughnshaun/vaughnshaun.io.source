---
title: "How Does it Work: React Hooks"
date: "2020-01-09"
tags: ['Computers', 'React', 'Javascript']
---

# Header 1
<p>
Welcome to the first article in the series <em>How Does it Work</em>. Every article in this series will examine
a topic at micro level. The intent is to provide readers with an indepth, under the hood view. In my personal career, as a software engineer, I find it hard to use a tool, library, framework, or etc when I don't know the internals of what I'm using. Naturally, my first topic covers something intrinsically related to programming. As I write more I will gradually expand to other areas of study. The first topic to be examined is React Hooks.
</p>

## Header 2
<p>
React Hooks have been in stable release for almost a year now. It officially went stable on February 06, 2019 (https://reactjs.org/blog/2019/02/06/react-v16.8.0.html). Hooks enable functional components to hook into component life cycle and state. They also are for reusing logic without having to wrap components in HoCs. Another advantage of using hooks for state instead of class components is that the this pointer is no longer needed. This means that developers won't have to bind the component's context when invoking a function from an event. Hooks have a significant learning curve. How to use hooks will not be the focus of this article. Instead this article will focus on how hooks actually work. If you would like to learn more about hooks, I recommend waiting for my next React Hooks post or reading the <a href="https://reactjs.org/docs/hooks-intro.html">React documentation</a>. 
</p>

### Header 3
<p>
Anybody who has looked at code samples of Hook usage, might notice how the structure of the code is automagic. Automagic can be good for ease of use, but bad if misunderstood. Misunderstanding can lead to bugs and all out confusion. Below is a sample of React Hooks being used.
</p>

#### Header 4

##### Header 5

###### Header 6