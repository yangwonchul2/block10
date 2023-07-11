function pleaseCallback(tempLog) {
  tempLog("안녕");
}

pleaseCallback(console.log); // 함수를 매개변수에 넣고 가져다 사용 = 콜백 함수
// 고차함수

pleaseCallback((temp) => {
  console.log(temp);
});

function higherFunc() {
  return console.log;
}

higherFunc()("고차함수");
// higherFunc 을 호출(higherFunc()) 하면 그 return 값이 console.log 매서드이다.

function sum(a, b) {
  return a + b;
} // 일차 함수
const tempValue = sum(2, 60); // 62 number

function higherFunc1() {
  return sum;
}

const tempFunc = higherFunc1();
console.log(tempFunc == sum);

//매개변수로 함수를 사용하거나 리턴되는 값이 함수 일때를 고차함수라고 한다.

console.log(
  [12, 453, 231, 12, 1, 25, 8, 665].sort((a, b) => {
    return a - b;
  })
);

//  익명함수는 표현식 함수와 애로우 함수

(function () {
  //원하는 내용을 넣는다.
})();

//재귀함수
function Func2(num) {
  console.log(num);
  if (!num) return 0;
  Func2(num - 1);
}
Func2(10);

// const interval = setInterval(() => {
//   console.log("반복해서 실행해");
// }, 1000);

// const timeout = setTimeout(() => {
//   console.log("기다렸다가 실행해");
//   clearInterval(interval);
// }, 10000); // 0.001 ms 단위

// clearTimeout(timeout);
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((item) => {
  console.log(item);
});

for (let i = 0; i < 10; ++i) {
  setTimeout(() => {
    console.log(`test1-${i}`);
  }, 1000);
}

setTimeout(() => {
  for (let i = 0; i < 10; ++i) {
    console.log(`test2-${i}`);
  }
}, 1000);

let tempIdx = 0;
const tempInterval = setInterval(() => {
  if (tempIdx > 9) clearInterval(tempInterval);
  console.log(`test3-${tempIdx++}`);
}, 1000);

function timeoutFunc(num) {
  if (num > 9) return;
  setTimeout(() => {
    console.log(num);
    timeoutFunc(++num);
  }, 1000);
}

timeoutFunc(0);
