/* Pattern1:
------------
*
**
***
****
*****
------------
*/

// Solution 1:-----------------------------------------------------------------------

function pattern1_a(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("*");
    }
    console.log("");
  }
}
// pattern1_a(5);

// Another solution:
function pattern1_b(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}
// pattern1_b(5);
