---
title: 'What Makes a Productive Code Review?'
description: 'Some key features of a productive code review.'
pubDate: 'Jun 01 2024'
heroImage: 
  src: '/blog-placeholder-5.jpg'
  alt: 'blog placeholder'
tags: ["journal", "best-practices", "code-review"]
updatedDate: 'July, 7 2024'
series: "journal"
---


# Part 1:

## 1. Defining a code review

**What is code review?**


A code review is a process in which, generally, "someone other than the author(s) of a piece of code examines that code." (Introduction to Code review," n.d.). The purpose, and reasoning behind conducting a code review, is to conduct checks into the overall health of a code-base. This is a methodical review of sections of a code-base, typically by one of the author's peers, during which time the reviewers analyze the code sections to help identify bugs, security deficits, and to better learn a specific piece of source code. "The reviewer can also act as a second step in identifying bugs, logic problems, uncovered edge cases, or other issues." (GitLab, 2023). This is an important step in the process of developing software, and in most effective cases will be conducted after an initial implementation is finished. During this review, the reviewing developer(s) and team can develop additional insights or opinions on a specific implementation / solution before the code is moved into an upstream channel or deployed to production. 
	 
These types of checks are also effectively utilized as a means to perform security audits into a code-base, "Secure code review is probably the single-most effective technique for identifying security bugs early in the system development lifecycle. When used together with automated and manual penetration testing, code review can significantly increase the cost effectiveness of an application security verification effort." (OWASP, n.d.). 

## 2. Why code reviews are important

**Why is it an important practice for computer science professionals?**


The practice of performing code reviews is important for a number of reasons, but I will summarize several of the most important in the following eight reasons.

- The first of these eight factors is that the code review process allows the team to verify that feature requirements are being met, and that the code prioritizes on creating the values for which the application is being built. This review should be started with the following question, "Does this code accomplish what the end user needs?", (Code Review Checklist: 7 Steps to Level up Your Review Process, 2024). 
	
- The second reason, is that the code review furthers the process of generating clean, readable code. This includes using proper naming conventions, as well as meeting other industry standards applicable to the project such as breaking the code into manageable, easy to digest chunks.
	
- The third reason is that the code review provides an opportunity to test the maintainability of solutions, or implementations. It incredibly important that as a code-base grows, it does not reach a point where the developer are no longer able to effectively test the system. Ensuring that the code produced is modular, and that refactors can easily be made helps to ensure that the code base will not become overwhelming technical debt. Some of these practices may include ensuring that the solutions do not rely on technologies or functionality that the team plans to phase out. This would also mean ensuring that the code base is not tied to outdated, legacy systems. 
	
- The fourth reason is that the code review should be used as a time to perform a security audit on the proposed solutions / code segments being reviewed. 
	
- The fifth reason includes reviewing the code for potential optimizations to performance. Code reviews are an important opportunity for the developers and team to assess the performance of code implementations. Perhaps code is being repeated unnecessarily, implementations that are inefficient, or that rely on assets that are poorly optimized. This may also include functions that chain together API calls in a way that negatively affects the performance of the system. 
	
- The sixth reason is to verify that the segments of code being reviewed include documentation that meets the standards for the team, and for the industry. The code documentation should typically explain the code's purpose, and how the code is used. The code should be checked to ensure that any new features or updates have proper documentation included if it is needed. This review is a chance to correct these implementations instead of allowing the system to become a mess of unreliable technical debt.
	
- The seventh reason is to further validate the readability of the code-base by ensuring that proper naming conventions are being followed within the code. Naming used within the code should not be arbitrary, but should be simple, and should fall in line with the established standards for the business, the code-base, and the industry. 

- The last eighth and final reason, is that it both helps developers who may be unfamiliar with sections of the code base get familiarized with the code-base, while simultaneously exposing developers to new ideas and practices. The practice of performing a code review is a significant method by which to share ideas, and approaches to solutions among the team. 



## 3. Code Review Best Practices

**What are some code review best practices that you read about in the resources that are crucial to include in a code review? Include when a code review should occur in the development process with a rationale as to why.**
	
I summarized many of the best practices in the previous section, but this can be further synthesized into the following practices. Code reviews are an effective means by which to maintain compliance within your code-base. This includes performance optimizations, checking that documentation, naming conventions, general readability, and maintainability of the code base is up to standards set for the company and/or industry. The code segments should also be vetted to ensure that it meets security standards for the technologies in use by the company. The following are some beneficial, best practices that can keep your reviews productive, and keep operations moving forward. The first of these, is to place a limitation on the lines of code, and/or the time spent for a particular code review session. It is also beneficial to include both new and senior members in the review, to fairly distribute the review sessions between the team members, and to make sure that everyone is comfortable asking questions when they need context,  (GitLab, 2023).
		
Code reviews should generally focus on a relatively small portion segment of the code base. This is not an exhaustive check of the entire code-base, it is an iterative process that should be repeated as solutions or features are being created for the system. The best time to perform a code review is generally during the time-frame following a segment of code being created. This code review should also be performed in the window before those newly created sections of code have been integrated into the upstream code-base, and before it has been pushed into the production system. By performing code reviews in this way, and in this time frame, we ensure that vulnerabilities or other problems within the code updates are given the chance to be corrected before they are allowed to impact operations within the greater system. This approach does have the downside of delaying the time it takes to complete and ship code. That being said, it can also potentially save your operations from pushing vulnerable, or unmaintainable code into your system that could harm the efficiency of your operations, or credibility of your company. 

# Part 2:


## 4. Software used for my code review

**What software have you chosen to use to record your code review?** 

To document my code review, I will be using OBS studio to record my session and comments. It is reliable, easy to use, and I have used it for other courses. This means that it is already set up on my computer and ready to record both my screen, and microphone / audio.

## 5. Outlining a code review

**Describe your approach to creating an outline or writing a script for your code review for each of the three categories that you will be reviewing based on the rubric as well as the code review checklist.**

My approach to writing the outline will follow a similar procedure to how I generally write my research papers, and similarly how I plan out my code implementations. I start out my procedure by creating a higher level outline that contains the bigger picture of features or important criteria that my work needs to contain. Once I have finished outlining the larger picture that my work is to cover, I then begin decomposing each of the points that I have listed off into their fundamental components. This is when I can start making determinations about how I want to approach the various sub-sections of my tasks, or in this case, of my code review. 

This review is going to start off with me going through the code review checklist and using it to analyze my code base. I will then plan to get into the each of the required points from the rubric for each of the artifacts. I will perform the review this way so that I am able to ensure proper, thorough coverage of the various functional areas of the application.


## Sources:

**Defining the code review:**
- "Introduction to Code review". Google Engineering Practices Documentation. (n.d.) https://google.github.io/eng-practices/review/
- OWASP. (n.d.). OWASP Code Review Guide. OWASP Foundation. Retrieved July 8, 2024, from https://owasp.org/www-project-code-review-guide/
- Atlassian. (n.d.). Why code reviews matter (and actually save time!). https://www.atlassian.com/agile/software-development/code-reviews
- GitLab. (2023, May 3). What is a code review? | GitLab. GitLab. https://about.gitlab.com/topics/version-control/what-is-code-review/

**Performing the review & best practices:**
- Code review checklist: 7 steps to level up your review process. (2024, March 7). https://www.pluralsight.com/blog/software-development/code-review-checklist
- Best Practices for Peer code Review. (n.d.). smartbear.com. https://smartbear.com/learn/code-review/best-practices-for-peer-code-review/
