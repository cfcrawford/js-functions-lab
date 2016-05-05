// Question 1
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  }
  else {
    return b;
  }
}

// Question 2
function maxOfThree(x, y, z) {
    result = Math.max(x, y, z);
    return result;
}
maxOfThree(1, 2, 3)

// Question 3
function isCharacterAVowel(x) {
    x = x.toLowerCase();
    if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
    return "true";
  }
  else {
    return "false";
  }
}
isCharacterAVowel("x");


// Question 4
function sumArray(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}
sumArray([3, 5, 7, 9]);

// Question 4
function multiplyArray(array) {
  var total = 1;
  for (var i = 0; i < array.length; i++) {
    total = total * array[i];
  }
  return total;
}
multiplyArray([3, 5, 7]);


// Question 5: Write a function that return the number of arguments passed to the function when called.

var numberOfArguments = function(){
  //find number of arguments
  return arguments.length;

};

numberOfArguments(1, 2, 3, 5, "hi");


// Question 6: Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

var reverseString = function(string){
  return string.split("").reverse().join("");

};
reverseString("abcdefghi");

// Question 7: Write a function findLongestWord that takes an array of words and returns the length of the longest one.

function findLongestWord(array) {
  //find longest word
  var longest = 0;
  for (i = 0; i < array.length; i++) {
    if(array[i].length > longest) {
        longest = array[i].length;
    }
    return longest;
  }

}
findLongestWord(["x", "y"]);


// Question 8: Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.

function filterLongWords(array, number) {
    newArray = [];
      for (var i = 0; i < array.length; i++) {
        if(array[i].length > number) {
            newArray.push(array[i]);
        }
      }
      return newArray;
    }
(filterLongWords(["a", "b", "c"], 3));



// Bonus 1
// (hint: `prototype`)


// Bonus 2
function charactersOccurencesCount() {

}

