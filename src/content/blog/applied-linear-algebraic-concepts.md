---
title: 'Applied Linear Algebraic Concepts'
description: 'Applications for Linear Algebra in the field of scientific computing.'
pubDate: 'August 01 2024'
heroImage: 
  src: '/blog-placeholder-5.jpg'
  alt: 'blog placeholder'
tags: ["journal", "best-practices", "code-review"]
updatedDate: 'August, 05 2024'
series: "journal"
hide: false 
---

<h2>Prompt for this entry: </h2>
<p>
To prepare for your discussion activity, find an article or other resource about the application of linear algebra concepts in the real world. For instance, search for the real-world applications of eigenvectors and eigenvalues, matrix algebra, linear transformations, or any other linear algebra topic. This week's resources include some examples.
</p>
<br></br>




## How is the topic being applied now?
The topic that I am choosing to discuss in this weeks discussion will again be centered around machine learning, and how linear algebra can be applied to machine learning in the context of material science.
I recently wrote about a few different articles in this same field of science, and it is incredibly interesting to me the more I learn about it. It concerns Machine-learning interatomic potentials, and how they are used in a variety of different ways to compute, simulate and predict possible outcomes of quantum mechanical interactions between atomic particles. MLIPs focus on the energy potentials, various energy states, and positions of atomic particles. This entire field of computational science is balanced on the top of the principles that we have been learning about in our linear algebra course. For instance, this area of science deals with moment / momentary potentials, which is to put simply, an energy potential that is represented by a specific atomic configuration. 

The following is an example from one of the papers that I was recently reading through, and it talks about some of the calculations that are performed with these potentials using linear algebraic methods. 

"In order to construct the basis functions Bα(alpha) we define the so-called level of moments:

$$\text{lev}M_{\mu,\nu} = 2 + 4\mu + \nu,$$


for example $\text{lev}M_{0,1} = 3, \text{lev}M_{1,1} = 7, \text{lev}M_{0,2} = 4, \text{lev}M_{0,0} = 2.$ The coefficients 2, 4, and 1 in (5) were empirically found to be optimal on a number of tests done in [25] and are fixed in the MLIP package. The level of multiplication, or more generally, contractions of a number of moments is defined by adding the levels, for example


$$\text{lev}M_{0}^{2} = 12, \quad \text{lev}M_{0}^{4} = 8, \quad \text{lev}M_{2}^{3} = 30,$$
$$\text{lev}(M_{1} \cdot M_{0,1}) = 10, \quad \text{lev}(M_{1,2} \cdot M_{0,2}) = 12, \quad \text{lev}((M_{0,3}M_{0,2}) \cdot M_{0,1}) = 12,$$


where ‘·’ is the dot product of two vectors, ‘:’ is the Frobenius product of two matrices," (Novikov et al., 2021).


This is only a small fraction of the work that is done. But this is an example of specific work using methods such as dot-product calculations, forming a basis, or linear regression using a set of basis functions. And this is only to speak on the computation of potential interaction, I haven't discussed the implementations for the machine learning model that will go on to use these methods. The model implementation also is done using principles that we have covered or that are deeper into the topic of linear algebra than we have yet covered. 



## What is the potential for future applications?
The potential for future applications is one that is growing as better and more complicated techniques are being developed and established. These techniques are what will continue to allow researchers to build models that have a much higher level of refinement when it comes to their ability to model and simulate real-world particle interactions. 



## How do you see using material about this topic in the future?
I am planning to go on to get a masters in the near future in either computational science or data science. So would consider the likelihood of using these materials being very high. I genuinely feel that I have enjoyed the topics covered in this course more than any other maths related topics in my academic history outside of quantitative chemistry and physics. 


## How will learning about this topic help your studies and career?
I really feel that I have only just barely scratched the surface of the topics that we covered this semester, and while I had heard of many of the topics we covered prior to this semester, I didn't have any substantive grasp on them until actually getting to work with them. I am excited to continue to get to work with linear algebra in the future hopefully, and to get to continue my education in the areas of materials based science and computation.




# Sources: 

- Novikov, I. S., Gubaev, K., Podryabinkin, E. V., & Shapeev, A. V. (2021). The MLIP package: moment tensor potentials with MPI and active learning. _Machine Learning: Science and Technology_, _2_(2), 025002. https://doi.org/10.1088/2632-2153/abc9fe
- Allen, A. E. A., Lubbers, N., Matin, S., Smith, J., Messerly, R., Tretiak, S., & Barros, K. (2024). Learning together: Towards foundation models for machine learning interatomic potentials with meta-learning. Npj Computational Materials, 10(1). https://doi.org/10.1038/s41524-024-01339-x
- Quantum computing: the future of quantum chemistry | Merck KGaA, Darmstadt, Germany. (n.d.). https://www.emdgroup.com/en/research/science-space/envisioning-tomorrow/smarter-connected-world/quantum-computing.html
- Evangelista, F. A., & Batista, V. S. (2023). Editorial: Quantum Computing for Chemistry. Journal of Chemical Theory and Computation, 19(21), 7435–7436. https://doi.org/10.1021/acs.jctc.3c01043

