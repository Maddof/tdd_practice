/* 

MY JS FILE FOR ODIN PROJECT TEST PRACTICE

Contains functions for:

calculator,
capitalize,
ceasarCipher,
analyzeArray

*/

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

function capitalize(a) {
  return a.charAt(0).toUpperCase() + a.slice(1);
}

function reverseString(a) {
  let splitString = a.split("");
  let reversedString = splitString.reverse();
  let join = reversedString.join("");
  return join;
}

function caesarCipher(str, shift) {
  // Handle wrap-around by using modulo operator
  if (shift < 0) {
    return caesarCipher(str, shift + 26);
  }

  // Process each character in the input string
  let output = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // Check if character is an uppercase letter
    if (char.match(/[A-Z]/)) {
      output += String.fromCharCode(
        ((char.charCodeAt(0) - 65 + shift) % 26) + 65
      );
    }
    // Check if character is a lowercase letter
    else if (char.match(/[a-z]/)) {
      output += String.fromCharCode(
        ((char.charCodeAt(0) - 97 + shift) % 26) + 97
      );
    }
    // If not a letter, add the character as is
    else {
      output += char;
    }
  }
  return output;
}

function analyzeArray(arr) {
  if (arr.length === 0) return null;

  const length = arr.length;
  const sum = arr.reduce((acc, num) => acc + num, 0);
  const average = sum / length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    average,
    min,
    max,
    length,
  };
}

module.exports = {
  calculator,
  capitalize,
  reverseString,
  caesarCipher,
  analyzeArray,
};
