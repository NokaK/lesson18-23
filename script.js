// let numbers = [1, 2, 3, 4, 5];

// let sum = 0;
// for (let index = 0; index < numbers.length; index++) {
//   const element = numbers[index];
//   sum = sum + element;
// }

// console.log(sum);

// for (let i = 0; i < numbers.length; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i < 50) {
//   console.log(index);
//   i++;
// }

// let newNumbers = [];
// do {
//   console.log(index);
//   i++;
//   newNumbers.push(i * i);
// } while (i < 50);

let a = 5;
let b = 10;
let c = a + b;

let d = 5;
let e = 10;
let f = d + e;

//1
function getSum(a = 5, b) {
  // პარამეტრი

  var c = a + b;
  var multi = c + a * b;
  return multi;
}

const firstSum = getSum(4); // არგუმენტი
const secondSum = getSum(10, 20);
const thirdSUm = getSum(50, 60);

console.log(firstSum, secondSum, thirdSUm);

//2
const getSum2 = function (a, b) {
  return a + b;
};
getSum2(3, 4);

//3
const getSum3 = (a, b) => a + b;

getSum3(5, 7);

function firstFunction(text) {
  console.log("first function");
  var x = 5;

  function thirdFunction(text) {
    console.log("third function", a);
  }

  thirdFunction("hello1");
}

var x = 50;

firstFunction("hello");
function secondFunction() {
  console.log("second function");
}
secondFunction();

function defineNumberType(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    let multiply = number * number;

    return multiply;
  }
}

console.log(defineNumberType(5));
console.log(defineNumberType(10));

function getTextToLowerCase(text) {
  const lowerCaseText = text.toLowerCase() + " world";
  return lowerCaseText;
}
const firstName = getTextToLowerCase("Ana");
const lastName = getTextToLowerCase("Kobaxidze");
const fullName = firstName + lastName;

function getArraySum(numbers) {
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    sum = sum + element;
  }
  return sum;
}

const numbersArray = [1, 2, 3, 4, 5];
getArraySum(numbersArray);
getArraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
getArraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100]);
getArraySum([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 3408, 344646, 345345345, 345345345,
]);

console.log(
  getArraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 3408, 344646, 345345345])
);

function filterOddNumbers(numbers) {
  let oddNumbers = [];
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 !== 0) {
      oddNumbers.push(element);
    }
  }
  return oddNumbers;
}

console.log(filterOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

const filterNumbers = numbersArray.filter((number) => {
  return number % 2 !== 0;
});

const persons = [
  {
    name: "Ana",
    age: 19,
  },
  {
    name: "Beka",
    age: 30,
  },
  {
    name: "Nika",
    age: 50,
  },
];

const filterByAge = persons.filter(
  (person) => person.age > 18 && person.age < 45
);
const filterByName = persons.filter((person) => person.name.length > 3);
const addIsMarriedKey = persons.map((person) => {
  person.isMarried = true;
  return person;
});

console.log(addIsMarriedKey);
// if (findPerson) {
//   console.log("person is  found", findPerson);
// }
