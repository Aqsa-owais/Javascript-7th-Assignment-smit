// 1. Write a function that uses both var, let, and const to create three variables
// with different scoping. Use a template literal to return a string explaining the
// scopes of each variable. Test this function and print the result.

function createVariableScopes() {
  var globalVar = "This variable is accessible from anywhere.";
  let localVar = "This variable is accessible only within this function.";
  const constantVar = "This variable cannot be reassigned.";

  return `
    Global variable: ${globalVar}
    Local variable: ${localVar}
    Constant variable: ${constantVar}
    `;
}

console.log(createVariableScopes()); // Output:...

// 2. Create a function called createMultiplier that takes a single parameter
// multiplier. This function should return another function that takes a number
// as input and returns that number multiplied by the original multiplier.
// Demonstrate this closure by creating functions like double and triple using
// createMultiplier and calling them with different numbers.

function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);

console.log(double(5)); // Output: 10

const triple = createMultiplier(3);

console.log(triple(5)); // Output: 15

// 3. Create a function that accepts an object with properties name, age, country,
// and city. Destructure these properties in the function parameters and set
// default values for country and city. The function should return a string using
// the destructured values with template literals.

function createPersonInfo({ name = "John Doe", age, country = "USA", city }) {
  return `Name: ${name}, Age: ${age}, Country: ${country}, City: ${city}`;
}

console.log(createPersonInfo({ age: 30 })); // Output: Name: John Doe, Age: 30, Country: USA, City: undefined

console.log(createPersonInfo({ age: 30, city: "New York" })); // Output: Name: John Doe, Age: 30, Country: USA, City: New York

// 4. Write a function called calculateTotal that takes a price and a variable
// number of discounts as arguments (use rest parameters). Subtract each discount
// from the price using the spread operator and return the final discounted price.

function calculateTotal(price, ...discounts) {
  return discounts.reduce(
    (total, discount) => total - (total * discount) / 100,
    price
  );
}

console.log(calculateTotal(100, 10, 5)); // Output: 75

// 5. Create an object calculator that has two methods: add and subtract. Use
// enhanced object literals and arrow functions to define these methods. Each
// method should take two numbers and return the result. Test these methods by
// calling them with different numbers.

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};

console.log(calculator.subtract(10, 5)); // Output: 5
console.log(calculator.add(5, 3)); // Output: 8

// 6. Create an array of objects representing books with properties title, author,
// and yearPublished. Write a function that uses a for..of loop to iterate over
// this array and logs each book's information in a formatted string.

const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960 },
  { title: "1984", author: "George Orwell", yearPublished: 1949 },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
  },
];

function logBookInfo(books) {
  for (const book of books) {
    console.log(
      `Title: ${book.title}, Author: ${book.author}, Year Published: ${book.yearPublished}`
    );
  }
}

logBookInfo(books); // Output:...

// 7. Write a generator function called idGenerator that generates unique IDs
// starting from 1. Call this generator multiple times to get unique IDs and print
// them.

function* idGenerator() {
  let id = 1;

  while (true) {
    yield id++;
  }
}

const idGen = idGenerator();

console.log(idGen.next().value); // Output: 1
console.log(idGen.next().value); // Output: 2
console.log(idGen.next().value); // Output: 3

// 8. Create a module named mathOperations.js with functions for basic math
// operations (add, subtract, multiply, and divide).Import these functions
// into a new file app.js, and use them to perform calculations. Log each result.

// mathOperations.js

// function add(a, b) {
//   return a + b;
// }
// function subtract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }
// function divide(a, b) {
//   if (b === 0) {
//     throw new Error("Division by zero is not allowed.");
//   }
//   return a / b;
// }

// export { add, subtract, multiply, divide };

// 9. Create an object student with properties name, age, grade, and subjects
// (an array of subjects). Use a for..in loop to iterate over the properties of the
// object and log each property and its value.

const student = {
  name: "John Doe",
  age: 18,
  grade: "10th",
  subjects: ["Math", "Science", "English"],
};

for (const property in student) {
  console.log(`${property}: ${student[property]}`);
} // Output

// 10.Given an array of numbers, use the map method to create a new array where
// each element is the square of the original array elements. Print both the original
// and the modified array. let numbers = [1, 2, 3, 4];

const numbers = [1, 2, 3, 4];

const squaredNumbers = numbers.map((number) => number ** 2);

console.log("Original Array:", numbers);

console.log("Modified Array:", squaredNumbers); // Output

// 11. Write a function operate that takes two numbers and a callback function as
// arguments. The callback will perform a mathematical operation (e.g., addition,
// subtraction) on the two numbers. Define separate functions for addition and
// subtraction, and pass them as callbacks to operate.

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function operate(a, b, callback) {
  return callback(a, b);
}

console.log(operate(5, 3, add)); // Output: 8

console.log(operate(5, 3, subtract)); // Output: 2

// 12.Use setTimeout to create a function that prints "Hello, World!" after a delay of 3
// seconds.

setTimeout(() => {
  console.log("Hello, World!");
}, 3000);

// 13.Use setInterval to create a function that logs the current time every 2
// seconds. After 10 seconds, clear the interval.

let intervalId = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 2000);

setTimeout(() => {
  clearInterval(intervalId);
}, 10000);

// 14.Create a function fetchData that returns a promise. Inside the function, use
// setTimeout to simulate a network request that resolves with a message ("Data
// received!") after 2 seconds. Then, call fetchData and handle the response with
// .then() and .catch().

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received!");
    }, 2000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
// Output: Data received!

//  15.Rewrite the fetchData function (from Question 5) using async and await.
// Call this new function and log the result.

async function fetchDataAsync() {
    try {
      const url = ""; 
      const response = await fetch(url);
  
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data); 
    } catch (error) {
    //   console.error("Error fetching data:", error);
    }
  }
  
  fetchDataAsync();
  
  
  
// 16.Write a function that accepts two parameters, base and exponent, and uses
// the exponentiation operator (**) to calculate and return the result. Test this
// function with different values.

function calculateExponent(base, exponent) {
  return base ** exponent;
}

console.log(calculateExponent(2, 3)); // Output: 8

console.log(calculateExponent(5, 2)); // Output: 25

// 17.Define a class Animal with a constructor that accepts name and species. Add
// a method speak that logs a message like "Dog says Woof!" Create instances of
// this class with different animals and call the speak method for each.

// Define the Animal class
class Animal {
  constructor(name, species) {
    this.name = name; // Name of the animal
    this.species = species; // Species of the animal
  }

  // Define the speak method
  speak() {
    if (this.species === "Dog") {
      console.log(`${this.name} says Woof!`);
    } else if (this.species === "Cat") {
      console.log(`${this.name} says Meow!`);
    } else if (this.species === "Cow") {
      console.log(`${this.name} says Moo!`);
    } else {
      console.log(`${this.name} makes a sound.`);
    }
  }
}

// Create instances of the Animal class
const dog = new Animal("Buddy", "Dog");
const cat = new Animal("Whiskers", "Cat");
const cow = new Animal("Daisy", "Cow");
const bird = new Animal("Tweety", "Bird");

// Call the speak method for each instance
dog.speak(); // Output: Buddy says Woof!
cat.speak(); // Output: Whiskers says Meow!
cow.speak(); // Output: Daisy says Moo!
bird.speak(); // Output: Tweety makes a sound.

// 18.Create a function that checks if a number is even or odd using the ternary
// operator. The function should return "Even" if the number is even and "Odd" if it
// is odd. Test the function with various numbers.

function checkEvenOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(checkEvenOdd(5)); // Output: Odd

console.log(checkEvenOdd(8)); // Output: Even

// 19.Create an object user with a nested object address. The address object
// should have a property city. Write a function to safely log the city name using
// optional chaining, even if the address or city properties do not exist.

const user = {
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
};

function logCityName(user) {
  console.log(user?.address?.city);
}

logCityName(user); // Output: New York
