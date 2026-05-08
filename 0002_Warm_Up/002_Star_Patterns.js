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

/* Pattern2:
------------
1
12
123
1234
12345
------------
*/

// Solution 2:-----------------------------------------------------------------------

function pattern2(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row = row + j;
    }
    console.log(row);
  }
}

// pattern2(5);

/* Pattern3:
------------
    *
   **
  ***
 ****
*****
------------
*/

// Solution 3:-----------------------------------------------------------------------

function pattern3(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= n - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= i; k++) {
      row = row + "*";
    }
    console.log(row);
  }
}
// pattern3(5);

/* Pattern4:
------------
1
10
101
1010
10101
------------
*/

// Solution 4:-----------------------------------------------------------------------
function pattern4(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      if (j % 2 === 0) row += 0;
      else row += 1;
    }
    console.log(row);
  }
}
// pattern4(5);

/* Pattern5:
------------
1
01
010
1010
10101
------------
*/

// Solution 5:-----------------------------------------------------------------------

function pattern5(n) {
  let toogle = 1;

  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += toogle;
      if (toogle === 1) {
        toogle = 0;
      } else {
        toogle = 1;
      }
    }
    console.log(row);
  }
}
// pattern5(5);
