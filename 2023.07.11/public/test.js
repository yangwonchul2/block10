// function test(a) {
//   console.log(a);
//   if (a > 10) return 0;
//   test(a + 1);
// }
// test(1);

// function test1(a) {
//   console.log(a);
//   if (a > 10) return 0;
//   test1(a + 1);
// }
// test1(1);

function test(idx) {
  if (idx < 2) return 1;
  const temp1 = test(idx - 1);
  const temp2 = test(idx - 2);
  console.log(`${idx}번째는 ${idx - 1}/${temp1} + ${idx - 2}/${temp2}`);
  return temp1 + temp2;
}

function test1(idx) {
  return idx < 2 ? 1 : test1(idx - 1) + test1(idx - 2);
}
console.log(test(10));
