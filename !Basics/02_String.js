//  Q) write a program to convert first letter capital of every word.
//  using built-in function
function capital(str) {
  str = str.trim()
  const word = str.split(" ");
  for (let i = 0; i < word.length; i++) {
    if(word[i].length > 0){
    word[i] = word[i][0].toUpperCase() + word[i].substring(1);
    }
  }
  res = word.join(" ");
  return res;
}
// console.log(capital("   with space  "));   
// console.log(capital("without space"));