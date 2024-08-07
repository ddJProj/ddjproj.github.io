---
title: 'Computer Science Capstone Project'
description: 'Planning the project, documenting the enhancements'
pubDate: 'July 10, 2024'
heroImage:
  url: '/blog-placeholder-about.jpg'
  alt: 'Planning stage for the application rewrite + enhancements.'
platform: Console / Terminal application
stack: ['Cpp', 'Assembly', 'Rust', 'MySQL']
website: https://ddjproj.github.io/
github:  https://github.com/ddJProj/
order: 1
---

## Source Repositories:

#### Original C++ project (Basis of all three enhancements):
[Link to the GitHub repository containing the original C++ application's source code](https://github.com/ddJProj/CS410/tree/main/Project-2)

#### My original implementation of an AVL Tree in C++ (Used in enhancement stage 2):
[Link to the GitHub repository containing the original C++ AVL tree implementation](https://github.com/ddJProj/CS300/tree/main/ABCU_Project-2)

#### Completed rewrite of the original C++ project, in Rust:
[Link to the GitHub repository containing completed, enhanced Rust project & source code](https://github.com/ddJProj/CS499-Capstone-Project_Artifact-Enhancements)






## <h2>Computer Science Capstone Project - Detailed plan documentation for rewrite of C++ application into Rust.</h2> 
<p>
This project posting will cover the initial planning stages and documentation write-up. A formal code review was performed and recorded, as well as writing out a detailed planning document.

<b>Application rewrite will take place in three stages. Each of enhancements stage has the goal of meeting competency criteria for their respective category of Computer Science.</b>

The three categories include: 
- Software Engineering and Design
- Data Structures and Algorithms
- Database Design and Implementation
</p>
<br></br>

# Self-Introduction:

## What have you learned while in the Computer Science program? List three of the most important concepts or skills you have learned.

I have learned a tremendous amount over the past year while studying in this program.

If I were to name just three of the most important topics, it would start with algorithmic thinking. When I first started the program, I didn’t have any significant experience in the science of computers and programming. I have always been analytically minded, and my background in biochemistry did contribute to my ability to break down problems. That being said, deeply investing myself into my work in this program has allowed me to work on building my ability to think algorithmically, while also developing my ability to problem solve through programming. I am now quite comfortable decomposing moderately complex problems and turning them into manageable units of an code for an application.

The second important topic I learned in this program, is how applications are compiled into low level assembly language and how memory is managed. Developing a fairly intimate understanding of assembly (X86) has provided me with a great deal of context in how work is accomplished with computers. Specifically, I found it incredibly valuable to understand how memory is handled on the stack, and how values are passed through registers. I also found it interesting how the compiler simplifies / breaks down certain instructions written in higher level languages.

Last, I would say that understanding linear algebra was instrumental in developing myself. Specifically I would look to concepts like dot product calculations, orthogonality, how stochastic systems work, also how Markov chains / Markov models can be applied and used in machine learning. Additionally, just generally understanding concepts that involve manipulating matrices, and their usage in different algorithmic computations such as with compression, or cryptographic algorithms.
  

## Discuss the specific skills you aim to demonstrate through your enhancements to reach each of the course outcomes.

For this course, I focused on demonstrating my skills in organization, in designing back-end implementations for secure software applications, as well as quickly adapting to, and then become proficient in new technologies. I  primarily focused on rewriting the C++ client handling application that I turned in for my reverse engineering course.

I sought to clearly demonstrate that I am capable of independently researching, learning, and then implementing new development strategies. This assessment was broken into three enhancement segments:
- **Software Engineering and Design**, 
- **Data Structures and Algorithms**, 
- **database implementation**.

To meet the desired software engineering and design aspects, I will be focused on providing clean code that meets the standards of industry best secure coding practices.

For data structures and algorithms, I focused on both designing, then implementing modular, reusable code, and when necessary implemented appropriate data structures to handle operations within the application. This was done while considering the time-complexity of various implementations.

For the database component I designed, then implemented a database integration for my application. It was one that handles application authentication, as well as managing client data. I aimed to demonstrate that the database integration focused on providing secure communications / authentication, and again followed best practices.
  

## How do the specific skills you will demonstrate align with your career plans related to your degree?

The skills I have mentioned are critical to the work and research of my intended career path. Learning to carefully apply them is what will allow me to develop practical solutions to any problems that I face, whether it be software based, or in solving chemical / material based computations. My career goal is to end up working as computational scientist. This project is significant to me because it allowed me to demonstrate how well I have been able to refine my problem solving capabilities. In this context, this was done through the design and implementation of a program that seek to generate solutions to complex problems.

To reach my career aspirations, I both want, and need to be accustomed working in environments that are challenging, and that may be lacking in guidance. I feel that this project will serve as a valuable contribution towards demonstrating that I am quite capable of thriving under these conditions.


## How does this contribute to the specialization you are targeting for your career?

I plan to apply for internships and employment positions related to computational programming, low level software engineering, embedded systems, and machine learning. With my background in biochemistry, I also plan to begin applying to masters programs for computational science or data science and computation.

The career that I am hoping to work in would require me to work with, and design machine learning models that are capable of generally processing experimental data. The models would then be used to help produce generalized applications of that data that could accurately predict experimental outcomes.

With this capstone project, I hope to be able to demonstrate that I am capable of identifying complex problems, breaking down those problems into manageable components, then both designing and implementing targeted solutions to those problems. I aim to show that I am capable of maintaining project scope, and that I can deliver on a functioning application within a designated time-frame via responsible time management.


## Course Outcomes:

1. _Employ strategies for building collaborative environments that enable diverse audiences to support organizational decision-making in the field of computer science._
2. _Design, develop, and deliver professional-quality oral, written, and visual communications that are coherent, technically sound, and appropriately adapted to specific audiences and contexts._
3. _Design and evaluate computing solutions that solve a given problem using algorithmic principles and computer science practices and standards appropriate to its solution while managing the trade-offs involved in design choices._
4. _Demonstrate an ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals._
5. _Develop a security mindset that anticipates adversarial exploits in software architecture and designs to expose potential vulnerabilities, mitigate design flaws, and ensure privacy and enhanced security of data and resources._


# Enhancement Plan:

## Category One: Software Engineering and Design
### 1. Select an artifact that is aligned with the software engineering and design category and explain its origin. Submit a file containing the code for the artifact you choose with your enhancement plan.


For the first artifact, I will be enhancing the final project for my CS410 – Software Reverse Engineering course. The purpose of this project was to take the original, poorly written binary executable, to decompile the executable into X86 assembly, to rebuild the application in it's original C++ form, and finally to refactor the application, removing any security vulnerabilities that it contained in the process. The application contained a login process that had hard-coded authentication data, as well as no input validation checks, or sanitization. It also contained a client management system that allowed the user to modify the services that their clients had selected.

I rewrote the entire application, included validation checks and sanitization. I introduced class objects to handle the authentication process, as well as class objects to encapsulate the client data. I then implemented a hashing system to store password hashes instead of plain a plain text password that could easily be discovered when decompiling the binary executable. I also restructured all of the functionality into modular functions, properly encapsulating those functions as class methods when it maintained consistency.

**Link to C++ source code for project:**  
[My C++ source project for Artifact 1, 2, & 3:](https://github.com/ddJProj/CS410/blob/main/Project-2/Mod6_Updated-Security-CPP_E-Johnson.cpp)

  
### Describe a practical, well-illustrated plan for enhancement in alignment with the category, including a pseudocode or flowchart that illustrates the planned enhancement.

#### Artifact 1 – Software Engineering - Initial Planning:

The language that the application is written in is C++, and the language that I will be using to rewrite the application is Rust. I have been studying Rust for a number of months now, but have not had a chance to formally apply the language to any significant works.

During this initial stage I will be focused on the conversion of my client management application from C++ into Rust.

This will be when I translate the OOP, class based system into a trait based Rust implementation. As rust does not implement classes / objects in the same way that C++ does, I will be using a combination of rust's type system / implemented traits, struct objects, functions, and lifetimes to achieve safe operations.

I know ahead of time that I will be integrating a database to handle the storage of clients data, employee data, and the authentication of employee accounts. I will need to ensure that the updated and converted rust equivalent functions properly handle and reference the data structures that pull source data from the database. This will include if data is changed within the system, that the changes will need to be pushed to the database in addition to the data structures used in local operations. The implementation of the functions that will pull and push the data to the database can be implemented in artifact three, but my design / code for artifact one will reference the functions that will be responsible for that functionality.

  

#### Artifact 1 – Software Engineering – Enhancement Requirements List:
_These are the core aspects of this rust rewrite which should be implemented using best practices for the language._

- **Enhancement 1:** Implement Rust's error handling using Result<data T, Err> types. Use the the ? operator to manage propagation.
- **Enhancement 2:** Move away from using unwrap() statements to avoid panic crashes.
- **Enhancement 3:** Implement standard library traits wherever possible to reduce code rewriting, such as with trait Default.
- **Enhancement 4:** Implement the Option type for any value that could return None.
- **Enhancement 5:** Restructure the codebase to utilize composition based design over inheritance.
- **Enhancement 6:** Implement proper delegation standards for function calls.
- **Enhancement 7:** Use enums with match statements for reusable type definitions (in place of constants).
- **Enhancement 8:** Organize the code into distinct modules for better encapsulation.
- **Enhancement 9:** Implement structs to define custom data types (instead of classes, etc).
- **Enhancement 10:** Utilize traits to provide polymorphism within the application.
- **Enhancement 11:** Include relevant annotations, macros, attributes where needed, such as with cloning.
- **Enhancement 12:** Implement proper memory management techniques for manually defined lifetime definitions.


#### Artifact 1 – Software Engineering - Pseudocode:


```Rust Pseudocode

//---------------------------------------
//---------------------------------------
// Artifact 1: 
//      general program rewrite
//---------------------------------------
//---------------------------------------




//---------------------------------------
// Core Structures and Types:
//---------------------------------------


DECLARE struct "Employee"    {
	Declare employee_id of type i32 integer
	Declare employee_name of type string
	Declare hashed_password of type string
}

IMPLEMENT the "Employee" struct    {
	DECLARE new constructor function with params:
		employee_id of type i32 integer
		employee_name of type String reference
		password of type String reference
	RETURNS reference to self	{
		Employee		{
			DECLARE employee_id, 
			DECLARE employee_name,
			DECLARE hashed_password,
			DECLARE asn_employee_id,
		}
	}
}

DECLARE struct "Client"    {
	DECLARE client_id of type i32 integer
	DECLARE client_name of type string
	DECLARE client_service of type i32 integer
	DECLARE asn_employee_id of type i32 integer
}

IMPLEMENT the "Client" struct    {
	DECLARE new constructor function with params:
		client_id of type i32 integer
		client_name of type String
		client_service of type i32 integer
		asn_employee_id of type i32 integer
	RETURNS reference to self 	{
		Client {
				DECLARE client_id, 
				DECLARE client_name,
				DECLARE client_service,
				DECLARE asn_employee_id,
		}
	}
	


	// the database will auto create client_ids for new clients
	// used to set client id locally when a new client added to db
	DECLARE function set_client_id with params:
		reference to type mutable self
		client_id of type i32 integer
	RETURNS nothing 	{
		IF client_id param is something, not null/nothing		{
			ASSIGN this/self.client_id the value of client_id param 
		}
	}

	DECLARE function change_client_service with params:
		reference to type self
		service of type i32 integer
	RETURNS nothing	{
		ASSIGN this/self.client_service the value of service param
	}

	DECLARE function get_client_service with params:
		reference to type self
	RETURNS i32 integer self.client_service value	{
		RETURN i32 integer self.client_service value
	}
	
	
	DECLARE function get_client_id with params:
		reference to type self
	RETURNS i32 integer self.client_id value	{
		RETURN i32 integer self.client_id value
	}
	
	DECLARE function get_client_name with params:
		reference to type self
	RETURNS string self.client_name value	{
		RETURN string self.client_name value
	}

	DECLARE function get_asn_employee with params:
		reference to type self
	RETURNS i32 integer self.asn_employee_id value	{
		RETURN i32 integer self.asn_employee_id value
	}
}	

//--------------------------------------------------------
// Menus & Inputs :
//--------------------------------------------------------


// main menu enum
DECLARE enum main_menu_choice    {
	DECLARE default_menu_value, assign it the value -1
	DECLARE print_client_list, assign it the value 1
	DECLARE change_service_choice, assign it the value 2
	DECLARE exit_program, assign it the value 3
}

IMPLEMENT the "main_menu_choice" enum     {
	DECLARE function "convert_input" with params
		input of type i32 integer
	RETURNS Option of main_menu_choice (some/none)
		MATCH integer inputs to following cases:
			IF input -1: RETURN some(main_menu_choice::default_menu_value)
			IF input 1: RETURN some(main_menu_choice::print_client_list)
			IF input 2: RETURN some(main_menu_choice::change_service_choice)
			IF input 3: RETURN some(main_menu_choice::exit_program)
			DEFAULT: RETURN none
}



DECLARE function "menu_choice_handler" no params:
RETURNS Result with no value (Ok) and Error of type pointer to dyn error    {
	CALL display_menu() function to output main menu
	DECLARE "choice", ASSIGN value of return from calling get_integer_input() fn

	MATCH the following cases:
		IF choice equals main_menu_choice::default_menu_value		{
			PRINT message prompting user to give valid entry
		}
		IF choice equals main_menu_choice::print_client_list		{
			PRINT message confirming user choice
			CALL display_clients();
		}
		IF choice equals main_menu_choice::change_service_choice	{
			PRINT message confirming user choice
			CALL customer_choice_handler();
		}
		IF choice equals main_menu_choice::exit_program		{
			PRINT goodbye message 
		}
		
}

//service menu enum
DECLARE enum client_service_choice    {
	DECLARE return_menu, assign it the value 0
	DECLARE brokerage, assign it the value 1
	DECLARE retirement, assign it the value 2
}

IMPLEMENT the "client_service_choice" enum    {
	DECLARE function "convert_input" with params:
		input of type i32 integer,
	RETURNS Option of client_service_choice (some/none)    {
		MATCH integer inputs to following cases:
			IF input 0: { RETURN some(client_service_choice::return_menu) } 
			IF input 1: { RETURN some(client_service_choice::brokerage) }
			IF input 2: { RETURN some(client_service_choice::retirement) }
			DEFAULT: { RETURN none }
	}
}


DECLARE function "client_choice_handler" with no param:
RETURNS Result with no value (Ok) and Error of type pointer to dyn error    {
	DECLARE "client_id", ASSIGN value of return from get_integer_input() fn
	IF client is found in local_avl_tree from calling avl_tree::find() method with client_id	{
		DECLARE new_service, ASSIGN it the value returned from call to select_valid_service() fn
		
		IF new_service != client_service_choice::return_menu		{
			CALL change_client_service fn with the new_service integer value
		}
	}	ELSE 	{
		RETURN error "no valid client found"
	}	
	RETURN no value Ok(success)
}



DECLARE function "display_menu" no params
RETURNS nothing    {
	PRINT message "What would you like to do?"
	PRINT message "DISPLAY the client list (enter 1)"
    PRINT message "CHANGE a client's choice (enter 2)"
    PRINT message "Exit the program.. (enter 3)"
}



DECLARE function "display_clients" no params:
RETURNS nothing    {
	DECLARE "employee_id" ASSIGN the value from call to get_integer_input() fn
	DECLARE "clients_vector" ASSIGN the value returned from ClientHandler.get_clients_for_employee() fn call with param of (employee_id):
	IF clients_vector is valid (the call returned Some / something)   {
		PRINT "Clients for Employee ID: " and the employee_id
		PRINT the header "ID# | Client's Name | Service Selected (1 = Brokerage, 2 = Retirement)"
		PRINT separator "¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯"
	
		FOR each client_id in the clients_vector    {
			DECLARE client, ASSIGN the value from ClientHandler.get_client() fn call with client_id
			IF client is something (Some(client))    {
				PRINT "{}.  | {}   selected option {}" 
					with the first entry being client.client_id
					the second being client.client_name
					the third being client.client_service
			}
		}
	} ELSE   {
		PRINT the message "No clients found for:" then employee_id
	}

}





//---------------------------------------
// Authentication & Hashing
//---------------------------------------


DECLARE module "Authentication"    {
	DECLARE struct Authenticator    {
		DECLARE current_attempts of type i32 integer
		DECLARE max_attempts of type i32 integer
	}

	IMPLEMENT Authenticator    {
		DECLARE new constructor function with no parameters 
		RETURNS reference to self, Authenticator {
				DECLARE attempts, assign the value 0
				DECLARE max_attempts, assign the value 5
		}


		DECLARE function "authenticate" with following parameters
			self (mut reference),
			database_manager (with reference to the type implementing the DatabaseManager trait),
			employee_id of type i32 integer,
			password of type string,
		RETURNS Result type (boolean or error if fail) 		{
			IF this/self.attempts is greater or equal to self.max_attempts			{
				PRINT "Maximum attempts reached, exiting program."
				EXIT the application
			}
			
			Increment self.attempts by +1
			
			Attempt to retrieve stored_hash from DbManager for the provided employee_id:
				IF retrieval fails				{
					RETURN the DbManager error 
				}
				IF stored_hash found for employee_id				{
					// https://docs.rs/rust-argon2/latest/argon2/
					// handles encoding of salt within hash string
					Using argon2's hash_validation/verification, attempt compare of pass to stored_hash
						IF verification succeeds, passwords match	{
							RETURN Result : Ok(true) 
						}
						IF verification fails:						{
							RETURN Result : Ok(false) 
						}
					IF no matching store_hash found for provided employee_id: 					{
						RETURN Result : Ok(false) 
					}
		}

		
		DECLARE function hash_password with params:
			password reference of type string,
		RETURN string (hash & salt)		{
			// https://docs.rs/argon2/latest/argon2/
			// https://github.com/RustCrypto/password-hashes
			DECLARE local var "argon_config", assign the value of default Argon2 config
			
			Attepmt to hash the string param password using argon2
			{
				Use argon_config, allow argon to create salt
				Convert password into byte-array
				RETURN the hashed password as a string (contains encoded salt/config)
			}
		}	
	}		
}



```





### Explain how the planned enhancement will demonstrate specific skills and align with course outcomes.

#### Identify and describe the specific skills you will demonstrate that align with the course outcome

For category one, I will be translating each of the functions in my C++ application into the respective Rust equivalent. This will include input validation / sanitization, using rust's equivalents of object oriented programming, as well as providing the set up for a password hash function. I have been studying rust in my free time since the new year. Prior to this project, I have yet to find time to dig deeply into writing an application in rust, as I have not had much free time to work on side projects while completing this degree. This will be my first full, hands-on experience with the Rust programming language where I am not just following along with someone else's work. I plan to use this learning experience to demonstrate my proficiency, ability, and organization when learning new concepts / languages. Between this artifact and the third artifact, I will also be focusing on the security of my application, implementing both best practices, and the industry standards for both tools and styling.

  

#### Select one or more of the course outcomes below that your enhancement will align with.

The first artifact enhancement primarily aligns with two of the provided course outcomes.
	
- The first course outcome that this conversion process aligns with is developing, "a security mindset that anticipates adversarial exploits in software architecture and designs to expose potential vulnerabilities, mitigate design flaws, and ensure privacy and enhanced security of data and resources." The reason for learning and using the rust language to rewrite this application is due to its built-in safety features, and the way in which it securely handles memory management. Using Rust in this application will allow me to mitigate many of the memory related security issues that arise from implementations using C++.
	    
- The second outcome this enhancement aligns with is the, "ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals." Through the process of rewriting this application in a language that I am not yet comfortable with, I will showcase my capability to quickly adapt to new technologies while in challenging scenarios, and that I am able to deliver real value, all while meeting industry standards.

  
## Category Two: Algorithms and Data Structures

### Select an artifact that is aligned with the algorithms and data structures category and explain its origin. Submit a file containing the code for the artifact you choose with your enhancement plan.

For the second artifact, I will again be using my final project from my CS410 reverse engineering course. In the original C++ code, the list of clients is handled with a singleton class "ClientList" which contains a private vector "clientList" that stores all of the individual clients. The list is accessed through a static accessor method that returns the clientList instead of a public constructor. A second class is used to create Client objects, and a client object can on into the respective Rust equivalent. This will include input validation / sanitization, using rust's equivalents of object oriented programming, as well as providing tbe created by calling the addClient function in the ClientList class. This addClient function then calls the constructor for the Client class, and then pushes the new object instance into the vector of Client objects. For this application, I will plan to implement an AVL tree that stores client instances and balances itself by client id values. For source material, I will be building and basing this AVL tree on the implementation that I first created for my Data Structures and Algorithms final project.

**Link to C++ source code for project:**  
[My C++ source project for Artifact 1, 2, & 3:](https://github.com/ddJProj/CS410/blob/main/Project-2/Mod6_Updated-Security-CPP_E-Johnson.cpp)

**Link to my original C++ AVL tree implementation:**	            		     
[My AVL_tree C++ implementation:](https://github.com/ddJProj/CS300/tree/main/ABCU_Project-2)


### Describe a practical, well-illustrated plan for enhancement in alignment with the category, including pseudocode that illustrates the planned enhancement.

#### Artifact 2 – Data Structures and Algorithms - Initial Planning:

To apply my knowledge of data structures algorithms to this course, I will be using two data structures that I built familiarity with while taking CS300, Data structures and Algorithms. These two data structures are a HashMap, and a self-balancing Binary Search Tree (AVL tree).

For my data structures and algorithms course, CS300, I created an AVL tree and used it to store and sort Course objects. I used generic data structure objects to build my tree, and from my preliminary research, it does appear that a similar implementation is feasible in Rust. I will plan on implementing an AVL tree (balanced BST) into Rust for storing client objects (structs) by client id, or by a generic int (id/key) value in the context of a generic data object. This approach worked well when I first used it in C++, and it provides a clean, modular data structure that is generalized enough to be reusable. This would also provide client operations within the system with a desirable, predictable time complexity of O (log n). If time permits, I also plan to implement a hashmap that utilizes employee ids for keys, and a vector of all clients associated with that specific employee for the values. The employee id could then be used to query what clients belong to an individual employee using the hash map. A combination of these two strategies will allow me to maximize on desirable runtime complexities. This strategy will also allow me to limit database actions / queries to only instances when data is being changed (added, updated, or removed).


#### Artifact 2 – Data Structures and Algorithms - Enhancement Requirements :

- **Enhancement 13:** Develop an AVL tree data structure for storing and managing Client objects.
	- *Sub Enhancement 1:* Include the following functions, is_empty(), height(), balance_factor(), return_balance(), right_rotate(), left_rotate(), find_value(), insert_value(), remove_node().
	- *Sub Enhancement 2:* Use template data types to allow later reusability of the AVL tree.
- **Enhancement 14:** Implement a hash map data structure for storing employee-client associations.
- **Enhancement 15:** Create an authentication method using secure Rust crates and standards (using argon2).
- **Enhancement 16:** Implement password hashing and comparison functionality for login authorization (using argon2).
- **Enhancement 17:** Implement mechanism to handle invalid login attempts (too many / authentication state tracking).


#### Artifact 2 – Data Structures and Algorithms - Pseudocode:


```Rust Pseudocode


//---------------------------------------
//---------------------------------------
// Artifact 2:
//      AVL tree / ETC:
//---------------------------------------
//---------------------------------------


DECLARE struct ClientHandler {
	DECLARE local_avl_tree of type avl_tree
	DECLARE employee-client_pairs of type HashMap<key = i32 int, value = vector<i32 ints>
	DECLARE database of type box(smart ptr) to object of DatabaseManager (trait implementation)
}

DECLARE struct avl_tree<T> {
	// optional ptr can be null, or something / containing a valid ptr
	DECLARE "root" of type optional box(pointer) to avl_node,
}

DECLARE struct avl_node<T> {
	// optional ptrs can be null, or something / containing a valid ptr
	DECLARE "left" of type optional box(pointer) to avl_node,
	DECLARE "right" of type optional box(pointer) to avl_node,

	// data is generic, but will be a client object in this case
	DECLARE "data" of type T,
	DECLARE "height" of type i32 integer,
}

// TODO: need to work on finishing/converting the inner functions
// use C++ code for ref as well as this source:
// https://francismurillo.github.io/2019-07-31-Understanding-Rust-Through-AVL-Trees/#orga1ff405
IMPLEMENT avl_tree 
{
	DECLARE new constructor function with no params:
	RETURNS reference to self.avl_tree	{
		avl_tree {
			root = none, // ptr initialized to none (null)
		}
	}
	
	DECLARE function "insert" with following parameters:
		mutable self reference,
		data object of type T,
	RETURNS nothing		{
		// if root is null, this root
		ASSIGN self.root the value of calling insert_value 
	}
	

	DECLARE function "search" with following parameters:
			self reference,
			key of type reference to T,
		RETURNS optional reference to data object T		{
			TODO: fill with the logic from AVL search
		}
	
	DECLARE function "is_empty" with following parameters:
			self reference,
		RETURNS boolean result		{
			TODO: fill with the logic from AVL is_empty
		}



	DECLARE function "clear" with following parameters:
			mutable self reference,
		RETURNS nothing
		{
			ASSIGN self.root the value "None" // sets the root to nothing, allowing rusts mem management to remove tree
		}


	DECLARE function "in_order" with following parameters:
			self reference,
		RETURNS nothing
		{
			IF root is something (not none) 	{
				CALL traverse_in_order() with root node as argument
			}
		}



	DECLARE function "height" with following parameters:
			node of type reference to optional box (ptr) to a data T avl_node,
		RETURNS i32 integer
		{
			IF current_node is something (not none) 	{
				RETURN current_node’s height value
 			} ELSE  {
				RETURN i32 integer value 0
		 	}
		}


	DECLARE function "return_balance" with following parameters:
			node of type optional box (ptr) to a data T avl_node,
		RETURNS i32 integer
		{
			DECLARE height_left as value returned from calling height(current_node.left) 
 			DECLARE height_right as value returned from calling height(current_node.right) 
 			RETURN value remaining after subtracting height_left from height_right 
		}

	DECLARE function "right_rotate" with following parameters:
			mutable "parent_node" of type box (ptr) to a data T avl_node,
		RETURNS box (ptr) to a data T avl_node
		{
			DECLARE & ASSIGN “child_node” the value of parent_node’s left child
			DECLARE & ASSIGN “temp_node” the value of child_node’s right child
			ASSIGN value of parent_node’s left child the value of temp_node
			ASSIGN value of child_node’s right child to parent_node
			CALCULATE new height value for parent_node
			CALCULATE new height value for child_node
			RETURN child_node
		}
		
		
	DECLARE function "left_rotate" with following parameters:
			mutable "child_node" of type box (ptr) to a data T avl_node,
		RETURNS box (ptr) to a data T avl_node
		{
			DECLARE & ASSIGN “parent_node” the value of child_node’s right child
			DECLARE & ASSIGN “temp_node” the value of parent_node’s left child
			ASSIGN value of child_node’s right child the value of temp_node
			ASSIGN value of parent_node’s left child to child_node
			CALCULATE new height value for child_node
			CALCULATE new height value for parent_node
			RETURN parent_node
		}


	DECLARE function "insert_value" with following parameters:
			"node" of type optional box (ptr) to a data T avl_node,
			"data" object of type T,
		RETURNS optional Box (smart ptr) to a data T avl_node,
		{
			IF node equals "None" {
				RETURN new avl_node with "data" as object, left & right equal to none, height equal to 1
			} ELSE {
				DECLARE & ASSIGN current_node the value of "node"
				IF "data" is less than current_node's data {
					DECLARE left_child, ASSIGN value of left child node of current_node
					ASSIGN left_child the return of CALL insert_value(), args left_child, "data"
				} ELSE IF "data" is greater than current_node's data {
					DECLARE right_child, ASSIGN value of right child node of current_node
					ASSIGN right_child the return of CALL insert_value(), args right_child, "data"
				} ELSE {
					RETURN current_node
				}
				
				CALCULATE height for current_node
				DECLARE balance, ASSIGN it value from CALL to return_balance() with arg current_node
				
				IF balance is greater than 1{
					IF data is less than current_node's left child node's data{
						RETURN CALL to right_rotate() with arg current_node
					} ELSE {
						DECLARE left_child, ASSIGN the value of left child node of current_node
						ASSIGN left_child the return from CALL left_rotate(), with arg left_child
						RETURN value of CALL to right_rotate() with arg current_node
					}
					
				IF balance is less than -1{
					IF data is greater than current_node's right child node's data{
						RETURN CALL to left_rotate() with arg current_node
					} ELSE {
						DECLARE right_child, ASSIGN value of right child node of current_node
						ASSIGN right_child the return from CALL right_rotate(), with arg right_child
						RETURN value of CALL to left_rotate() with arg current_node
					}

				}
			
			}
			
		}
	// this is the only function returning data objects, 
	// it needs to have the lifetime of the data object referenced as
	// we don't want it to extend past the lifetime of local tree / data object
	DECLARE function "search_value" with lifetime x and following parameters:
			current_node of type reference with lifetime x to an optional box (ptr) to a data T avl_node,
			key of type reference to data T
		RETURNS optional reference with lifetime x to data T
		{
			IF current_node is not none/nothing {
				IF key's data is equal to the value of current_node.data {
					RETURN something(reference to current_node's data)
				} ELSE IF key is less than current_node's data (key.client_id<current_node.data.client_id) {
					RETURN a CALL to search_value with args, ref to current_node's left child node, and key
				} ELSE {
					RETURN a CALL to search_value with args, ref to current_node's right child node, and key
				}
			} ELSE return "None"
		}

	DECLARE function "traverse_in_order" with following parameters:
			current_node of type reference to optional box (ptr) to a data T avl_node,
		RETURNS nothing
		{
			IF node is not nothing{
				CALL in_order_traverse() with left child node of current_node
				PRINT node data
				CALL in_order_traverse() with right child node of current_node
			}
		}




	DECLARE function "search_value" with lifetime x and following parameters:
			node of type reference with lifetime x to an optional box (ptr) to a data T avl_node,
			key of type reference to data T
		RETURNS optional reference with lifetime x to data T		{
			TODO: fill with the logic from AVL search_value
		}



```



### Explain how the planned enhancement will demonstrate specific skills and align with course outcomes.

#### Identify and describe the specific skills you will demonstrate to align with the course outcome.

I will be focused on demonstrating my attention to detail in this second artifact. Much of the algorithmic design and implementation in this program will require me to very closely monitor my code for any syntax errors. Failing to properly implement a complex data structure such as an AVL tree can lead to significant, undesirable behaviors. I experienced these undesirable behaviors the first time I attempted to implement a self-balancing tree. Troubleshooting a complex program can be difficult, but I aim to show with this work that I am quite capable of maintaining project scope, all while still being able to move the project forward.


  

#### Select one or more of the course outcomes listed under Category One that your enhancement will align with.

The planned enhancements for this artifact will focus on demonstrating two of the provided course outcomes.
	
The first outcome for this artifact that I will be demonstrating is to, "Design and evaluate computing solutions that solve a given problem using algorithmic principles and computer science practices and standards appropriate to its solution while managing the trade-offs involved in design choices." By implementing an AVL tree, I will demonstrate my understanding of the performance trade-offs of using various data structures. AVL trees are a form of binary search tree that is self-balancing. This self-balancing process allows the data structure to maintain a known time complexity for it's operations of O(log n). Operations with this time complexity are highly desirable. Seeing as the client list may continue to grow, it is desirable to know that the performance of the system will not vary or degrade significantly performance, as can be seen in cases of O(n) and beyond. This was a determining factor in selecting this data structure for the system.
	
The second outcome that I will demonstrate is, "an ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals." I will demonstrate this outcome through my usage of clean, modular algorithms, and proper usage of included data structures. Through my implementations, I will provide a finished software application that is both functional, and that delivers on the expected values for a software application of this type, within its respective industry.

  
## Category Three: Databases
  

### Select an artifact that is aligned with the databases category and explain its origin. Submit a file containing the code for the artifact you choose with your enhancement plan. You may choose work from the courses listed under Category One.
  

For the database artifact selection, I will again be selecting the client service management application that I rewrote and designed for my final project in CS410, Reverse Engineering. A core aspect of this application system relies on its authentication system. Currently the application only uses a single password hash and user account to validate user login to the system. This data is stored locally within the application, and hard coding credentials into an application, even when hashed, does not follow best, secure coding practices. I noted in my code comments when initially creating the program, that the next step for the application would be to provide a database system that stored user login names and their corresponding password hashes. As I am going to be converting this application to the Rust programming language over the course of completing my first artifact, I will also need to write this database implementation in Rust.

  

**Link to C++ source code for project:**  
[My C++ source project for Artifact 1, 2, & 3:](https://github.com/ddJProj/CS410/blob/main/Project-2/Mod6_Updated-Security-CPP_E-Johnson.cpp)


### Describe a practical, well-illustrated plan for enhancement in alignment with the category, including a pseudocode or flowchart that illustrates the planned enhancement.

#### Artifact 3 – Database – Initial Planning:

  
The database implementation for this project will focus on storing data for the two core functions of the application, employee login / authentication, and retrieving/updating client data. The employee accounts (structs) will have a unique employeeId number, and will contain an employee name, and a password hash. The employee id and a hashed copy of their personally set password will be used to authenticate attempts to log in to the application. Each employee id and password should have a list of clients that is associated with their user account. The content of an individual instance of a client struct is client name, client id, client service selected, and the employee id that refers to the employee that client works with. A list of clients will need to be queried from the database and used to populate the Client AVL / BST that is assembled upon successful user authentication. The id values for both client objects (structs) and employee objects (structs) will be automatically generated and assigned by the database, and will be treated as unique primary keys for their respective tables.

  
#### Artifact 3 – Database - Enhancement Requirements List:

- **Enhancement 18:** Create a database with separate tables for Client and Employee data.
- **Enhancement 19:** Develop a database manager trait with needed CRUD operations for both Client and Employee tables.
- **Enhancement 20:** Develop a client manager trait to handle client-related operations both locally and in the database.
- **Enhancement 21:** Develop a employee manager trait to handle employee-related operations both locally and in the database.
- **Enhancement 22:** Implement functionality to update employee-client pairings both in the database and local storage.
- **Enhancement 23:** Add capability to update client service selections in both the database and local storage.
- **Enhancement 24:** Implement methods to retrieve single client objects by client_id (pull from local AVL tree).
- **Enhancement 25:** Develop functionality to retrieve client lists by employee_id (using the local hash map).
- **Enhancement 26:** Create a method to retrieve all Clients (traverse_tree_inorder() method?).
- **Enhancement 27:** Implement a transaction system to manage local and remote system operations. Utilize it to encapsulate client & employee operations to ensure that data remains consistent between remote & local storage.




#### Artifact 3 – Database - Pseudocode:


```Rust Pseudocode

//---------------------------------------
//---------------------------------------
// Artifact 3:
//      Database related functions:
//---------------------------------------
//---------------------------------------


// This is how I currently think the database would be set up / how it is for my implementation
//---------------------------------------
// DATABASE SCHEMA 
employees table:
(
	employee_id - INT - PK (primary key) - auto/increment (to increment the values)
	employee_name - VARCHAR(75) - Not null (required)
	hashed_password - VARCHAR(150) - not null (required)
);

clients table:
(
	client_id - INT - PK (primary key)  - auto/increment (to increment the values)
	client_name - VARCHAR(75) - Not null (required)
	client_service - INT - Not null (required)
	assigned_employee - INT - FK (foreign key) of employee id - REF(reference the table) employees(employee_id) 
);
//---------------------------------------


// mysql crate for rust seems to be the best approach for coding queries
// https://outersky.github.io/r2d2-mysql/doc/v3.0.0/mysql/struct.Pool.html
// https://docs.rs/mysql/latest/mysql/index.html
DECLARE struct MySQL_Database
{
	// https://docs.rs/mysql/latest/mysql/struct.Pool.html
	DECLARE "pool" of type Pool
}

// https://outersky.github.io/r2d2-mysql/doc/v3.0.0/mysql/index.html
IMPLEMENT MySQL_Database 
{
	DECLARE new constructor function with params:
		// https://outersky.github.io/r2d2-mysql/doc/v3.0.0/url/index.html
		url of type string reference
	RETURNS self/result or box ptr to error
	{
		DECLARE pool of type Pool with url as arg
		IF pool created successfully
		{
			RETURN new database containing the pool and Result Ok 
		} ELSE {
			RETURN error message failure to create pool
		}
	}
}



// TODO: make sure all references to the hashmap of clients, are storing a vector of client_id's
// instead of storing the whole client objects. Use vector of int client_ids stored in with
// each paired employee_id to retrieve the client objects from the AVL tree of clients
// currently am storing whole client objects


DECLARE trait DatabaseManager
{
	DECLARE get_clients function with params:
		reference to self
	RETURNS Result vector of Client or box ptr to error
	{
	}

	DECLARE function new_client with param
		reference to self
		client of type Client reference
	RETURNS Result of operations or box ptr to error
	{
	}


	DECLARE update_client function with params:
		reference to self
		client of type Client reference
	RETURNS Result of operations or box ptr to error
	{
	}
	
	
	DECLARE remove_client function with params:
		reference to self
		client of type Client reference
	RETURNS Result of operations or box ptr to error
	{
	}

	DECLARE get_employee_hash function with params:
		reference to self
		employee_id of type i32 integer
	RETURNS Result & optional string or box ptr to error
	{
	}
	
	DECLARE new_employee function with params:
		reference to self
		employee of type Employee reference
	RETURNS Result of operations or box ptr to error
	{
	}


	DECLARE update_employee function with params:
		reference to self
		employee of type Employee reference
	RETURNS Result of operations or box ptr to error
	{
	}
	

	DECLARE remove_employee function with params:
		reference to self
		employee_id of type i32 integer
	RETURNS Result of operations or box ptr to error
	{
	}
}



IMPLEMENT DatabaseManager for MySQL_Database 
{
	DECLARE get_clients function with params:
		reference to self
	RETURNS Result vector of Client or box ptr to error
	{
		GET database connection from pool
		EXECUTE SQL query to return all rows from client table
		MAP the results of rows to instances of the Client struct
		RETURN the result of operation as vector of Client objects
	}

	DECLARE function new_client with param
		reference to self
		client of type Client reference
	RETURNS Result of operations or box ptr to error
	{
		GET database connection from pool
		EXECUTE SQL query to insert a new Client object instance into clients table
		RETURN the result of operation	
	}


	DECLARE update_client function with params:
		reference to self
		client of type Client reference
	RETURNS Result of operations or box ptr to error
	{
		GET database connection from pool
		EXECUTE SQL query to clients table, UPDATE client/row WHERE client_id is match to param client
		RETURN the result of operation
	}
	
	
	DECLARE remove_client function with params:
		reference to self
		client of type Client reference
	RETURNS Result of operations or box ptr to error
	{
		GET database connection from pool
		EXECUTE SQL query to  clients table, DELETE client rows WHERE client_id = client.client_id
		RETURN the result of operation
		
		
	}

	DECLARE get_employee_hash function with params:
		reference to self
		employee_id of type i32 integer
	RETURNS Result & optional string or box ptr to error
	{
		GET database connection from pool
		EXECUTE SQL query to employees table, SELECT hashed_password WHERE employee id= param id
		RETURN the result of operation, and string hashed_password if match found
		
	}
	
	DECLARE new_employee function with params:
		reference to self
		employee of type Employee reference
	RETURNS Result of operations or box ptr to error
	{
		GET database connection from pool
		EXECUTE SQL query to employees table, INSERT values of param employee object to new row
		RETURN the result of operation
		
	}


	DECLARE update_employee function with params:
		reference to self
		employee of type Employee reference
	RETURNS Result of operations or box ptr to error
	{
		GET database connection from pool
		EXECUTE SQL query to employees table, UPDATE existing employee row with param object values
		RETURN the result of operation 
	}
	

	DECLARE remove_employee function with params:
		reference to self
		employee_id of type i32 integer
	RETURNS Result of operations or box ptr to error
	{
		GET database connection from pool
		EXECUTE SQL query to employees table, DELETE employee row WHERE employee_id's match
		RETURN the result of operation
		
	}	
}	

IMPLEMENT ClientHandler
{
	DECLARE new constructor function params:
		database of type box ptr to implementation of trait DatabaseManager
	RETURNS reference to self
	{
		DECLARE mutable client_handler 
		ASSIGN client_handler value of ClientHandler {
			local_avl_tree of type NEW avl_tree
			database equal to constructor parameter 
			employee_client_pairs of type NEW HashMap
		}
		CALL fn get_db_clients() on client_handler
		RETURN client_handler
	}
	
	DECLARE function get_db_clients with params:
		reference to mutable self
	RETURNS nothing
	{
		DECLARE clients_list 
		IF ASSIGN clients_list the value from calling get_clients on database is success
		{
			FOR client in clients_list
			{
				CALL insert on local_avl_tree with argument, clone of current client
				CALL update_employee_client_pair with args: 
				(
					asn_employee_id(assigned emp. id) of this client,
					client_id of this client,
				)	
			}				
		}
	}
	
	// updates / adds client_ids to their assigned employee in hashmap value vector
	DECLARE function update_employee_client_pair with params:
		reference to mutable self
		employee_id of type i32 integer
		client_id of type i32 integer
	RETURNS nothing
	{
		IF client_id does not exist in employee_client_pairs hashmap
		{
			PUSH the client_id into their assigned employee_id's value vector
		}
	}
	

	DECLARE function add_client with params:
		reference to mutable self
		client of type Client
	RETURNS Result, or box pointer to error
	{
		DECLARE new_id
		ASSIGN new_id the value of calling new_client() on database, with arg client ref
	}


	DECLARE function update_client_service with params:
		reference to mutable self
		client_id of type i32 integer
		new_service_value of type i32 integer
	RETURNS Result, or box pointer to error
	{
		IF calling find() on local_avl_tree with arg client_id returns a client 
		{
			CALL client_change_service() with arg new_service_value on the returned client
			CALL update_client() with arg client on the database
			RETURN Ok if success
		} ELSE {
			RETURN Error "client not found"
		}
	}
	

	DECLARE function get_client with params:
		reference to mutable self
		client_id of type i32 integer
	RETURNS optional reference to value of type Client
	{
		CALL find() with arg client_id on local_avl_tree
	}
	
	
	DECLARE function modify_client_asn_employee with params:
		reference to mutable self
		client_id of type i32 integer
		new_employee_id of type i32 integer
	RETURNS Result, or box pointer to error
	{
		IF calling find with arg client_id on local_avl_tree is successful 
		{
			DECLARE prev_employee_id of type i32 integer
			ASSIGN prev_employee_id the value of this client's asn_employee_id
			CALL set_employee_id() with arg new_employee_id on this client
		
			CALL update_client() with arg client on this database
			
			IF calling get_mutable() with arg prev_employee_id on employee_client_pairs is success
			{
				ITERATE through the employee_client_pairs vector at matching employee_id
				remove any value equal to the client's client_id
			}
			CALL update_employee_client_pair with args new_employee_id, and client_id
			RETURN result Ok
		} ELSE {
			RETURN error "No client found"
		}
	}
	
	
	DECLARE function get_employee_client_pair with params:
		reference to mutable self
		employee of type i32 integer
	RETURNS optional reference to Vector of i32 integers
	{
		CALL get() with arg reference to employee_id on employee_client_pairs
		ASSIGN new_id the value of calling new_client on database, with arg client ref
	}

}



```








### Explain how the planned enhancement will demonstrate specific skills and align with course outcomes.
    

#### Identify and describe the specific skills you will demonstrate that align with the course outcome.

The specific skills that I am demonstrating with this third artifact are my willingness to dig into research topics until I am satisfied that I have determined the best way to approach a problem. With this database implementation specifically, I have searched through the rust foundation documents, through at least a dozen different stack overflow posts reading how others approached their problem that I could relate to, and several tutorials or other descriptive guides for how to implement a SQL relational database in Rust.
	
	  
	
My goal and hope is to demonstrate that I am resourceful. Additionally, I enjoy the work that I am doing. I enjoy the challenge, and I very much want to deliver on the best possible product that I can, every time. I am dedicated to maintaining a strong work ethic, and I hope that it is apparent in the product that I deliver on. I feel that these align with my stated outcome for this artifact, in so far as, I do my best to apply the tools that I feel will create a strong, reliable product. I am not omniscient, but I am willing to put the time and effort into attempting to make things work, and to do so the “right” way (Or at least using the current best industry standards). I will take the time to consider why I might choose one implementation over another, and to consider as many edge cases as I am able to. Because I do believe that the effort matters.

  

#### Select one or more of the course outcomes listed under Category One that your enhancement will align with.
	
My database implementation for the third artifact selection will demonstrate primarily the following course outcome, "an ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals."
	
With my tool implementations and styling, I will also look to meet the secondary outcome of, "a security mindset that anticipates adversarial exploits in software architecture and designs to expose potential vulnerabilities, mitigate design flaws, and ensure privacy and enhanced security of data and resources."
	
I am aiming to provide a database implementation that provides stable performance, and that meets the standards of industry best practices. I see this artifact enhancement as an opportunity to meet the same standards that I would be held to if I were a senior engineer doing this job. I don’t yet have the experience of a senior engineer, but I am more than willing to put in the time and work to get there.
	
Prior to this project, my only real experience implementing databases was with MongoDB for my CS340, and CS465 courses. CS340 was focused on performing queries and uploading data to the database, and CS465 primarily focused on angular / express js.
	
I have not yet had the opportunity to thoroughly dig into MySQL, but I have read that it is very valuable to have experience with. I have looked through the available database frameworks to find what would be the industry standard, as well as what is most marketable. I noticed that much of FAANG uses MySQL, and that was something I factored into my decision on MySQL. For this database implementation I hoped to build some experience with it, so I would like to use MySQL to handle my database and application’s queries. In doing so, I will further demonstrate that I am capable of picking up, and gaining proficiency in new technologies. I will implement an SQL relational database that will track client data in the first table, and handle employee user login authentication / validation attempts with a second table.
	
To meet the secondary outcome, I will ensure that the methods that I implement in my application follow the best known security standards for the technologies / language of my choice. I have already researched into what the best approaches are when it comes to encryption and hashing, including using a secure, updated version of MySQL, and using the relevant, up to date Argon2 crate.

  

    


## Skills and outcomes planned to be illustrated in the code review

My selection of a language that I am not as familiar with as others does complicate the code review somewhat. With the code review, I would typically look to demonstrate my knowledge of the language, and it's various implementations. As I am not as well versed in rust yet, my focus will be more on providing functional equivalence to the original C++ code. I will still obviously aim to use industry best standards in regards to the rust implementations that I select for use in my application. I will detail the functionality of choices that I have made in my conversion and code review, and I will also explain why I selected the choices that I did. Showing that I am still capable of producing quality work, even when using a language I am not yet familiar with I feel would be a strong indicator of my skill in adapting to new situations, and to new tools.

  

## Skills and outcomes planned to be illustrated in the narratives

The primary skill that I plan to highlight in my narrative essays, is my ability to use language to effectively communicate with others. Being able to effectively communicate complex topics is something that I have been told that I am exceptional at. In a past life, I was a teaching assistant for my college chemistry professor. I am well aware how important it is to synthesize your knowledge into digestible, bite size pieces, especially when dealing with non-technical audiences. In my narratives, I will plan to highlight the reasoning behind my algorithm choices, as well as how I approach problem solving in general. There wasn't a great deal of space for collaborative exercises, or teamwork as far as this degree program goes. That won't likely be the case for most careers. I was employed at different times with both FedEx and UPS in management positions, so I do understand the value and necessity of both working on, and leading a team. I will plan to show how my organization, and work ethic helps me to be an effective leader, even when not filling an active leadership role.

  

## Skills and outcomes planned to be illustrated in the professional self-assessment

I will use the professional assessment of this project to cover following three skill groupings points. These three points are core to understanding who I am, and how I work in. These are the core points that I also would like to demonstrate through my work on this project.

## My own self-awareness, and focus on growth state:
    
- The first is my views of the importance of constant personal growth in relation to this. I often find myself hyper-aware of the faults in my work. This is a definite strength I've found, as it allows me to catch many faults before they become issues, but for a long time it was also problematic for me. I have since grown to become more comfortable with the concept of "good enough". It is not something that I am particularly fond of, but it is something that absolutely is necessary at times if we ever hope to reach a conclusion with our work / projects.


## Iterative work, planning, and improvement:
    
- I will talk briefly cover how my planning and organization strategies allow me to quickly iterate on the work I produce. This skill provides me with the opportunity to quickly get my work to an acceptable level, and then to progressively sharpen it with additional reviews, critiques, and refactoring. The ability to productively iterate on your work I believe, is an exceptionally useful skill to have in a software development role. It allows the boulder that is our work progress to continue moving forward, and I have found provides the breathing room necessary to make adjustments when needed.
        
- I am always looking for ways to improve myself, the work I produce, and my surroundings. I believe it is this quality that has led to me quickly picking up positions of responsibility in the jobs that I have held.


## Radical acceptance, and adaptability:
    
- In my artifact outcome statements I mentioned that my openness allows me to rapidly adapt to new technologies, but it is also a trait that I possess socially. All of my adult life, I have found it quite easy to socially adapt to the trends and needs of my environment. I am generally happy to embrace changes, especially when they are adaptations that will improved a former process.
        
- I have been told a number of times that I am a strong listener who is very receptive to feedback. I have also been told that I am very easy to get along with. I have received similar comments from peers, colleagues and supervisors. I feel that this is generally due to my own openness and awareness of my surroundings in the first case. And having a large capacity for empathy in the second case. I genuinely enjoy seeing my peers succeed, it makes me happy, especially when I have been there to watch their progress.


## Moving forward:
    
- Looking forward into the future I plan to continue expanding my base of tools of which I am proficient with. I will continue to work on becoming a better software engineer, and I hope to be able to likewise also advance my education.

  

## If you fulfill your enhancement plans, what specific skills or knowledge will your work demonstrate?

There are several core skills that I hope to demonstrate with my enhancement work this semester. The first of these skills is in my work ethic, and my motivation to provide the best quality of product that I can in any given time-frame. The next set of skills I hope my work demonstrates are both my attention to detail, and level of detail in my work provided. As I have previously mentioned, I always aim to deliver the highest quality of work, even with code that I expect no one else will ever see. I am a perfectionist that understands that there is no such thing as perfection. What this means, is I am fully aware that the code I write, and work I provide can never be "perfect", but I don't think that should ever stop us from always looking for the next improvement that we can make, both in ourselves, and in our work. Going through the process of analyzing your work from different perspectives is how we progress and become better over time, and I plan to continue doing so as long as I am able.
	  
	
As far as additional skills go, one of my main goals with this project was to demonstrate that I am very capable of adapting to new technologies or frameworks. The quality of my work obviously won't be on the same level as an expert would be with those technologies, but it won't take me long to become very competent with a new skill-set. I believe that this ties back into my attention to detail, and my ability to recognize patterns. It allows me to be able to competently, and quickly become proficient with new skills.

  

## Are there any gaps relative to the course outcomes?

There are gaps relative to the course outcomes primarily in the first two outcomes from the list. The first of the two course outcomes for which my work contains gaps, is to "employ strategies for building collaborative environments that enable diverse audiences to support organizational decision-making in the field of computer science". My focus in completing this project, and in displaying my work through my ePortfolio, is to provide display the quality of work that I am capable of delivering. In the past, I have excelled at team related collaboration, both for education related projects, and in my employment. I am a very capable, team player, and while I may not be displaying the fact that I am inclusive of diverse groups in this specific project, I do hope to show that I am very well organized.
	
The second of these gaps stems can be found in the course outcome, "Design, develop, and deliver professional-quality oral, written, and visual communications that are coherent, technically sound, and appropriately adapted to specific audiences and contexts." As my work for this project is primarily in the form of code, those forms of communication would not meet the oral or visual communications requirements. I will be providing brief but descriptive documentation in the form of inline and function comments where possible. I will also be providing my written statements in regards to what I am looking to demonstrate with my work on this project. If the opportunity presents itself, I would have no problem providing oral or visual communications, but in the context of this project I am unsure of where those would be included. 

I did not have plans to specifically address the outcome initially, that I have been able to meet the outcome, "Design, develop, and deliver professional-quality oral, written, and visual communications that are coherent, technically sound, and appropriately adapted to specific audiences and contexts." But I ended up being able to meet thing outcome with the conclusion of my project enhancements. I do feel that through providing my detailed documentation write-ups, as well as the recorded code walk-through videos I have been able to meet this outcome.
	

## Are there remaining limitations or weaknesses you may need to address?
  
Most of my remaining limitations or weaknesses that I am aware of at least, stem from my lack of experience. The fact that I haven't had nearly as much time as I would like to write code outside of my coursework, to me at least, feels apparent. I finished my four year CS program in a half the expected time, but I still have a great deal of practical learning that I know I need to continue to work on. I do have a background in computer science related fields, both through work experience, and through prior courses taken earlier in my life. I am able to come to strong conclusions, and I approach problems using the best methods that I can find, but still I often find myself discovering new approaches after I have finished working on something. I would very much like to have the opportunity to both gain exposure to other’s code, and to write more code in general. I do feel that with more time spent coding, I will learn to smooth out the initial hurdle I often face when trying to determine the best approach to a specific problem. I also would like to spend more time analyzing and reading through the existing systems built by other developers so that I can perhaps discover approaches and conclusions that I may not have come to myself.











