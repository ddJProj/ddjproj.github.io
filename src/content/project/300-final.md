---
title: 'CS300 - Data Structures and Algorithms - Final Project'
description: 'DSA - College Course Management Application'
pubDate: 'Feb 27 2024'
heroImage:
  url: '/blog-placeholder-about.jpg'
  alt: 'Data Structures and Algorithms'
platform: Command-Line Interface - Text processing tool
stack: ['Cpp', 'Java']
website: https://ddjproj.github.io/
github: https://github.com/ddJProj/CS300
order: 3
---
### See the repository link above for this project's full code. 

# Project Summary: College Course (object) Management System
This project focused on designing and implementing an internal tool for managing college courses using C++ and advanced data structures. 

The main objectives were to:
- Implement efficient & effective data structures for storing and organizing course related information
- Create / implement the algorithms for sorting and retrieval of courses in the pre-designated order.
- Develop a flexible, template-based system for handling various types of course data. Accomplished using C++ generics in the data-structure definition.
- Provide a user-friendly interface for managing course information
- Analyze and optimize the performance of different data structures for course management tasks

The project emphasized the practical application of data structures and algorithms in solving a problem that I might realistically face in the real-world. This problem specifically might be faced as a developer working to assist a college or university. By creating this course management system, I demonstrated the importance, and my capability of choosing appropriate data structures for efficient data storage, modification, and retrieval as a software developer.
This hands-on experience enhanced my understanding of what is capable with templates in C++. Without a doubt I improved my software design skills, and I believe I have grasped the importance of creating modular and reusable code while designing/building complex software systems.


## CS300 - Data Structures and Algorithms - Course Goals:
The problem that we were solving throughout this semester was, how do I go about implementing various data structures to handle / parse, and then insert the formatted data into an appropriate structure. We were asked to repeat similar data processing exercises with several different data structures, and then to analyze the complexity and performance of those data structures. I approached the problem by digging as deep as I could into the materials, and getting as much of an understanding of each structure as I could.

Data structures are incredibly important to understand, because data structures are what we use to do the majority of work on when building a software application. There are many different types, with small nuanced differences between them, and picking the right structure, that will be the most efficient for the work that you need to do is part of what makes great programmers so great.

I did run into a few roadblocks during my time taking CS300. The greatest of these roadblocks was when I was working on my project 2. When I was building my template data structures, specifically when I was creating my Node structure that could hold a template data structure, I ran into an issue where I started off calling the template data structure that the node was holding, "nodeData". I called it this in the insert function for my AVL tree, but in the rest of the application and in all other references to the template structure, I using the name tData. I spent probably 4 hours going over every line of code in my program trying to figure out what I had done wrong. I found that I had one of the tree rotations backwards, I corrected that. But it wasnt until I rewrote my insert method that I realized I had a place where it was still being called nodeData, not tData. Rewriting this method fixed the output issues that I was having.

This project has greatly expanded my approach to designing software and applications. I feel much more confident writing generic / template applications, and I very much look forward to building up my own collection of templated structures and algorithms for use in my future endeavors.

My work on this project evolved the way that I write programs in that, I had never written a templated data structure / algorithm before my work in this course. This greatly expanded the options that I see, and greatly reduces the work that I will need to do going forward. All of my code prior to this point was written in a way that was highly specific, and non-modular. That has now changed for me.
