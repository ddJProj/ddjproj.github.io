---
title: 'Design of Virtual Game Environments - Final Project'
description: 'Final project of Game Environments design course. Full apid prototype of designed game level for a 3rd person stealth game.'
pubDate: 'August 30 2024'
heroImage:
  url: '/blog-placeholder-about.jpg'
  alt: 'Game Design and Prototyping'
platform: Unreal Engine 5.4 - Windows, Mac, or Linux
stack: ['Cpp', 'csharp']
website: https://ddjproj.github.io/
github: https://github.com/ddJProj/CSBS-game-env-design
order: 3
---

### Unreal Engine project files needed to build / play the level locally:
[Link to the Unreal Engine 5.4 source code/files hosted in a public repo on Bitbucket: ](https://bitbucket.org/johnson-arena-c3-2024/johnson_arena/src/main/)

### Design documents created throughout the development process:

The planning and design documentation for this game level can be found in the public repository below: 
[Link to the planning & documentation for the game level hosted in a public repository on GitHub: ](https://github.com/ddJProj/CSBS-game-env-design/tree/main/PROTOTYPE-LEVEL-DOCUMENTS)


## Below are two video run-through examples of the final level prototype. 


### Spectator, quick overview (2 minutes:): 

<iframe width="640" height="360"  src="https://www.youtube.com/embed/nmMkczL-REA" title="GAM303 Final Prototype Spectatator Highlights E Johnson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



### Full detailed level run-through - (10 minutes 30 seconds):

<iframe width="640" height="360" src="https://www.youtube.com/embed/tc09ycViLmE" title="GAM303 Final Prototype Full playthrough E Johnson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>





<br>

# Purr-loin: Building a stealth game level prototype in Unreal Engine 5.4

## Overview and initial design document:

This project focused on designing and implementing a prototype level for a stealth-based game using Unreal Engine 5.4. The goal was to apply the game design principles and techniques from our reading and lectures. This included interactive design, various play mechanics, balancing features, all while meeting the goal of creating a cohesive virtual game environment.

The following descriptions were used to design the game setting, and are all of my own creation. The game is called "Purr-loin", and is centered around the player character. The player is a cat-burglar, one with a very successful reputation for pulling off daring heists. As the name and career path suggest, the main-character is also a feline, one that is exceptionally deft, quick, and talented in their art of thievery. I selected this scenario as I thought it would be an interesting game format to get some experience with. Many of my favorite console games in my younger years were centered around the concept of using stealth to your advantage. These games including Splinter Cell, Dishonored, Stalker, and Metro 2033.

## Game Modes
This is a single-player game in which the player must sneak through various levels, stealing from the merchants / businesses, or residents as they move towards the primary level objective. The goal is to avoid alerting a guard dog to your presence either by being caught stealing, or being seen by them out on patrol. 

## Gameplay

### Game Flow: 
The player will be given a unique, level based objective depending on their current
progress through the game. They must move through the level, avoiding guard-dogs or other NPCs, and staying out of their line of sight as you progress towards the objective. The player should pick up as many valuables from patrons or merchants as they can safely grab on their way to the objective.  

### Missions/Objectives/Quests:
The game missions will increase in complexity and difficulty as the player progresses. 
The goal is to complete the mission objective for the level, then to reach the exit within the time frame for the round. This should be done all while accruing the highest score possible. Being seen by an NPC can lead to your character requiring more time to complete the level, or to being caught by a guard and failing the level.

### Scoring:
Scoring will be based on the quantity and value of bonus valuables gathered during a level attempt. The player’s score will be increased depending on the amount of additional valuables they can secure throughout their attempt at the level.  They must do this without being caught. The score will be reset if a player is caught, as well on level completion. 

## Level:

### Museum: 
This level will be based in a museum, after dark. The museum contains numerous priceless treasures, but there is one in particular that you are after. Find the golden fish scepter, and escape without being caught by the museum’s guard-dog patrols. If you alert the dogs, you will fail the mission. There will be a number of ways to navigate through the level, but you must work around the patrols so as to not be caught. 


# Final list of added features for (Museum) level prototype. 
### Player Character Features:
#### Implemented in the initial stage:
- Movement: WASD keys for direction and speed control
- Jump: Space bar to jump over obstacles or traps
- Crouch: C/Control button for accessing smaller spaces
- Item Interaction: E key to pick up objects
- Hiding: Tab key to hide behind objects/terrain
- Trap Interaction: F key to attempt disarming traps (implemented as a central power switch)
- Item Scoring: System for bonus item pickups
- Level Failure: Mechanic for player death/damage

### NPC: Security Guard Dog:
#### Implemented in the initial stage:
- Movement: Patrol paths for guard range (about a dozen guards with unique paths)
- Vision: Visual cues for guard's line of sight (flashlight beam)
- Interactions: Mechanics for catching the player

### Game Obstacles/Traps:
#### Security Camera (Implemented in the initial stage:):
- Object: Basic implementation of security camera class
- Vision: Visual cues for camera's detection range
- Animations: Camera rotates on a timeline (45 degrees left, back to 0, 45 degrees right, back to 0)

#### Laser Beam Trip-wire (Implemented in the initial stage:):
- Object: Implementation with tight overlap trigger for alarms
- Functionality: All beams tied to a central power switch

### User Interface:
#### Implemented in the initial stage::
- Score Value Widget: GUI tracker for player's valuable score
- Objective Widgets: GUI trackers for main, secondary, and third objectives

### Development Tools used:
- Unreal Engine 5.4.0
- Git for version control
- BitBucket for repository / game file hosting: 
- GitHub for planning documents and other related files from the semester:

### Features Removed from Planning:
- Level Timer: Originally planned to implement a time limit for level completion
- Hide Widget: GUI for player visibility/hidden status





# Conclusions and post-Mortem for the level prototype:

## 1. Problems Encountered:
### a. Discuss any problems encountered and how they were mitigated. Provide specific examples from your project.
	
  The problems that I encountered over the course of working on this prototype were primarily due to my inexperience with game development. This was both my first course in game development, as well as my first time using modern game development tools. I did run into several roadblocks, but I was able to get past them by rebuilding the implementations for the various mechanics that I implemented into this prototype. I had planned to also spend some time learning blender so that I could create the player character model and enemy guard model, but ended up running out of time and didn't want to leave the game in too much of a messy state. This was probably the first problem I ran into, and I left it for last so that I could work on features in the game that would have a greater impact on the player's ability to play the game. The environment design and structures of the levels were likely the most time consuming process I faced while developing this project, and this was primarily due to the need to add collision to everything. The majority of the static meshes that I created ended up needing to have collision created / mapped / tweaked by hand, and I found the process fairly tedious.

  The next implementation related problem that I ran into was with my first attempt to implement the hidden mechanic into my game. I started off by creating the hidden state, as well as all of the accompanying variables and functions to trigger it. This included a ‘can hide’ boolean that is triggered once the player character moves into an overlap area where they should be able to hide. The process then would check if the player is hidden, and if they were not and they were pressing the correct key bind, then it would set the player state to hidden. My initial implementation I was trying to use an external cue in the form of an arrow above the spot that would change material / color if the player triggered hide within that spot. I was unable to get this implementation to work properly so it took some extra time to think on it, and look for a better approach. What I ended up later settling on, then getting working, was to have the player's collision and visibility be changed along with the state change from ‘isHidden’ being false, to becoming true. I also implemented a crouching mechanic, and tied the crouch key bind of 'C' or 'Control', into my hide ability. I used a dark cylinder on the ground to give a visual indicator of the areas where a player could hide, and it ended up working out really well in my final version. I did add the ability to track which spot the player was hidden at, but ended up not implementing any other mechanics that relied on that location knowledge.

  Another problematic area that I faced was in getting collision to function correctly and using line traces to do so. I was having a problem where the enemy guard patrols would catch the player even if the player was standing behind hard cover (one that included collision). I ended up having to dig into why we use line traces on overlaps to make sure that the conditions to trigger an event are actually in the position where the event should be triggered. This included adjusting the collision visibility as well within the enemy guard and player character blueprints. I also was initially having this problem with my security camera system, as hard cover / walls with collision were not stopping the camera from catching a player. I did test that both the enemy guard, and the security cameras do not catch the player while they are on a hiding spot with the crouch button pressed, but the updated versions included not being visible / behind a collision object as cover from triggering death. The hide ability avoids this   due to the fact that the player has collision disabled for the duration of their key press, in addition to them being no longer visible.

  The last major headache that I ran into while working on this project was implementing my valuable goods system. I started off by duplicating my base blueprints that I had created for my locked door and destructible key pickup system. I very soon realized that I was going to need to recreate everything from scratch though, as the two interfaces that I implemented for the key / door system would make a lot more sense if I created a separate version for my valuables and objective pickups. I used the same pickup / interaction system from them, but changed the interface to implement a grab loot function. I implemented a blueprint for the loot pickup, which is the actual item that the player would grab. I then tried to implement 2 different value objects which could be used to pair to the valuable pickup in the same way my key pickup could be to the door it went to. The problem I ran into though was that I would have had to implement a new valuable object for every different pairing. So instead, I created a generic parent class value blueprint, and then created child blueprints from that parent for my single valuable good item. Instead of needing to redefine the object that it would reference between different value objects, I had it reference the base parent blueprint. This allowed me to then pair the valuable good to different value amounts. I was able to then use these pickups to increase the score count for the player when they pick up one of the objects. 

## 2. Successes in the Development Process:
### a. Discuss what went well and how future developers could replicate it. Provide specific examples from your project.
	
  There were a number of things that I think went well over the course of this project. I think most of my success in building this project comes down to my strategy and approach to doing work. I tend to lean toward using a divide and conquer based approach to doing work, and this approach works especially well when it comes to programming. I think that if I had one bit of advice to other newer developers, it would just be to not get stuck on a single problem. Attention to detail is obviously important to the goal of producing a quality end-product, but not when that attention to detail causes you to stagnate and not get anything accomplished. I don't think I am alone in stating that working through other, closely connected problems can many times give you context or insights that allow you to loop back and readjust areas where you were previously stuck. The main examples of this for me at least were in figuring out how the various collision settings needed to be done so that the enemy mechanics were correctly respecting hard boundaries, or boundaries with collision enabled. It wasn't until I finished my security cameras and lasers that I realized how the line trace by channel function works in the game environment. I had already implemented my enemy guard models, and just finished the core of my security cameras, but both were having issues with catching the player through walls. When I was watching a tutorial video about how to create lasers, he briefly covered the reason for using a combination of collision, and a line trace to prevent the lasers from penetrating walls. I was then able to recreate this process to fix / finish the implementations of my guards and security cameras. A saying that comes to mind is, "to a hammer, everything is a nail". This saying is referring to the law of the instrument, or Maslow's hammer. This is a cognitive bias in which we over rely on familiar tools. I think that this is obviously true for more than developers, but if we hit a roadblock where the tools that we are familiar with aren't working, it may be time to branch out and learn new / more tools. If you are stuck, move on to a new but related problem / feature. Taking a break will both allow your mind to better process information regarding how to approach the prior problem, and so long as you are regularly exposing yourself to the methods / strategies of others, you will likely end up finding a new tool (or combination of tools) to help you fix your problem

## 3. Lessons Learned: 
### a. Discuss overall lessons learned about rapid prototyping. Provide specific examples from your project.

  While working through this project, I learned a tremendous amount about game design through rapid prototyping. The majority of what I learned was related to the approach to work, and what is necessary to create a game within Unreal Engine 5. Having a deep level of exposure to Unreal Engine in the way that I did this semester, opened my understanding greatly of what it would be like to be a game developer. I really do believe that rapid prototyping is a strong tool for development. The way that I developed this game project via rapid prototype, also greatly reflects how I write code. What I mean by this is that generally when I am writing code, I start off by noting what the software will need to achieve in the way of value. Once I identify these values, I then outline and decompose them into segments that I feel would be small and modular enough to make up functions. And once I get to the point where I have a general idea of what the structure of my program will look like. I stop planning, and I start writing code. I don't focus on getting everything perfect, I focus on filling out the majority of the functions so that I can get a better idea of what will work, and what will need to be redesigned or implemented differently. Most if not all of my initial code will be rewritten, but having the application to look at gives me an opportunity to better see the areas that might need to be broken down into isolated functions, or that might need to use a different implementation approach. I was able to use the same approach that I use in coding for this prototyping project. I started off the semester by writing down all of the major features that I thought a game in the category of "stealthy" would include. Over the past 2-3 weeks, I then spent all of my free time working on implementing those features and mechanics. If I hit a roadblock implementing a feature, as I did with the hiding system and with implementing enemies, I moved on and used my next block of free time to get as far into implementing another feature as possible. This helped keep me on track, making steady progress, and before I really realized how much I had done, most of the prototype was finished. By the time I looped back around to working on the features that had earlier been giving me trouble, I realized that a great deal of the work that I had done could be broken apart and used to implement features that I was stuck on. This was because during the process of implementing other features, I ended up learn the functionality of many of the tools that Unreal Engine provides its developers. In this early stage, seeing how the various tools within Unreal Engine work in action gave me enough experience to then use those tools in a better/different way.

  I really enjoyed the opportunity I had to work on the rapid prototype for my game level this semester. I really feel even more strongly now that this is a great approach to development and problem solving. I think that there is definitely a certain amount of preplanning that should be done prior to any development work taking place. That being said, once the "vision of value" so to speak has be developed, I think the best way to move a project such as this forward toward reaching its value goals is through rapid prototyping.


## 4. Task Log:
### a. Explain how you refactored your project to maintain a feasible scope in the time allotted, using specific examples from your task log.

  In regards to refactoring my project, most of my refactorings were to change implementations to use approaches that would create a better, smoother implementation. I did not have much in the way of refactoring to maintain a feasible project scope, given the time we had to work on the project. I did not initially expect to get as far as I did into the project, and I did end up getting the opportunity to implement all of the major features into my rapid prototype game level. The primary things that I did not get a chance to implement, and something that I will have to end up teaching myself later, is how to create character models as well as how to animate them. I did include all of the character animations and models that I would technically need to implement for a full game, but I have no experience creating them, and the few short hours I spent learning blender did not yield me anything that was usable for my project. I did end up refactoring my game to remove the time limit that I had initially thought to implement, as the more I worked on the level, the more I felt that it did not fit into the play style that the level would impose on the player. The level is designed in a way to get the player to pay attention, and to take their time. There are plenty of safe spots, but the level does get more aggressive in the amount of obstacles thrown at you as the player progresses towards the end. 





### b. Explain how you used a balanced approach to each project task to maintain a feasible scope, ensuring all tasks were relatively equally developed, using specific examples from your task log.	

  In building this rapid game prototype, I used a balanced approach to build and develop all of my game features. I did this in the way that I mention in section 3, through creating the general structure of the functions, blueprints and classes, and not overly worrying about perfecting the implementations until I had the general systems that it fit into implemented. I did this for all of the related systems, and it ended up working out really well. The past few days I have been mostly finishing up and tweaking the various system implementations, such as with fixing the collision issues I was having with the guards when the player is not visible to the guard. This balanced approach provided me with the details that I needed to implement my heads up display (HUD) for the player that tracks objective statuses, as well as the score a player has achieved. If I had spent all of my time focusing on trying to get a single system implemented, I likely would not have had the time to implement as much as I did. By forcing myself to move on to a new problem / implementation when I hit a real block, I kept my development process moving forward. And as I already mentioned, this also provided me with better context and understanding of the tools, and allowed me to quickly correct issues that had previously been significant obstacles. The most time consuming portions of this project were in implementing the Enemy guards as well as their behaviors, with the loot value system, the hiding / crouch system, and then most significantly, in the  modeling and building out of the level.  



### c. Missing features and missed opportunities (What I would change if I had more time):

I think the one major feature that was missing from the game prototype that I created, is the ability to revert to previous game states when the player is caught. One of the last features I was able to implement was a spawn checkpoint system that allowed the player to respawn at the beginning of the last stage of the level they had entered. I would like to have also been able to revert the player state to when they had reached that checkpoint. I think that the addition of this one feature would have really tied together all of the different mechanics and aspects of the game that I was able to implement. And I think that the inclusion of this feature would leave the playability of the game in a much more marketable position. 

There were obviously other things that I would have liked to have gotten the chance to implement. Most of these would just be tweaking the existing systems that I created to make their implementations cleaner. Also creating custom models for the player character, for the enemy guard patrols, and providing both the environment / models with texturing would be a big next step for improving the salability of my game. 

I learned a great deal about game development during my time in this course. Working on my prototype gave me the experience modifying and adjusting player state that I would need to be able to implement a saved player state system to pair with my checkpoint based spawn system. 
I'm not entirely sure the direct path that I would use to implement this system, as I am not sure what would work until I actually attempt to create it, I can theorize though. I think the first direction I would take would be to create a function within the game mode or player character blueprint named "savePlayerState" or "saveGameState". Within that function, I would duplicate all of the variables / other related player states, and then create a copy of the player character. I would likely create another blueprint named PlayerCheckpointState, and within that blueprint I would create a player character reference variable. When the savePlayerState function is triggered by a checkpoint being reached, I would then have the savePlayerState cast to PlayerCheckpointState class, and then set the player character reference to the values of the player character when they reached the checkpoint. 
The only issues that I can think of with this implementation though, would be that I would need to tie the other systems in somehow. I would perhaps need to rework my other classes in a way that would allow their state to be easily included within the gameState or playerState. Classes such as the valuable goods that destroy when a player picks them up to add to their score. And such as the power state (on or off) of the laser tripwire security system.











