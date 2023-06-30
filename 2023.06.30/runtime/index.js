function sum(inIncrease, isDecrease, num1, num2) {
  if (inIncrease) {
    return num1 + num2;
  } else if (isDecrease) {
    return num1 - num2;
  }
}
console.log(sum(true, false, 4, 10));

function sum1(num1, num2) {
  let sumValue = num1 + num2;
  return sumValue;
}

console.log(sum1(sum1(1, 2), sum1(3, sum1(4, 5))));
console.log(sum1(sum1(1, 2), sum1(3, sum1(4, 5))) + 5);

let result = sum1(sum1(1, 2), sum1(3, sum1(4, 5)));
console.log(result);

result += 5;
console.log(result);

// function tempFunc() {
//   window.name = "이선균";
// }

function funcA() {
  return "a";
}

console.log(funcA);

console.log(funcA());

const funcB = function () {
  return "b"; //함수 표현식
};

console.log(funcB());

const funcArrow = (num1, num2) => {
  return num1 + num2;
}; // 화살표 함수

console.log(funcArrow(1, 2));

let input;

function inputDate() {
  input = prompt("입력해라");
  console.log(input);
}
