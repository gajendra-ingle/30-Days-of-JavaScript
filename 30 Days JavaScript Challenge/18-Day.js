function getKeys(obj) {
    // Using Object.keys() method to get all the keys in the object
    const keys = Object.keys(obj);
  
    return keys;
  }
  
  // Test cases
  const person = {
    name: "Gajendra",
    age: 23,
    gender: "male",
    city: "Buldhana",
  };
  
  console.log(getKeys(person)); // ["name", "age", "gender", "city"]
  console.log(getKeys({})); // []