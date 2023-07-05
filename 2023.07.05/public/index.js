//Scope
{
  let a = 0; //지역변수 , 지역 스코프  - 중괄호로 구분
}

// 1.코드를 묶어주는 역할을 한다 .
//  - html 에서는 화면상 영역을 묶어주었는데 자바스크립트 상에서 코드 범위를 정해준다.

let a = 0;
console.log(a);
// 전역 변수 , 전역 스코프

// 2.스코프가 달랐을때 같은 선언을 할 수 있다.

{
  let a = 3; // let a = 3;
  console.log(a);
}

console.log(a); // 위 지역변수 안에서 선언 없이 정의만하면 3이 나오게 된다.

// 3. 지역 스코프에서 초기화 된 선언이 없으면 전역 스코프의 선언을 가져온다 .

function funcScope() {
  //함수 스코프 , 지역 스코프
}

// let i = 9;
for (let i = 0; i < 10; ++i) {
  console.log(i); //포문안에 지역변수
}

let i = 10; // 포문 밖 전역변수  이기에 포문 안과 밖에 선언은 영향을 주지 않는다.

function plus(x, y) {
  return x + y;
}
const result = plus(2, 4);
console.log(result);

// 함수

function calculate(num1, num2, operator) {
  //   if (operator == "+") {
  //     return num1 + num2;
  //   } else if (operator == "-") {
  //     return num1 - num2;
  //   } else if (operator == "*") {
  //     return num1 * num2;
  //   } else if (operator == "/") {
  //     return num1 / num2;
  //   }

  //삼항 연산자 = > 조건 ? 참일때 : 거짓일때
  //    return operator == '+' ? num1 +num2 :
  // ? 는 if     : 은 else

  return operator == "+"
    ? num1 + num2
    : operator == "-"
    ? num1 - num2
    : operator == "*"
    ? num1 * num2
    : operator == "/"
    ? num1 / num2
    : operator == "&"
    ? num1 & num2
    : undefined;
}

const result2 = calculate(1, 2, "&");
console.log(result2);

// 객체
const obj = {
  a: 1,
  b: "a",
  c: true,
  d: undefined,
  e: null,
  f: function () {
    console.log("f"); // 익명함수
  },
  g() {
    console.log("g");
  },
  h: () => {
    console.log("h");
  },
}; // 참조값으로 붙일때 객체 안에서는 명령어 생략

console.log(Object.keys(obj)); // 키를 가져오는 메서드
console.log(Object.values(obj)); // 값을 가져오는 메서드

let objA = 1;
let objB = "a";
let objC = true;
let objD = undefined;
let objE = null;
let objF = function () {
  console.log("f");
}; //표현식
function objG() {
  console.log("g");
} // 선언식
let ojbH = () => {
  console.log("h");
}; // 애로우 함수

//  선언식 함수
function funcA() {
  console.log("a");
}
funcA();

// 즉시실행 함수
(function () {
  console.log("anonymous");
})();

// 객체 안에서 변수로 만들면 사용가능
// 익명함수는 어나미머스로 콜스택에 저장.

//배열 메서드

const student = ["강수빈", "임태훈"];

student.push("양원철"); // 배열 목록에 추가  (뒤 부터)
console.log(student);
console.log(student.pop()); // 뺀 아이템을 반환 return 해준다.
console.log(student);
student.push("양원철");
student.push("이선균");
student.push("김호현");
student.push("황현준");
student.push("김보람");
student.push("이은재");
student.push("정승교");
student.push("박상현");
student.push("전상민");
student.push("김지훈");

console.log(student);
console.log(student.indexOf("정경훈")); // indexOf 는 해당 아이템이 배열에 몇번째 인덱스 인지 찾아준다.
// 없는 아이템이면 -1 을 출력 / 이유는 indexOf 는 정수로 배열순서로 정하기때문에

console.log(
  student.find((item) => {
    return item == "이선균";
  })
); // 메서드 안에 함수로 item 을 찾는다.

console.log(
  student.findIndex((item) => {
    return item == "이선균";
  })
); // item 에 배열 idex 를 찾는다.

student.forEach((item) => {
  console.log(item);
});
// 1.
// 배열을 한번식 실행한다.  브레이크가 없다.  유사배열에는 메서드가 존재 x
// 리턴값이 없음.

student.forEach(function (item) {
  console.log(item);
});
// 2.

function ForforEach(item) {
  console.log(item);
}
student.forEach(ForforEach);
//3.

// 1.2.3. 같다.

console.log(
  student.map((v) => {
    return v + " 학생";
  })
); // 아이템들을 수정해  반환값을  가지고 새로운 배열을 만든다.

console.log(student.join(" / ")); // 문자열로 바꾼후 사이에 넣어줄 스트링 추가
console.log(student.toString()); //문자열로 바꾸는 메서드
console.log(student.slice(1, 2)); // 1번 부터 4번 전 까지 출력
console.log(student.slice(1, -1)); //-1 는 맨뒤

console.log(student.sort()); // 정렬 이름순 ,원본을 변형
console.log(
  student.sort((a, b) => {
    return b < a;
  })
);
console.log(student.reverse());
console.log(
  [8, 45, 84, 1, 415, 4544, 121, 87, 7, 6].sort((a, b) => {
    return a - b;
  })
);
// 콜백함수를 넣지 않으면 첫째 자리를 기준으로 비교.
