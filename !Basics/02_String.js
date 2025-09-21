//  Q) write a program to convert first letter capital of every word.-------------------------------
//  using built-in function
function capital(str) {
  str = str.trim();
  const word = str.split(" ");
  for (let i = 0; i < word.length; i++) {
    if (word[i].length > 0) {
      word[i] = word[i][0].toUpperCase() + word[i].substring(1);
    }
  }
  res = word.join(" ");
  return res;
}
// console.log(capital("   with space  "));
// console.log(capital("without space"));

//  Q) write a program to convert first letter capital of every word.---------------------------------
// without using built-in function

function capitalFun(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " " && (str[i - 1] === " " || str[i + 1] === " ")) {
      continue;
    } else if (
      str[i] !== " " &&
      (str[i - 1] === " " || str[i - 1] === undefined)
    ) {
      newStr = newStr + str[i].toUpperCase();
    } else {
      newStr = newStr + str[i];
    }
  }
  return newStr;
}
// console.log(capitalFun("   with space  "));
// console.log(capitalFun("without space"));

// reverse String -------------------------------------------------------------------------------
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
// console.log(reverseString("hello")); // "olleh"

// using built-in method
function revString(str) {
  let res = str.split("").reverse().join("");
  return res;
}
// console.log(revString("hello"));  // "olleh"

// first non repeating character in string --------------------------------------------------------
// (itterative way)
function nonRep(str) {
  for (let i = 0; i < str.length; i++) {
    let isPresent = false;
    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) {
        isPresent = true;
        break;
      }
    }
    if (!isPresent) {
      return str[i];
    }
  }
  return -1;
}
console.log(nonRep("asddgasf"));

// using object
function firstNonReaptingChar(str) {
  let count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  }
  return -1;
}

console.log(firstNonReaptingChar("asddgasf"));
