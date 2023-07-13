console.log(this); // 콘솔로그로 출력시 윈도우 객체가 나온다. 객체에서 사용하는
//디스는 자신의 객체를 가리킨다.
({
  a: 1,
  checkThis() {
    console.log(this);
  },
}).checkThis(); // 객체내의 자신의 함수를 뜻함.

class Test {
  name;
  #age;
  static area = () => {
    console.log("양원철");
  };
  checkThis() {
    console.log(this);
  }
  checkThisArrow = () => {
    console.log(this);
  };
} //  this 객체 내의 함수 아래의 인스턴스를 뜻함.
// class Test 안에서 this 를 만들었기때문에 최상위를 Test 를 가리킨다.
console.dir(Test);
// Object.keys();
// Object.values()

const test = new Test();
const test2 = new Test();
const test3 = new Test();
test.checkThis();
test.checkThisArrow();

// console.dir(Test.prototype);
console.log(Test.prototype);
console.dir(test.__proto__);

console.dir(Test);

console.log(
  "-------------------------------프로토타입---------------------------------"
);

function TestFunc() {
  this.func = function () {};
}
TestFunc.prototype.checkThis = function () {
  console.log(this);
};
TestFunc.prototype.checkThisArrow = () => {
  console.log(this);
};
//전역 안에서 this 를 만들었기때문에 최상위를 window 를 가리킨다.

const testFunc = new TestFunc();
testFunc.checkThis();
testFunc.checkThisArrow();

const temp = {
  checkThis() {
    if (this == temp) {
      console.log("같다");
    } else {
      console.log("다르다");
    }
  },
};
temp.checkThis();

test.checkThis.bind(window)(); // .bind()는 함수 this를 재정의한다. 고차함수
test.checkThis.bind(testFunc)(); //this 만 재정의
const testTemp = test.checkThis.bind(temp);
testTemp();

test.checkThis();

test.checkThisArrow.bind(testFunc)();
test.checkThisArrow.bind(window)(); //애로우 함수는 this 를 고정한다.

console.log("=========================클로저===============================");

// 클로저 , Closure 는 클래스에서 #priv
function closure() {
  let a = 3725;
  return () => {
    return a;
  };
} // 함수가 끝났을때 없어지지 않고 남아있는 것을 클로저라고 한다.
const tempClosure = closure();
console.log(tempClosure());
console.dir(tempClosure);
console.dir(closure);
