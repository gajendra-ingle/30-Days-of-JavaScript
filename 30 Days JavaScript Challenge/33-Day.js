const createString = (inputString, variable) => {
    // use template literals to create a new string with the input string and variable
    return `${inputString} ${variable}`;
  };
  
  // testing the function
  console.log(createString("My name is", "Gajendra")); // expected output: 'My name is Gajendra'
  console.log(createString("Hello", "world!")); // expected output: 'Hello world!'
  console.log(createString("The value is:", 123)); // expected output: 'The value is: 123'