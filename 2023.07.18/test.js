// function num(a) {
//   const array = [];
//   for (let i = 0; i <= a; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//       array.push(i);
//     }
//   }
//   return array;
// }

// console.log(num(12));

let a = 33;

function game(a) {
  for (let i = 0; i <= a; i++) {
    let str = `${i}`;
    if (str.indexOf("3") || str.indexOf("6") || str.indexOf("9")) {
      console.log("짝");
    } else {
      console.log(i);
    }
  }
}

game();
