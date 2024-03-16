function getPropertyValues(arr, propName) {
    // Using Array.map() method to get the values of the specified property
    const values = arr.map((obj) => obj[propName]);
  
    return values;
  }
  
  // Test cases
  const people = [
    { name: "Gajendra", age: 23, gender: "male" },
    { name: "Nidhi", age: 21, gender: "female" },
    { name: "Dimple", age: 21, gender: "female" },
  ];
  
  console.log(getPropertyValues(people, "name")); // ["Gajendra", "Nidhi", "Dimple"]
  console.log(getPropertyValues(people, "age")); //  [23, 21, 21]
  console.log(getPropertyValues(people, "gender")); // ["male", "female", "femalefemale"]
  console.log(getPropertyValues(people, "address")); // [undefined, undefined, undefined]