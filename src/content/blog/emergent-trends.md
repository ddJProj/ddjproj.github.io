---
title: 'Emergent Trends of Interest'
description: 'Two trends in the field of Computer Science that I found interesting.'
pubDate: 'Jul 15 2024'
heroImage: 
  src: '/blog-placeholder-4.jpg'
  alt: 'third-post'
tags: ["journal","emergent trends"]
series: "journal"
updatedDate: 'July, 28 2024'
hide: false
---


## Two trends, and their significance in the field of Computer Science:

### MLIPs (Machine Learning Interatomic Potentials):
The first computer science trend that I found interesting is related to computational science, specifically reactive chemistry and particle physics. The significance of the trend is that the advancements provide potential avenues for generalized reactive chemistry simulations to be performed using models that utilize machine-learning interatomic potentials. Up until very recently, there has been a fairly significant burden that comes along with calculating interatomic potentials. This includes both through manually calculating them, and through utilizing machine learning models to calculate them. Again, until very recently, it was not possible to use machine learning models to generalize these calculations between a variety of reaction types.  The model would need to go through a fairly time consuming process of having its weights adjusted, and being calibrated using hand selected data that was relevant to the specific reaction type being studied. This is something that only an expert in both the area of chemistry, as well as in operating these models would be capable of. This has changed in recent approaches and modeling, and we are now finally seeing models that can be trained on generalized data, that can produce highly accurate experimental data. 


### Memory Safe Languages:
The second trend that I found very interesting, is the push in certain industries, particularly those that require a higher degree of stability, for a transition to programming languages that favor a more robust system for providing memory safety. This is not limited to one language, as there are a number of approaches to answering the question of "how do we write memory safe code?". One of the largest contenders, at least for applications that need long term stability, is the Rust programming language. I have heard statements praising Rust fairly frequently over the past year, at least within the software engineering field. The past six months have seen pushes to move towards adopting memory safe languages like Rust, even within the U.S. Federal Government. Within the past few weeks, DARPA (Defense Advanced Research Projects Agency) released an announcement with a new program titled TRACTOR, whose focus is on "Translating All C to Rust". I think that this is a fairly significant announcement and trend, and the fact that the US Government is pushing for a transition toward memory safety will likely be a positive for the field of computer science as a whole.

## How will each trend change the field of computer science?
For the first trend, I think the rise of new and advanced MLIP models will change not just the field of computer science, but also more significantly of computational science. Calculating the interaction energies and distances of particles is a very tedious process, one that is necessary in order to better understand the behaviors that we see from certain reactions. These models not only help better our understanding of the world around us. They can also be used to generate novel approaches to creating new materials. We can use them to develop new, better, safer technologies. I think most importantly though, as we push our understanding of how to apply the theories and approaches used to solve such advanced problems such as those with MLIPs, that we will become better at developing techniques for solving other difficult problems through computer science. 


Since the 1980s-1990s the world has run on the C programming language. I think that having such massive players within the field of computer science, such as portions of the U.S. Government, actively making an effort to adopt languages that provide a higher degree of control over memory safety will be a very positive trend for the field of computer science. I think that we really should be concerned about what how the code we write will perform in the future, especially when considering the applications that run critical systems such as the electrical grid or facilitate defense operations. It feels like the news recently has been critical exploit after critical exploit, it is comforting to see a genuine push towards better alternatives to C for areas that rely so heavily on secure, reliable code. I am optimistic about the future of programming if we continue down this road of pushing towards adoption of better, safer technologies. 

## How will each trend change the experience of consumers, workers, or citizens?
For the first trend, the MLIPs (machine-learning interatomic potentials), the experience change would likely be felt more with workers who use the models to develop novel compounds, whether that be compounds that have use in biomedical applications, or that affect material sciences more generally. In the past, interatomic potential calculations when done manually are incredibly burdensome to researchers. In recent years, machine learning models capable of performing these calculations still required lengthy calibrations performed by a highly specialized, expert researchers who could provide the model with data that was relevant and specific to the interactions being studied. I think this is perhaps one of the most significant advancements in recent years at least in relation to chemistry and particle physics. This is primarily due to the ability of these newer models to utilize generalized reaction / input data, and to be used in generalized applications, all while still producing accurate predictions of reaction events.


## How will each trend fit in with your career interests or aspirations?
For the first trend, the MLIPs (machine-learning interatomic potentials), I do not know how far into my education I will progress, but I do find this area of research to be highly interesting. I would very much like to have the opportunity to potentially pursue an area of computational science similar to those discussed in the papers I have read. If given the opportunity to pursue a doctoral in material / computational sciences after completing my masters, I would definitely take it. These fields are on the bleeding edge of scientific development, and I find them both intriguing and awe-inspiring. 

As for the trend of pushing for memory safe languages, I had already begun the process of learning Rust when I heard that there was a significant push to use languages that can provide safe operations in a manner like that of Rusts. I don't intend to stop learning languages with Rust, and I have a few others that I have heard were interesting that I would like to work on learning in the future. These languages include those like Zig, Go, as well as I would like to spend some more time learning Haskell, and getting more comfortable using Kotlin. I really have enjoyed my experiences so far with Rust, they have been challenging in a way that leaves me desiring more time spent working with the language in the future. I would very much like to find a career at some point when I have more experience that would allow me to utilize Rust specifically. 

## Which course outcomes have you achieved so far, and which ones remain?
So far I have met three of the 5 outcomes, I will be meeting a fourth outcome with my submission for the Milestone 4 Enhancement 3 assignment in module 5. The first of the three outcomes that I have already achieved is, "Design and evaluate computing solutions that solve a given problem using algorithmic principles and computer science practices and standards appropriate to its solution while managing the trade-offs involved in design choices." The second outcome that I have achieved is to, "Demonstrate an ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals." And the third outcome that I have so far achieved is to, "Develop a security mindset that anticipates adversarial exploits in software architecture and designs to expose potential vulnerabilities, mitigate design flaws, and ensure privacy and enhanced security of data and resources."
The fourth outcome that I will be meeting by the conclusion of module 5 is to, "Design, develop, and deliver professional-quality oral, written, and visual communications that are coherent, technically sound, and appropriately adapted to specific audiences and contexts." This will be completed with my video analysis covering the final stage of artifact enhancements, the database enhancement. 

## Sources:

### First trend sources: 
- Zhang, S., Makoś, M., Jadrich, R., Kraka, E., Barros, K., Nebgen, B., Tretiak, S., Isayev, O., Lubbers, N., Messerly, R., & Smith, J. (2023). Exploring the frontiers of chemistry with a general reactive machine learning potential. _ChemRxiv_. https://doi.org/10.26434/chemrxiv-2022-15ct6-v3
- Novikov, I. S., Gubaev, K., Podryabinkin, E. V., & Shapeev, A. V. (2021b). The MLIP package: moment tensor potentials with MPI and active learning. Machine Learning Science and Technology, 2(2), 025002. https://doi.org/10.1088/2632-2153/abc9fe
- Mishin, Y. (2021). Machine-learning interatomic potentials for materials science. Acta Materialia, 214, 116980. https://doi.org/10.1016/j.actamat.2021.116980
- Focassio, B., Freitas, L. P. M., & Schleder, G. R. (2024, March 7). Performance Assessment of Universal Machine Learning Interatomic Potentials: Challenges and directions for materials’ surfaces. arXiv.org. https://arxiv.org/abs/2403.04217



### Second trend sources:
- Breck, C. (2024, March 24). Future software should be memory safe: reflections on a path toward secure and measurable software. Colin Breck. https://blog.colinbreck.com/future-software-should-be-memory-safe-reflections-on-a-path-toward-secure-and-measurable-software/
- The case for Memory Safe roadmaps - Why both C-Suite executives and technical experts need to take memory safe coding seriously. (2023). In media.defense.gov. U.S. Department of Defense. https://media.defense.gov/2023/Dec/06/2003352724/-1/-1/0/THE-CASE-FOR-MEMORY-SAFE-ROADMAPS-TLP-CLEAR.PDF
- Translating All C to Rust (TRACTOR). (2024, July 29). darpa.mil. https://www.darpa.mil/program/translating-all-c-to-rust
- Internet Security Research Group. (2021, June 14). What is memory safety and why does it matter? Prossimo. https://www.memorysafety.org/docs/memory-safety/


