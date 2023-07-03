// prototype
// 디자인 패턴
// MVC

// prototype , 원형 // 생성자 함수
function Fruit() {
  //과일
  this.sugar = 5;
  this.size = 10;
  this.seed = true;
  this.weight = 0;
}

const fruit = new Fruit();
console.log(fruit);

function Strawberry() {
  this.sugar = 4;
  this.size = 1;
  this.weight = 1;
}

Strawberry.prototype = fruit;
const strawberry = new Strawberry();
console.log(strawberry);

console.log(strawberry.seed);

//프로토타입으로 설정하면 자식이 프로토타입에 대한 데이터를 가져올 수 있다.

function Student강수빈() {
  this.name = "강수빈";
  this.age = 26;
  hobby = "달리기";
  this.gender = "man";
}

const 강수빈 = new Student강수빈();
console.log(강수빈);

function Student김호현() {
  this.name = "김호현";
  this.hobby = "여행";
}

Student김호현.prototype = 강수빈;

const 김호현 = new Student김호현();

console.log(김호현);
console.log(김호현.age);

function Student황현준() {
  this.name = "황현준";
  this.age = 28;
}

Student황현준.prototype = 김호현;
const 황현준 = new Student황현준();
console.log(황현준);
console.log(황현준.hobby);
console.log(황현준.gender);

function Student(name, age) {
  this.name = name;
  this.age = age;
}

const 양원철 = new Student("양원철", 28);
console.log(양원철);

function Test() {}

Test.prototype = {
  func(num3, num4) {
    return num3 + num4;
  },
};

const test = new Test();
console.log(test.func(1, 2));

function Test() {
  this.func = function (num1, num2) {
    return num1 + num2;
  };
}

const tess1 = new Test();

console.log(tess1.func(1, 2));

function Test2() {
  this.a = 10;
  this.b = 11;
  //   this.func = function (num1, num2) {
  //     return num1 - num2;
  //   };
}

Test2.prototype = tess1;
const test2 = new Test2();

console.log(test2.a);
console.log(test2.func(3, 4));

function funcA() {
  console.log("안녕하세요");
}

const tempA = new funcA();
console.log(tempA);
