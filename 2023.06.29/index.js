console.log(1 + 2); // 3
console.log(0 - 2); // -2
console.log("123" + 3); // 3123
console.log(10 + true); // 11
console.log("" + false); // false

console.log(2 ** 3); // **는 제곱   8
console.log(3 << 2); // 3 -> 11 2진수 << 왼쪽으로 이동해라 , 2번 1100 => 12 10진수
// 2진수로 기준으로 연산하는 비트연산자

console.log(1 < 3); //비교연산자
console.log(1 > 3);
console.log(4 >= 2);
console.log(4 <= 2);
console.log(1 == 2); // 수학적 같다의 뜻은 == 이다.

console.log("1" == 1); // 문자열 1과 숫자 1은  같다.
console.log(0 == false);
console.log(1 === true); // === 은 타입 일치 여부까지 판단하여 비교한다.

console.log(1 != "1"); // !는 부정을 뜻한다. 1과 문자열 1이 같지 않나
console.log(1 !== "1"); // 값 +타입까지 비교
console.log(!true);

console.log(true && false); // 둘다 교집합으로 판단
console.log(true && !false); // 둘다 true 이기에 true

console.log(true || false); // 둘중의 하나가 true 인가

console.log(false && "안녕하세요"); // false 의 값을 가지고 있기에 결과 값을 false 로 판단.
console.log(true && "안녕하세요"); // true 로 인해  문자열을 실행 시킨다.

console.log(true || "안녕하세요");
console.log(false || "안녕하세요");

console.log(!!""); //
console.log(!!" "); //
console.log(!!-1); // 숫자는 0 이외에는 true 가진다.
console.log(!!{}); // 객체를 지정하기때문에 true 로 인식
console.log(!!null); // false  null은 비어있기때문에 0 으로 인식
console.log(!!undefined);
console.log(!!"0");

// !! 로 타입변환에 활용

let a = 2;

a += 2; // == a=a+2 ;  +2를 해서 변수에 대입

console.log(a); // 4

a -= 2; // == a = a - 2

console.log(a); // 2

a *= 3; // == a = a / 3

console.log(a);

a **= 3; // a = a** 3 ;

console.log(a);

a = b = c = 5;

console.log(a);
console.log(b);
console.log(c);

console.log("--------");

console.log(0x100); // x = hex
console.log(0o10); // 0 = oct   8진수
console.log(0b10); // 0 = bin , binery 2진수
console.log("\u00a0"); //unicode

console.log(++a); // 1증가 가 위에 라서 적용
console.log(a); // 6
console.log(a++); //6 1증가가 아래 에 적용
console.log(a); // 7

console.log(--a); //1감소
// a -= 1;
// console.log(a)

console.log(a--);
// console.log(a)
// a -= 1;

console.log(Symbol("a") == Symbol("a")); // Symbol 은 독립적 성향이 있어 각각 다르다.

const aa = Symbol("a");
const bb = Symbol("a");
console.log(aa == bb);

const cc = bb;
console.log(bb == cc);
console.log({} == {});

// 조건  참인가 거짓인가
if ("양원철".length == "교수님".length) {
  console.log("이건 참이야");
}

if (a < 0) {
  console.log("a는 0보다 커");
} else {
  // else 는 위에서 참으로 실행 되면 실행되지 않음.
  console.log("a는 0보다 작지 않아");
}

if (a > 0) {
  console.log("a는 0보다 커");
} else {
  console.log("a는 0보다 크지 않아");
}

if (a < 0) {
  console.log("a는 0보다 커");
} else if (a < 10) {
  console.log("a는 10보다 작아");
} else if (a < 100) {
  console.log("a는 10보다 작아");
} else {
  // else 는 위에서 참으로 실행 되면 실행되지 않음.
  console.log("a는 0보다 작지 않아");
}

// if 는 시작임으로  다른 조건을 걸때 else 없이 if 를 또 적게 되면  새로운 조건문이 나온다.

// 조건문 switch
a = 1;
switch (a) {
  case 1:
    console.log("a는 1이야");
    break;
  case 2:
    console.log("a는 2이야");
    break;
  default:
    console.log("a는 1도 2도 아니야");
}
// case 위에서 참이면 밑에 코드도 같이 실행  그렇기 때문에 break 사용

// if 와 switch 에서  if 는 참이 판별 됬을 때 아래 조건을 실행하지 않지만 switch는 조건을 실행

while (a < 100) {
  console.log(++a);
}
//  조건이 성립할때 까지 반복문 while

// let num1 = 2;
// while (num1 < 10) {
//   let num2 = 1;
//   while (num2 < 10) {
//     console.log(num1 + "*" + num2 + "=" + num1 * num2);
//     num2++;
//   }
//   num1++;
// }

// let num1 = 1;
// while (num1 < 9) {
//   num1++;
//   num2 = 1;
//   while (num2 < 10) {
//     console.log(num1 + "*" + num2 + "=" + num1 * num2);
//     num2++;
//   }
// }

let num2 = 1;
while (num2 < 9) {
  ++num2;
  let num1 = 1;
  while (num1 < 10) {
    console.log(num2 + "*" + num1 + "=" + num2 * num1);
    ++num1;
  }
}

const temp = document.getElementById("root");

let num4 = 2;
while (true) {
  let num3 = 1;
  while (true) {
    console.log(num4 + "*" + num3 + "=" + num4 * num3);
    temp.innerHTML += num4 + "*" + num3 + "=" + num4 * num3 + "<br>";
    if (num3 === 9) {
      break;
    }
    num3++;
  }
  if (num4 === 9) {
    break;
  }
  num4++;
}
