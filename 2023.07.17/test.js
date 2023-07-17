// 1. 전역변수는 코드 전체의 공간에서 선언된 변수를 말하며  지역변수는 { } 중괄호 안에서의 선언된 변수를 말한다.

//2.
function test() {} // 선언식 함수

const test1 = function () {}; // 표현식 함수

test = () => {}; //화살함수

//3   출력값 = 20  -> 지역스코프안에서  콘솔로그가 출력이 되며  안에서 선언된 x 의 값을 출력한다.
//4   0 ~ 4 까지 숫자 를  1초간격으로 출력한다. for 문을 통해 반복실행을 하였으며 조건으로 i 가 0으로 시작해 5보다 작을때까지만 실행이 된다.

// ------------------------------------------------
let score = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95];

const test4 = score.sort((a, b) => {
  return b - a;
});
console.log(test4);
console.log(test4.slice(0, 3));
for (let i = 0; i < score.length[i]; ++i) {
  if (test4[i] == test4[i + 1]) {
    test4.slice(0, 3 + i);
    console.log(test4);
  } else {
    test4.slice(0, 3);
  }
}

// -------------------------------------------
const apple = "pineapple is yummy";
console.log(apple);

console.log(apple.indexOf("apple"));
