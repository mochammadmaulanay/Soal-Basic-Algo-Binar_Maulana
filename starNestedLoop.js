function starNestedLoop(n, m) {
  let result = "";
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result += "*";
    }
    if (i!==m-1) result += "\n";
  }
  console.log(result);
}

//TEST CASE
  console.log(starNestedLoop(1,2))
// *
// *

  console.log(starNestedLoop(2,3))
// **
// **
// **

  console.log(starNestedLoop(4,1))
// ****
