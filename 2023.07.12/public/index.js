//  prototype  : 객체를 찍어내는 도장
//  Class : 객체를 찍어내는 도장
class Counter {
  count = 0;
  name; // 객체에 들어갈 키

  constructor(name) {
    this.count = 0;
    this.name = name;
    // this.increase = function () {
    //   this.count += 1;
    // };
  }

  increase() {
    console.log(this);
    this.count += 1;
  } //this 의 프로토 타입으로 들어간다.

  checkThis = () => {
    console.log(this);
  };
}

const count = new Counter("클래스");
console.log(count);

class Counter2 extends Counter {
  constructor(name) {
    super(name);
  }
}
const count2 = new Counter2("자식 클래스");
console.log(count2);

//-=----

//-----

function CounterFunc(name) {
  this.count = 0;
  this.name = name;
  //   this.increase = function () {
  //     this.count += 1;
  //   };
}

const countFunc = new CounterFunc("프로토타입");

CounterFunc.prototype.increase = function () {
  this.count += 1;
  console.log(this);
};
CounterFunc.prototype.checkThis = () => {
  console.log(this);
  this.count += 1;
};
console.log(countFunc); // 프로토 타입에 화살표 함수를 적었을 때 윈도우를 가리킨다.
