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

function pattern1(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("*");
    }
    console.log("");
  }
}
pattern1(5);
