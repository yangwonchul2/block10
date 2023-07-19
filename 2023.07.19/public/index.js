// function updown(n, answer) {
//   let temp = n / 2;
//   temp2 = 0;
//   count = 1;
//   while (temp + temp2 != answer) {
//     if (temp + temp2 < answer) temp2 = temp + temp2;
//     temp = parseInt(temp / 2);
//     count++;
//   }
//   return count;
// }
// console.log(updown(100, 24));
// let num = 1;
// function updown(n, answer) {
//   let temp = n / 2;

//   while (temp !== answer && temp > answer) {
//     num++;
//     temp = temp / 2;
//   }
// }
// updown(100, 24);
// console.log(num);

// function updown(n, answer) {
//   let temp = n,
//     temp2 = 0;
//   count = 0;
//   while (temp + temp2 != answer) {
//     temp = parseInt(temp / 2);
//     if (temp + temp2 < answer) temp2 = temp + temp2;

//     count++;
//   }
// }
// updown(100, 22);
// console.log(count);
function getAverage(...numbers) {
  return parseInt(numbers.reduce((prev, curr) => curr + prev, 0) / 2);
}
function updown(n, answer) {
  let start = 0,
    end = n,
    curr = getAverage(start, end),
    count = 0;

  while (curr != answer) {
    if (answer < curr) {
      end = curr;
      curr = getAverage(start, curr);
    } else {
      start = curr;
      curr = getAverage(curr, end);
    }
    console.log(start, curr, end);
    count++;
  }
  return count;
}
console.log(updown(100, 10));
