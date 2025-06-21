## Output
![Screenshot 2025-06-21 122858](https://github.com/user-attachments/assets/dec5fe12-acb5-43f7-81c5-6e17cbf0c805)

# SingletonPatternExample

## Exercise 1: Implementing the Singleton Pattern

### Scenario:
Ensure that a logging utility class (`Logger`) in the application has only one instance throughout the application lifecycle to maintain consistent logging.

### Steps:

1. **Create a New Java Project**  
   - Project Name: `SingletonPatternExample`

2. **Define a Singleton Class**  
   - Created a class named `Logger`  
   - Added a private static instance of the class  
   - Made the constructor private  
   - Provided a public static method to return the single instance

3. **Implement the Singleton Pattern**  
   - Implemented lazy initialization for creating the single instance

4. **Test the Singleton Implementation**  
   - Created a test class `SingletonTest`  
   - Verified that only one instance of `Logger` is created and used throughout the application


