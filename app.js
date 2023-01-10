console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers = [2, 22, 12, 17, 18, 39, 129];
let sum = 0;
// numbers.forEach((number) => {
//   sum += number;
//   console.log(number + sum);
//   return sum;
// });

function arraySum(num) {
  console.log(num);
  for (i = 0; i < num.length; i++) {
    sum = sum + num[i];
  }
  return sum;
}
console.log(arraySum(numbers));
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
const book = {};
book.title = "Harry Potter";
book.pages = 250;
book.readCount = 3;
book.info = function () {
  return `${this.title} by J.K. Rowling, ${this.pages} pages, read: ${this.readCount} times`;
};
console.log(book.info());
//Exercise 3
let sentence = "The quick brown fox jumps over the lazy dog";
const words = sentence.split(" ");
let result = [];
for (let i = 0; i < words.length; i++) {
  //iterating here
  let letters = words[i].split("");
  const lettersReversed = letters.reverse();
  const lettersJoined = lettersReversed.join("");
  result.push(lettersJoined);
}
const finalSentence = result.join(" ");
console.log(finalSentence);
// function reverseStr(str) {
//   let newStr = [];
//   let results = str.split("").reverse().join("");
//   return newStr.push(results);
// }
// console.log(reverseStr(sentence));

// Exercise 4
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
console.log(csvData);

const rows = csvData.split("\n");
console.log(rows);

const headers = rows[0].split(",");
console.log(headers);

const resultsArray = [];
for (let i = 1; i < rows.length; i++) {
  const valuesArray = rows[i].split(",");
  console.log(valuesArray);

  const dataObject = {
    name: valuesArray[0],
    age: valuesArray[1],
  };
  resultsArray.push(dataObject);
}
console.log(resultsArray);
