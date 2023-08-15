//Problem 1: Create a function sumOrDouble(num1, num2) 
//that takes two numbers and returns their sum, but if
// the numbers are the same, return double their sum.
//answer 1

function sumOrDouble(num1, num2) {
    if (num1 === num2) {
      return 2 * (num1 + num2);
    } else {
      return num1 + num2;
    }
  }

  //Problem 2: Write a function reverseString(stringToReverese)
  // that takes a string as input and returns the reverse 
  //of the string in lowercase letters (Hint: Learn about
  // string.split(), string.join(), string.toLowerCase(), and
  // array.reverse() built-in methods before you start)
//answer 2


  function reverseString(stringToReverse) {
   var characters = stringToReverse.split('');
   characters.reverse();
    var reversedString = characters.join('');
   reversedString = reversedString.toLowerCase();
   return reversedString;
  }
  var inputString = "Hello World!";
  var reversedString = reverseString(inputString);
  console.log(reversedString);  

  // problem 3:Create a function sumEvenNumbers(numArr) that takes an 
  //array of numbers and returns the sum of only the even 
  //numbers in the array, (Hint: Learn what modulus operator 
  //% does before you start)
  //answer 3

  function sumEvenNumbers(numArr) {
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] % 2 === 0) { 
         sum += numArr[i]; 
      }
    }
    return sum;
  }

  const numbers = [1, 2, 3, 4, 5, 6];
const evenSum = sumEvenNumbers(numbers);
console.log(evenSum);

//problem 4: Write a function longStrings(fruitsArr) that takes an array
// of strings/fruits and returns a new array containing only
// the strings/fruits that have more than 5 characters 
// answer 4

function longStrings(fruitsArr) {
    return fruitsArr.filter(fruit => fruit.length > 5);
  }
  const fruits = ['apple', 'banana', 'kiwi', 'orange', 'strawberry'];
  const longFruits = longStrings(fruits);
  console.log(longFruits);

//Problem 5: Write a function filterStudents(students, age) 
//that takes an array of objects and age and returns a new array
// containing only the student objects whose age matches the
// age argument passed.
// answer 5

function filterStudents(students, age) {
    return students.filter(student => student.age === age);
  }
  const students = [
    { name: "John", age: 20 },
    { name: "Jane", age: 22 },
    { name: "Mike", age: 20 },
    { name: "Emily", age: 21 },
  ];
  const filteredStudents = filterStudents(students, 20);
  console.log(filteredStudents);
  

  //Problem 6: Create a function findMinMax(arr) that takes
  // an array of numbers and returns the highest and lowest
  // numbers in the array as an object(Hint: Learn about Math.Max()
  // and (…) spread operator before you start)
  // answer 6

  function findMinMax(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    
    return {
      highest: max,
      lowest: min
    };
  }
  const digits = [4, 2, 9, 1, 5, 7];
  const result = findMinMax(digits);
  console.log(result);

  //Problem 7: Create a function uniqueStrings(duplicateStringArr) 
  //that takes an array of strings and returns a new array 
  //containing the unique strings (i.e. no duplicates) 
  //(Hint: You can use array.find() method to search for duplicates,
  // learn what it does before you start)
// answer 7

function uniqueStrings(duplicateStringArr) {
    let uniqueArr = [];
    duplicateStringArr.forEach((string) => {
      if (!uniqueArr.includes(string)) {
        uniqueArr.push(string);
      }
    });
    return uniqueArr;
  }
  const duplicateStrings = ['apple', 'banana', 'apple', 'orange', 'banana', 'kiwi'];
  const uniqueStringsArr = uniqueStrings(duplicateStrings);
  console.log(uniqueStringsArr);