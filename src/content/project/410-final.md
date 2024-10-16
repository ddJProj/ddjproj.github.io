---
title: 'CS410 - Reverse Engineering - Final Project'
description: 'CS410 - Financial Investment Firm - Security analysis an application rewrite.'
pubDate: 'May 20 2024'
heroImage:
  url: '/blog-placeholder-about.jpg'
  alt: 'GitHub wallpaper'
platform: Command-Line Interface - Client Service Management Tool
stack: ['Cpp', 'Assembly']
website: https://ddjproj.github.io/
github: https://github.com/ddJProj/CS410/blob/main/Project-2/Mod6_Updated-Security-CPP_E-Johnson.cpp
order: 3
---

## Financial Investment Firm: Client Management Software Application 

### Prompt: 

In Project One, you applied for a Software Engineer position at a large investment company called SNHU Investments. Recently, they have been trying to move their legacy code into a cloud-based application. You were selected to participate in a proficiency test as part of the interview process. In the proficiency test, you demonstrated your ability to reverse engineer code.

For the next part of the proficiency test, you have been asked to identify and explain security vulnerabilities within the client management application. You will identify multiple security vulnerabilities within blocks of assembly code, explain the vulnerabilities, and describe recommendations to fix the vulnerabilities.

### Then: 
Using the C++ (CPP file) that you created in Project One, you will identify multiple security vulnerabilities, explain the vulnerabilities, and describe recommendations to fix the security vulnerabilities.



<br>

# Discovered Vulnerabilities:


## Vulnerability 1: 
#### Raw personal data for clients should be encapsulated within a class for better security, / placed into a data structure such as a hash map/unordered map) or other similar data structure.
#### Current state of variables could lead to confusion and incorrect information being used to represent a client.
#### No way to easily add more clients without hard coding additional sets of variables.


- Sensitive data, such as raw client information should always be properly stored. Proper storage includes using an appropriate data structure, as well as encapsulating the data / data structure within a class when using an object oriented language such as C++.  In the initial application code, client names, id numbers, and service selections are all given variables, but none of these variables are directly tied to each other in any way other than a number reference within the variable name. These should be paired up with matching values assigned to a class object instance, assigned a private status, and given mutator / accessor methods to modify or retrieve the values for a specific instance. This ensures that there is no mess, or any confusion due to having a long list of assorted variables in the general program structure. Each client will have their own instance, and the data of those clients will only be accessible by ways that are defined in the class setup. This also provides a modular way to add additional clients in the future without the need to hard code a new full set of matching general variables. An interface can be used to access the addClient() method, and passed the relevant Client data.




### Affected code 1: 

```c++
int32_t num1 = 1;
int32_t num2 = 2;
int32_t num3 = 1;
int32_t num4 = 1;
int32_t num5 = 2;

std::string name1 = "Bob Jones";
std::string name2 = "Sarah Davis";
std::string name3 = "Amy Friendly";
std::string name4 = "Johnny Smith";
std::string name5 = "Carol Spears";
```
<br>

## Vulnerability 2: 

### Description of vulnerabilities:

#### Variable declarations not initialized with default values. Can cause memory issues when address is accessed but no value has been assigned yet.

- There are a number of variables that are not initialized with a value in their declarations. They can be found within the main method, within the CheckUserPermissionAcces function, and the ChangeCustomerChoice function. By declaring a variable but not initializing it, you may open yourself and your application up to undefined behaviors. Attempting to access a variable that hasn’t been initialized can cause a host of problems such as memory related access violations, exceptions, or application clashes. The application may end up exposing sensitive data by accessing incorrect memory, and can leave your application compromised. Always give declared variables a default / initialization value to avoid these problems.



### Affected code 2: 

```c++
  std::string username;
  std::string password;

  int64_t changechoice;
  int64_t newservice;
```


<br>

## Vulnerability 3: 

### Description of vulnerabilities:
#### Hard coding of authentication data / passwords should never be done. Use password hashes instead of raw passwords, hash the user input password and compare the hashes.

- The application directly stores the password “123” in plain text within the code for the program. This is a severe violation of secure, best coding practices. One of the easiest ways you can compromise your application is by hard-coding security or other authentication related data. Never use hard coded passwords or authentication credentials, as doing so provides individuals familiar in reverse engineering direct access to those values. It is very easy to access hard-coded strings or other values, so they should never be written into the code. Passwords should always be stored as hash values, ideally as salted hash values. They should be stored on an encrypted drive, or in a similar secure manner whenever possible. To authenticate a user password, you should hash the input password and compare the hash to the stored hash. 
- In this application we will implement an openssl hash function using SHA256, and this function will be used to validate entered passwords by comparing the input password to the stored hash for the original password of the application “123”. For the purpose of this application, we will store the valid password hash within the constructor of the singleton authentication class.


### Affected code 3: 

```c++
  if (password == "123") {
    localAnswer = 1;
  } else {
    localAnswer = 2;
  }
```





<br>

## Vulnerability 4: 

### Description of vulnerabilities:

#### No rate limit or attempt limit enforced for attempts at authentication, program is very vulnerable to brute forcing.

- The application does not implement any form of rate limiting for authentication attempts, or any form of attempt limits. Rate limits limit the speed at which a user can attempt to connect to the system, and attempt limits will limit the quantity of authentication attempts that a user can make. Rate limiting is important, especially in the context of networking infrastructure, as too many attempts to connect in too short of a time frame can effectively lock up a system. Methods such as denial of service, or distributed denial of service attacks can cause damage to a system, and can cause undefined behavior to occur. This is especially true in systems that are not set up to lock out connection attempts that have passed a threshold, or with a method to “fail with grace” when large volumes of traffic / attempts to connect are made. 
- Not limiting the connection attempts also leaves your system open to brute forcing, as there is nothing preventing a malicious user from making an unlimited amount of connection attempts.
- For this system specifically, it would  be helpful to implement a limit to the quantity of valid connection attempts that can be made to the system. This would be straight forward to implement using an authentication class object that handles providing connections to users. A straightforward implementation of this would be to create an authentication class that handles authentication attempts with a private member variable. It will increment the attemptsMade variable whenever the user provides a valid authentication request but fails to connect due to invalid password etc. For the purpose of this application it will be a singleton method. But for a networked version of the application, instances and connection attempts should be assigned by user account (per username/password). 


### Affected code 4: 

```c++
  do { // authentication loop

    answer = CheckUserPermissionAccess();

    if (answer != 1) {
      std::cout << "Invalid Password. Please try again\n";
    }
  } while (answer != 1);
```




<br>

## Vulnerability 5: 

### Description of vulnerabilities:
#### Printing detailed authentication failure message is a security vulnerability. Makes brute forcing easier and can open you to side-channel attack. Use a generalized authentication/login attempt failure message.

- Printing detailed authentication failure message is a security vulnerability. Use a generalized authentication/login attempt failure message
- The system initially provides the user with feedback in the form of an “Invalid password” message when the user enters an incorrect password. Giving feedback for authentication in this manner makes brute forcing easier and can open your system up to side-channel attacks. Side channel attacks can occur when a system inadvertently leaks information about the way that it operates, and that data can be used to glean enough information to gain unauthorized access to the system. We will use a generic failed authentication attempt message when a user does not make a successful login attempt but provides valid inputs.



### Affected code 5: 

```c++
    if (answer != 1) {
      std::cout << "Invalid Password. Please try again\n";
    }
```






<br>

## Vulnerability 6: 

### Description of vulnerabilities:

#### Authentication process is a public function accessed in the main function instead of an authentication class that encapsulates  methods.

- I mention the implementation of an authentication class in vulnerability #4, and the corrections regarding #6 will also be built into the implementation of the authentication class.  
- Currently, the authentication method is very simple, and is performed below the main method within the program file. This is not best secure coding practices, as the variables are open and accessible, and the method itself is public. To correct this implementation, we will be implementing a public authenticate method within the authentication class. This authenticate method will be what takes the input password, calls the private hashing function to create a hash of the input password, and then calls the private constant time comparison function with the stored hash value and the input password hash value to determine if the passwords match. This will encapsulate all of the inner functions and variables of the authentication process within private member methods and variables, and will provide a modular interface for the authentication process to be called from. 


### Affected code 6: 

```c++
  do { // authentication loop

    answer = CheckUserPermissionAccess();

    if (answer != 1) {
      std::cout << "Invalid Password. Please try again\n";
    }

  } while (answer != 1);
```




<br>

## Vulnerability 7: 

### Description of vulnerabilities:
#### Generic string comparisons create insecurity to timing attacks. Using values to compare directly in if conditional not best practice.

- Generic string comparisons create insecurity to timing attacks. Using values to compare directly in simple comparisons such as with comparing strings does not follow best, secure coding standards. 
- In vulnerability #5, I reference the fact that providing detailed error messages regarding authentication states can open your system up to side-channel attacks. One of the most common types of side-channel attacks is known as a timing attack. Different operations within a system can take varying time frames to perform, and analyzing the time that the system takes to perform it’s operations can allow attackers to gather valuable data about what operations are being performed. This greatly depends on the implementation that a programmer uses. If for instance you are directly comparing a stored string value against an input string value, and are doing so in a way that returns when an incorrect character is reached, the time of those returns will vary. There are a number of ways this can be performed but at least with a simple timing attack, analyzing this side-channel of information can allow an attacker to deduce the correct password with enough connection attempts. 
- To resolve this issue, we will implement a comparison method for the password hashes that utilizes constant time to complete the comparison. The comparison ensures that we take the same amount of time every time a comparison attempt is made. In this instance, I will iterate over the length of characters in the stored hash, and compare each to the corresponding character at the same position in the user input password hash. I perform an XOR (exclusive or) operation on the characters at each position and assign that value using an OR assignment operator to an answer variable. The answer will be initially set to the value 0, so that if any of the characters are different within the hash, we will end up with a non-zero answer value. We can then declare that the answer is zero, and return the boolean of that statement. If the answer is not zero, the values of the hashes were not the same, and the passwords did not match. Because we iterate over the stored hash, the amount of time the operations take remains constant.



### Affected code 7: 

```c++
  if (password == "123") {
    localAnswer = 1;
  } else {
    localAnswer = 2;
  }
```




<br>


## Vulnerability 8: 

### Description of vulnerabilities:

#### Using “magic numbers” for program control instead of const values (read only), calculated at compile time. Values that don’t need to change should not be able to change.


- Using “magic numbers” for program control instead of const values (read only), calculated at compile time. Values that don’t need to change should not be able to change. Using magic numbers for program flow is not in line with best coding practices.
- Magic numbers are unique values within the application that do not have an explained meaning associated with them in the same way that a named constant value would. An example of such would be integers used in conditional branching that is used to control the program flow. Using magic numbers disrupt the readability of the code, and create complications when it comes to maintainability. They can be inadvertently changed down the road, and in doing so implement undesired behavior or vulnerabilities. It is best to always use named constant values when implementing values to control the flow of the application. All instances of magic numbers in the program will be transitioned to named constants, and new control variables will follow this same guideline.



### Affected code 8: 

```c++
  if (password == "123") {
    localAnswer = 1;
  } else {
    localAnswer = 2;
  }
```





<br>


## Vulnerability 9: 

### Description of vulnerabilities:

#### No input validation here, no sanitization of inputs.

- No input validation here, no sanitization of inputs
- Not implementing a system of robust input validation system is one of the greatest sources of vulnerabilities for a system. It is extremely important to make sure that a malicious actor cannot use the input of your program to gain access to sensitive data. Without proper sanitation of inputs as well, you leave the system open to attacks that can directly inject of code into your system by passing it as an input to the program. A common example of this would be passing SQL commands/arguments into the system to control the flow of information within the database that the system relies on. Another could be using the input system to pass information related to your methods of authentication. An example could be passing an input that overflows a given input value and causes a portion of the input to be treated as code instructions. This could lead to a scenario when someone is able to completely bypass the normal authentication process. Applications must always account for all possible input conditions, and limit the system inputs to only allow those which would maintain desired functionality. This application will use a string validation function to validate string inputs, limiting only basic alphanumeric values to be entered. An integer validation function will also be implemented to ensure that only valid integers can be given to the system, and both functions will limit the the number of characters allowed for a single input. 



### Affected code 9: 

```c++
  std::cout << "Enter your username: \n";
  std::cin >> username;

  std::cout << "Enter your password: \n";
  std::cin >> password;
```




<br>


## Vulnerability 10: 

### Description of vulnerabilities:


#### Not following DRY / best practices. No need to create a new output line for each client, clients should be stored in a data structure, and the data structure iterated through to output client list

- Not following DRY / best practices. No need to create a new output line for each client, clients should be stored in a data structure, and the data structure iterated through to output client list.
- Numerous duplications of the same statement for variables is not best coding practice.  We should always consolidate duplications such  as these into a object instances when necessary, and store the instances within an appropriate data structure. Having a large amount of named variables performing the same operations creates a code-base that is burdensome to navigate. These could very easily be contained within a single data structure and into class / object instances. We will implement a Client class to manage all of our individual clients. This will encapsulate their private personal data. We will then use a ClientList singleton class to manage all operations related to the client class. This instance will contain a static vector with all Clients added to it on their creation. To create a new Client object instance, call the addClient method of the ClientList class. Passing the addClient method a client name and service choice will automatically generate the next available clientId number, assign it to the client, and then add the new Client object to the vector of Clients. These classes will provide a modular interface to access the data and operations of the program through, and will do so in a way that can later allow the addition/integration of a graphical user interface.



### Affected code 10: 

```c++
void DisplayInfo() {

  std::cout
      << "  Client's Name    Service Selected (1 = Brokerage, 2 = Retirement)"
      << std::endl;
  std::cout << "1. " << name1 << " selected option " << num1 << std::endl;
  std::cout << "2. " << name2 << " selected option " << num2 << std::endl;
  std::cout << "3. " << name3 << " selected option " << num3 << std::endl;
  std::cout << "4. " << name4 << " selected option " << num4 << std::endl;
  std::cout << "5. " << name5 << " selected option " << num5 << std::endl;
}
```




<br>


## Vulnerability 11: 

### Description of vulnerabilities:

#### Again, it is bad coding practice to have this much duplicate code without an express need.

- Bad coding practice to have this much duplicate code. This is an extension of the previous code problem, `#10`. This is another area where code is being duplicated without the need to. This could very easily be contained within a class object, and a single accessor function that iterates over  a list of the objects. Best coding practices would not be to continue adding cases to a switch statement indefinitely. The application should be designed in a way that supports maintainability and stability. The values should be defined once, within the class object, and then if a matching object is found in the list of objects, the value can be modified. This way we are not rewriting the same code multiple times throughout the application, and it is easy to find and maintain into the future.

### Affected code 11: 

```c++
 switch (changechoice) {
  case 1:
    // set client 1's service to equal newservice
    num1 = newservice;
    break;
  case 2:
    // set client 2's service to equal newservice
    num2 = newservice;
    break;
  case 3:
    // set client 3's service to equal newservice
    num3 = newservice;
    break;
  case 4:
    // set client 4's service to equal newservice
    num4 = newservice;
    break;
  case 5:
```





<br>


## Vulnerability 12: 

### Description of vulnerabilities:

#### Use exception handling for reading inputs / for handling operation failures. Program currently will not handle invalid types etc in a graceful manner.


- It is not best, secure coding practices to allow inputs or operations within your program to cause an unexpected exception, or to result in the program failure / a crash. We should use exception blocks to account for all states that might allow the program to fail. If an operation fails and there is not exception handling in place it could cause undefined behavior and potentially expose vulnerable areas of the application. Branching should handle all expected edge-cases, and exception handling along with a robust logging system should catch the remaining errors.
- Exception handling will be used for reading input, and for attempting operations within the application that could fail.  The current program will not handle invalid type in a graceful manner, and there is no handling or checks for the process of assigning a new service value to a client. 

### Affected code 12: 

```c++
  std::cin >> newservice;
  std::cin >> changechoice;

  std::cin >> username;
  std::cin >> password;
```



<br>

## Vulnerability 13: 

### Description of vulnerabilities:

#### No input validation here, no sanitization of inputs, no exception handling.


### Affected code 13: 

```c++

  std::cout << "Enter the number of the client that you wish to change"
  std::cin >> changechoice;

  std::cout << "Please enter the client's new service choice (1 = Brokerage, 2 = Retirement)"
  std::cin >> newservice;
```




# Revised and Updated Code-Base without Vulnerabilities:

```
// Created by Edward Johnson 06/16/24
// SNHU - CS410 - Project 2

#include <cstdint>
#include <iostream>
#include <limits>
#include <stdexcept>
#include <string>
#include <utility>
#include <vector>
#include <openssl/evp.h>
#include <sstream>
#include <iomanip>

// FIXME: Comment for professor:
// password is the same as it was in non-secure (hard-coded) version "123"
// hash of the password is = "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
// see storedHash of authenticator class for more info. This is to be later replaced by salting + secure disk/DB storage of hashes.


/*
 **************************************************
 *     GENERAL FUNC. & CONSTANT DECLARATIONS
 **************************************************
 */

// Login / auth:
void Authentication();

// Setup / menu fns:
int32_t menuChoiceHandler();
void populateClientList();
void DisplayMenu();
void DisplayClients();

//Action fns:
void customerChoiceHandler();
int32_t selectValidClient();
int32_t selectValidService();

// Input fns:
int32_t getIntegerInput();
std::string getStringInput();
bool invalidInputChars(std::string& input);



// Control flow constants:
const int32_t DEFAULT_MENU_VALUE = -1;
const int32_t RETURN_PREV_MENU = 0;
const int32_t PRINT_CLIENT_LIST = 1;
const int32_t CHANGE_SERVICE_CHOICE = 2;
const int32_t EXIT_PROGRAM = 3;

const int32_t MENU_SERVICE_ONE = 1;
const int32_t MENU_SERVICE_TWO = 2;


// Authentication:
const int32_t VALID_AUTHENTICATION = 9269348;
const int32_t INVALID_AUTHENTICATION = 9237892;

const int32_t MAXIMUM_AUTH_ATTEMPTS = 5;
const int32_t NO_AUTH_ATTEMPTS = 0;



/*
 **************************************************
 *              CLIENT CLASS
 **************************************************
 * Classes created without cin/cout usage so they can be used with non-console interfaces
 * I would ideally separate classes into their own files/headers
 */

/**
 * Client class to protect/encapsulate client information
 */
class Client {
public:

    /**@constructor
     * automatically increments id # by +1 for new Clients, using nextValidId#.
     * move name str instead of copying from param (no need/more efficient when passing in a str)
     * @param - string - name of client
     * @param - int32_t - service client selected
     */
    Client(std::string clientName, int32_t clientService)
            : clientId(nextValidId++), clientName(std::move(clientName)),
              clientService(clientService) {}

    /**@setClientService
     * mutator / set method for clientService number selected
     * @param - int32_t - selected service for a client
     */
    void setClientService(int32_t serviceChoice) {
        this->clientService = serviceChoice;
    }

    /**
     * Getter method for clientName
     * @return: const int clientName
     */
    std::string getClientname() const { // use const as value will not change
        return this->clientName;
    }

    /**
     * Getter method for clientId number
     * @return: const int clientId
     */
    int32_t getClientId() const { // use const as value will not change
        return this->clientId;
    }

    /**
     * Getter method for clientService number selected
     * @return: const int clientService
     */
    int32_t getClientService() const { // use const as value will not change
        return this->clientService;
    }

private:
    int32_t clientId;
    std::string clientName;
    int32_t clientService;

    static int32_t
            nextValidId; // static value to track and assign an ID# to each client
};

// Starting value for id num's.
// creating a new Client object auto increments the value
int32_t Client::nextValidId = 1;



/*
 **************************************************
 *           CLIENTLIST CLASS
 **************************************************
 */

/**
 * Singleton ClientList class to encapsulate Client objects/data
 *
 */
class ClientList {
public:
    /**@getClientListInstance
     * Getter / retrieval method for our singleton ClientList object
     * @return: ClientList singleton containing added Clients
     */
    static ClientList &getClientListInstance() {
        static ClientList clientListInstance;    // static singleton clientList object
        return clientListInstance; // return our singleton list
    }

    /*
     * Reference used in this section:
     * https://stackoverflow.com/questions/1008019/how-do-you-implement-the-singleton-design-pattern
     * Deleting copy+copy assign, move+move assign constructors.
     */
    ClientList(const ClientList &) = delete;
    ClientList(ClientList &&) = delete;
    ClientList &operator=(const ClientList &) = delete;
    ClientList &operator=(ClientList &&) = delete;

    /**@getClientsList
     * Retrieval method for vector list of Client objects
     * @return: vector<Client> - clientList (vector of Client objects)
     */
    std::vector<Client> &getClientsList() {
        // return the vector containing Client Objects
        return clientsList;
    }

    /**@addToClientList
     * Inserts a Client object into the ClientList
     *  @param - const Client object - client object as a ref
     */
    void addToClientList(const Client &client) {
        // push Client object into the clientsList vector
        clientsList.push_back(client);
    }

    /**@newClient
     * Creates new client object, then adds to clientList
     *  @param - string - reference to name of client string
     *  @param - int32_t - selected service for the client instance
     */
    void newClient(const std::string &clientName, int clientService) {
        Client newClient = Client(clientName, clientService); // creates new Client object using args
        addToClientList(newClient); // call method to push new Client into existing list
    }

    /**@isClientIdValid
     * Method to check if user input for Client ID matches a Client object
     * @param - const int32_t - client id # input by user
     * @return: boolean isInputIDValid
     */
    bool isClientIdValid(const int32_t inputClientId) {
        bool isIdValid = false; // initialize bool to false
        // for each client object in the clientlist (use auto to determine class
        // object type)
        for (const auto &client : clientsList) {
            // if the current client object's id matches inputID
            if (client.getClientId() == inputClientId) {
                // the input ID is valid
                isIdValid = true;
            }
        }
        return isIdValid; // return the id number validity state
    }


private:
    ClientList() {}  // private constructor to limit # of lists to 1
    ~ClientList()= default; // prevent accidental deletion of singleton

    std::vector<Client> clientsList; // vector list to hold our Client objects
};


/*
 **************************************************
 *           AUTHENTICATOR CLASS
 **************************************************
 */
/**
 * Authenticator class to encapsulate and validate user login
 * Still needs salting + a longterm storage method for password hashes
 * to pair passw with usernames add map + add username to relevant fns
 * Would need account auth status + thread safety implemented also
 *
 * Started off using old openSSH implementation but wouldn't work / was depreciated:
 * https://stackoverflow.com/questions/13784434/how-to-use-openssls-sha256-functions
 *
 * Needed to use these sources to create working hash fn:
 * https://wiki.openssl.org/index.php/EVP_Symmetric_Encryption_and_Decryption
 * https://www.openssl.org/docs/man1.0.2/man3/EVP_sha256.html
 * https://linux.die.net/man/3/evp_sha256
 * https://cpp.hotexamples.com/examples/-/-/EVP_DigestInit/cpp-evp_digestinit-function-examples.html
 */
class Authenticator{
private:
    int32_t authStatus = INVALID_AUTHENTICATION; // set base auth state
    int32_t authAttempts = NO_AUTH_ATTEMPTS; // set base auth attempts

    // this would typically be in a sep. class that handles pulling data from db / storage
    // this is the same value as the initial program's password, but as a hash
    std::string storedHash = "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"; // the stored password hash

    /**@constructor - private
     *
     */
    Authenticator(){}

    ~Authenticator()= default; // private destructor

    /**@hashFunction
    * hash function to take input string / pass and hash it
    * @param - const string - reference to the password string
    * @return: string - hashed password after processing
    */
    std::string hashFunction(const std::string& pass) const {
        unsigned char hash[EVP_MAX_MD_SIZE];
        unsigned int lengthOfHash = 0;

        EVP_MD_CTX *context = EVP_MD_CTX_new();

        // EVP_MD_CTX_new operation failed, context = nullptr
        if (context == nullptr) {
            throw std::runtime_error("Failure calling EVP_MD_CTX_new. Returned null.");
        }

        const EVP_MD* md = EVP_get_digestbyname("sha256"); //setting hash method

        if (md == nullptr){
            EVP_MD_CTX_free(context);
            throw std::runtime_error("Failure calling EVP_get_digestbyname. Returned null.");
        }

        // Initialise encryption operation. Uses sha256.
        if (EVP_DigestInit_ex(context, md, nullptr) != 1){
            EVP_MD_CTX_free(context);
            throw std::runtime_error("Failure calling EVP_DigestInit_ex. Returned null.");
        }
        // Provide the message to be encrypted, obtain encrypted output.
        if (EVP_DigestUpdate(context, pass.c_str(), pass.size()) != 1){
            EVP_MD_CTX_free(context);
            throw std::runtime_error("Failure calling EVP_DigestUpdate.");
        }
        // Finalize encryption.
        if (EVP_DigestFinal_ex(context, hash, &lengthOfHash) != 1){
            EVP_MD_CTX_free(context);
            throw std::runtime_error("Failure calling EVP_DigestFinal_ex.");
        }

        EVP_MD_CTX_free(context); // clean up

        std::stringstream ss;
        for (unsigned int i = 0; i < lengthOfHash; i++){
            ss << std::hex << std::setw(2) << std::setfill('0') << static_cast<int>(hash[i]);
        }
        return ss.str();
    }


    /**@setAuthStatus
     * to update authStatus if user provides correct credentials
     * @param - const int32_t - status of authentication for program
     */
    void setAuthStatus(int32_t const status){
        authStatus = status;
    }

    /**@constantCompareTime
     * Compares hashed input pass against stored hash using constant time O(1)
     * To help avoid timing comparison attacks
     * @param - const string - first string to compare
     * @param - const string - second string to compare
     * @return - bool - false if strings not equal, true if equal
     */
    bool constantCompareTime(const std:: string& x, const std::string& y) const{
        if (x.length() != y.length()) {
            return false;
        }
        unsigned char answer = 0;
        for (size_t i = 0; i < x.length(); i++){
            // if char x[i] and y[i] same, XOR = 0, not equal returns a non-zero value
            // |= (OR) operator changes value of answer if any of the char comparisons are different
            answer |= (x[i] ^ y[i]);
        }
        // answer after looping will be non-zero if any chars were different
        // if answer is not 0, then we return false
        // if strings equal, answer is still 0 so we return true
        return answer == 0;

    }

    /**@setPasswordHash
     * Sets the storedHash value to be the hash of our password
     * Moved to private to prevent use after sys setup.
     * Can be integrated into instanced user account / password creation.
     * @param - const string - reference to the hashed password string
     */
    void setPasswordHash(const std::string& passHash){
        storedHash = passHash;
    }
    /**@outputPassHash
     * Used in initial creation of a password hash
     * if called outputs hash of string arg to console
     * @param - const string - ref to password string
     */
    void outputPassHash(const std::string& pass) const {
        std::cout << "Hash:" << hashFunction(pass) <<std::endl;
    }

public:
    /*
     * Deletes copy+copy assign & move+move assign constructors.
     */
    Authenticator(const Authenticator &) = delete;
    Authenticator(Authenticator &&) = delete;
    Authenticator &operator=(const Authenticator &) = delete;
    Authenticator &operator=(Authenticator &&) = delete;

    /**@getInstance
     * Getter / retrieval method for our singleton authenticator class instance
     * @return: Authenticator - singleton instance of authenticator class
     */
    static Authenticator& getInstance(){
        static Authenticator authInstance;
        return authInstance;
    }

    /**@authenticate
     * Checks the hashed input password against our stored / disk password hash
     * @param - const string - ref to input password string
     * @return: boolean - isPasswordValid?
     */
    bool authenticate(const std::string& pass) {
        authAttempts++; // increment attempts for each time auth is called
        if (constantCompareTime(storedHash, hashFunction(pass))){
            setAuthStatus(VALID_AUTHENTICATION); // sets auth status to valid
            authAttempts = NO_AUTH_ATTEMPTS; // reset auth attempts to 0 on success
            return true;
        }
        setAuthStatus(INVALID_AUTHENTICATION); // sets auth status to invalid
        return false;
    }

    /**@getAuthAttempts
     * Getter / retrieval method for amount of auth attempts made
     * @return: Authenticator - singleton instance of authenticator class
     */
    int32_t getAuthAttempts() const{
        return authAttempts;
    }

    /**@getAuthStatus
     * Getter / retrieval method for state of authStatus
     * @return: Authenticator - singleton instance of authenticator class
     */
    int32_t getAuthStatus() const{
        return authStatus;
    }

};


/*
 **************************************************
 *           MAIN METHOD
 **************************************************
 */
int main() {


    Authenticator& authInstance = Authenticator::getInstance();

    std::cout << "Edward Johnson - SNHU - CS410: Project 2\n";
    std::cout << "Hello! Welcome to our Investment Company\n";

    // generates Client objects using current  client data
    populateClientList(); // this will be replaced by DB / disk storage of client data

    int32_t choice = 0; // user menu choice / selection

    // Authentication looping:
    do{
        Authentication(); // call program authentication handler
        // continue authentication while invalid status & auth attempts less than max attepts
    } while (authInstance.getAuthStatus() == INVALID_AUTHENTICATION &&
             authInstance.getAuthAttempts() < MAXIMUM_AUTH_ATTEMPTS);

    // Main program loop:
    // if MAXIMUM_AUTH_ATTEMPTS reached, or EXIT_PROGRAM selected, ends the program main loop
    while (choice != EXIT_PROGRAM && authInstance.getAuthAttempts() < MAXIMUM_AUTH_ATTEMPTS){
        choice = menuChoiceHandler(); // call main menu handler
    }
    return 0;
}

/** @menuChoiceHandler
 * handles main menu selections & actions
 * @return int32_t - the selected menu choice
 */
int32_t menuChoiceHandler(){

    int32_t choice = DEFAULT_MENU_VALUE; // the menu selection

    // Updated to use single call to DisplayMenu function
    DisplayMenu();

    choice = getIntegerInput();    // get new menu selection / choice.

    // main menu switch uses constants instead of magic numbers
    switch (choice) {
        case PRINT_CLIENT_LIST:
            std::cout << "You chose option: " << choice << std::endl;
            DisplayClients();
            break;
        case CHANGE_SERVICE_CHOICE:
            std::cout << "You chose option: " << choice << std::endl;
            customerChoiceHandler();
            break;
        case EXIT_PROGRAM:
            std::cout << "Goodbye." << choice << std::endl;
            break;
        default:
            std::cout << "Select a valid menu option." << std::endl;
            break;
    }
    return choice;
}


/** @Authentication
 * authenticates user login session
 * sets authenticator object instance value to valid when successful
 */
void Authentication(){
    // this gets instance of auth api, could reference a db / stored account pass hashes
    Authenticator& authInstance = Authenticator::getInstance();

    // local var memory is freed before function return
    std::string username = "";
    // local var memory is freed before function return
    std::string password = "";

    std::cout << "Enter your username: \n";
    username = getStringInput();

    std::cout << "Enter your password: \n";
    password = getStringInput();

    // for initially getting hash to use as password
    // authInstance.outputPassHash(password);

    // call authentication method of auth class w/ password input
    authInstance.authenticate(password);

    // uses constants instead of magic numbers
    if (authInstance.getAuthStatus() == INVALID_AUTHENTICATION){
        std::cout << "Invalid Password. Please try again" << std::endl;
        std::cout << "You have " << MAXIMUM_AUTH_ATTEMPTS - authInstance.getAuthAttempts();
        std::cout << " attempts remaining." << std::endl;
    }
}


/** @customerChoiceHandler
 *  handles selection of clients, and service changes
 */
void customerChoiceHandler() {
    bool returnToMenu = false;
    // retrieve reference to the singleton ClientList instance
    ClientList &clientsInstance = ClientList::getClientListInstance();
    // use auto type, retrieve reference to our vector of Clients objects
    auto &clientsList = clientsInstance.getClientsList();

    int32_t clientChoice = DEFAULT_MENU_VALUE; // initialize value for client to change
    int32_t newService = DEFAULT_MENU_VALUE;   // initialize value for new service choice
    clientChoice = selectValidClient(); // set client selected to return from selectValidClient
    if (clientChoice == RETURN_PREV_MENU){
        // end function looping
        returnToMenu = true;
    } else { // when clientChoice isn't 0 (return to main menu)

        // get input for updated service from selectValidService
        newService = selectValidService();

        // if return to main menu selected
        if (newService == RETURN_PREV_MENU) {
            // end function looping
            returnToMenu = true;
        }
    }
    // to prevent out of bounds if 0 given for either selection, skip + return to prev menu
    if (clientChoice != RETURN_PREV_MENU && newService != RETURN_PREV_MENU) {

        try { // attempt to change the service of a client Object
            // modify the service of selected client to updated value
            // use clientchoice-1 because index starts at 1 ! 0
            clientsList.at(clientChoice - 1).setClientService(newService);

        } catch (const std::out_of_range &except) { // if exception occurs (client id out of range)
            std::cerr << "An exception occurred while updating service for client ID: ";
            std::cerr << clientChoice << std::endl;
            std::cerr << except.what() << std::endl;
        }
    }
}

/** @selectValidClient
 * Validates user inputs for clientIds, only allows matching clientId values
 * @return clientId - the valid clientId to use
 */
int32_t selectValidClient() {
    int32_t clientId = DEFAULT_MENU_VALUE; // initialize client selected to -1
    bool doneLooping = false;
    // retrieve reference to the singleton ClientList instance
    ClientList &clientsInstance = ClientList::getClientListInstance();

    // while entered client ID is not valid continue looping
    while (!doneLooping) {
        std::cout << "\nEnter the number of the client that you wish to change" << std::endl;
        std::cout << "Or enter 0 to return to previous menu." << std::endl;
        clientId = getIntegerInput(); // get a valid integer input

        // if input = RETURN_PREV_MENU , or matching id found / client
        if (clientId == RETURN_PREV_MENU || clientsInstance.isClientIdValid(clientId)) {
            doneLooping = true;
        }else {
            std::cout << "Matching Client ID was not found. Try again." << std::endl;
        }
    }
    return clientId;
}

/** @selectValidService
 * Modifies and validates Client service selections
 * @return selectedService - the updated client service selection
 */
int32_t selectValidService() {
    int32_t selectedService = DEFAULT_MENU_VALUE; // initialize service variable to -1

    // while input is not 0, 1 or 2, continue looping
    while(selectedService != MENU_SERVICE_ONE && selectedService != MENU_SERVICE_TWO && selectedService != RETURN_PREV_MENU){
        std::cout << "Please enter the client's new service choice (1 = Brokerage, 2 = Retirement)" << std::endl;
        std::cout << "Enter 0 to return to previous menu." << std::endl;

        // get an input integer for service selection
        selectedService = getIntegerInput();
        if (selectedService != MENU_SERVICE_ONE && selectedService != MENU_SERVICE_TWO && selectedService != RETURN_PREV_MENU) {
            std::cout << "Valid options are: 0, 1, or 2. Please enter a valid selection." << std::endl;
        }
    }
    return selectedService;
}

/** @getIntegerInput
 * Provides general integer input validation
 * This is our primary way to provide enhanced input security.
 * Prevent xss by only allowing valid inputs.
 *
 * @return int32_t userInput
 */
int32_t getIntegerInput() {
    int64_t userInput = DEFAULT_MENU_VALUE;
    bool doneLooping = false;

    while (!doneLooping) {
        // checks that input integer is within the range of values for a 32bit integer, and that cin is successful
        if (std::cin >> userInput && (userInput >= std::numeric_limits<int32_t>::min() + 1) && (userInput <= std::numeric_limits<int32_t>::max() - 1)) {
            doneLooping = true;
        }
        else {      // if cin fails / is not a valid int
            std::cin.clear(); // clear any cin errors
            std::cin.ignore(std::numeric_limits<std::streamsize>::max(),
                            '\n'); // clear out input buffer
            std::cout << "\nYou must enter a valid integer." << std::endl;
        }
    }
    // cast the integer back to 32bit once confirmed valid
    return static_cast<int32_t>(userInput);
}


/** @getStringInput
 * Provides general string input validation
 * Primary way to provide enhanced input security.
 * Prevent xss by only allowing valid inputs.
 * @return string userInput
 */
std::string getStringInput() {
    std::string userInput = "";
    bool doneLooping = false;
    while (!doneLooping) {
        // if input is valid
        if (std::getline(std::cin, userInput)) {

            // if invalidInputChars returns true OR userInput is emtpy
            if (invalidInputChars(userInput) || userInput.empty()){
                std::cout << "Not a valid input attempt." << std::endl;
                std::cout << "Inputs cannot contain the following characters: ";
                std::cout << R"( \ ! $ @ ( ) % ^ # * & < > / "\ , . | ; ~ ` : ' )" << std::endl;

            } else if(userInput.length() > 12) { // if input length is greater than 12 characters
                std::cout << "Not a valid input attempt." << std::endl;
                std::cout << "Input length cannot exceed 12 characters. Please try again." << std::endl;
            }else { // otherwise return the string
                doneLooping = true;
            }
        } else {   // if cin fails / is not a valid string
            std::cin.clear(); // clear any cin errors
            std::cin.ignore(std::numeric_limits<std::streamsize>::max(),
                            '\n'); // clear out input buffer
            std::cout << "Not a valid input attempt." << std::endl;
            std::cout << "You must enter a valid string." << std::endl;
        }
    }
    return userInput;
}

/** @invalidInputChars
 * Detects if a string contains bad characters
 * returns true if bad chars detected, false for not
 * @param - string - user input string
 * @return boolean true/false - is string valid
 */
bool invalidInputChars(std::string& input){
    const std::string invalidCharacters = R"(\!$@()#%^&*<>/"\,.|;~`:' )";
    // https://cplusplus.com/reference/string/string/find_first_of/
    // use findfirstof to search for invalid chars in our username / password.
    // return true / false if invalid chars were found in string arg
    return input.find_first_of(invalidCharacters) != std::string::npos;
}

/** @DisplayMenu
 * Outputs the main menu for program
 */
void DisplayMenu() {
    std::cout << "\nWhat would you like to do?\n";
    std::cout << "DISPLAY the client list (enter 1)\n";
    std::cout << "CHANGE a client's choice (enter 2)\n";
    std::cout << "Exit the program.. (enter 3)\n";
}

/** @DisplayClients
* Display method. Iterate through list of Client objects, outputting each.
*/
void DisplayClients() { // use const as value will not change
    // initialize/retrieve reference to the singleton ClientList instance
    ClientList &clients = ClientList::getClientListInstance();
    // use auto type, retrieve reference to our vector of Clients objects
    auto &clientsList = clients.getClientsList();
    std::cout << "\nID# | Client's Name | Service Selected (1 = Brokerage, 2 = Retirement)" << std::endl;
    std::cout << "¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯" << std::endl;

    // for each client object in the clientlist (use auto to determine class object type)
    for (const auto &client : clientsList) {
        // output the details of the client object
        std::cout << client.getClientId() << ".  | ";
        std::cout << client.getClientname();
        std::cout << "   selected option " << client.getClientService() << std::endl;
    }
}

/** @populateClientList
* creates Client objects using the provided client names / selected services
* would be done using a file / database in future iterations
*
*/
void populateClientList(){
    // initialize/retrieve reference to the singleton ClientList instance
    ClientList &clients = ClientList::getClientListInstance();

    // creates our initial Client objects
    // accepts a client name and service selected
    // adds each client to the singleton list
    clients.newClient("Bob Jones  ", 1);
    clients.newClient("Sarah Davis", 2);
    clients.newClient("Amy Friendly", 1);
    clients.newClient("Johnny Smith", 1);
    clients.newClient("Carol Spears", 2);

}
```















## Sources:
	

###  Timing Attacks:
- https://www.chosenplaintext.ca/articles/beginners-guide-constant-time-cryptography.html
- https://timing.attacks.cr.yp.to/index.html
- https://stackoverflow.com/questions/8768469/guessing-a-string-with-time-comparison-is-it-possible


