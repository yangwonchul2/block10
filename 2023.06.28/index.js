let a = "임시";
console.log(a);

// object, 객체
let obj = {
  a: "이것은 값입니다.",
  property: "value", //value 는 값
  key: "value",
  obj2: {
    a: true,
  },
  b: "asdafa",
};
console.log(obj);
console.log(obj.a);
obj.b = "추가된 키와 값입니다.";
console.log(obj);
console.log(obj.obj2.a);
console.log(window); // 윈도우 객체 - 이미 만들어져있다 , 브라우저의 모든 정보를 가지고 있지만 브라우져에서 막을수도 있음.
console.log(navigator); //윈도우 객체 내에서 돌아가기 때문에 안에 있는 키를 바로 찾을 수 있다.
obj["c"] = "안녕";
obj.d = "안녕안녕";
console.log(obj.d);
console.log(obj.c);
let letNumber = 1; // 명령어가 없으면 윈도우 객체에 저장되게 된다. 선언된 변수들은 stack 에 저장된다.
number = 2;
console.log(window);
console.log(Math.random());

String("안녕하세요");
("안녕하세요)");
console.log(Number("aslaskjnk"));
console.log("sssssssss".length);
// 자료형 , type
console.log(typeof 123);
console.log(typeof "daksj");
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof obj);
console.log(typeof obj.key);
console.log(typeof obj.obj2.a); //typeof 는 명령어

console.log(new Date());
console.log(Date.now());

let array = [
  1111123123,
  "asdasf",
  21312,
  true,
  false,
  undefined,
  null,
  { a: "sda , b:[]" },
]; // 값을 넣는 배열은 순서대로 나오개 된다.
console.log(array);

let arrayObj = {
  0: "asdas",
  1: 1231241,
  2: true,
};
console.log(typeof array);

let tempA = "a";
console.log(array[1]); // . 다음은 이름 []안에는 숫자와 문자
console.log(obj["a"]);
console.log(obj[tempA]);

const studentsArr = [
  {
    name: "강수빈",
    age: 26,
    job: "학생",
    hobby: ["애니감상", "달리기", "팔굽혀펴기"],
  },
  {
    name: "임태훈",
    age: 29,
    job: "학생",
    specialty: [],
  },
];

console.log(studentsArr[0].hobby);
console.log(studentsArr[1].hobby);
console.log(studentsArr[0]);

const board = [
  {
    title: "제목입니다.",
    text: "내용입니다.",
    createAt: 124120234,
  },
];

console.log(array[0]);
