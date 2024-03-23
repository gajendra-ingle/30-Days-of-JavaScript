function myFunction(num) {
    if (typeof num !== "number") {
      throw new Error("Parameter must be a number");
    }
  
    return num * 2;
  }
  
  try {
    const result = myFunction("hello");
    console.log(result);
  } catch (error) {
    console.log("Error caught:", error.message); // Output: "Error caught: Parameter must be a number".
  }