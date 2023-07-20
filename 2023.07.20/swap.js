function swap(arr, idx1, idx2) {
  //   const temp = arr[idx1];
  //   arr[idx1] = arr[idx2];
  //   arr[idx2] = temp;
  [arr[idx2], arr[idx1]] = [arr[idx1], arr[idx2]];
}

const arr = [8, 16, 88, 18, 344, 0, 100, 28, 90000, 0.5, 7, 13];

const testList = [
  { name: "gsb", time: 116933 },
  { name: "sort", time: 31 },
  { name: "bubble", time: 24975 },
  { name: "insert", time: 9772 },
  { name: "select", time: 6434 },
];

testList.sort((a, b) => a.time - b.time);
console.log(testList.sort((a, b) => a.time - b.time));
