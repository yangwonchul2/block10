class car {
  name;
  link;

  constructor(name, link) {
    this.name = name;
    this.link = link;
  }
  onclick(name) {
    //링크 만드는 함수를 적으십시오
  }
}

const cars = new car("브랜드 이름");
console.log(cars);

class 현대 extends car {}
class 기아 extends car {}
class 쌍용 extends car {}

const car1 = new 현대("현대", "https://www.hyundai.com/kr/ko/e");
console.log(car1);

const car2 = new 기아("기아", "https://www.kia.com/");

console.log(car2);

const car3 = new 쌍용("쌍용", "http://m.kg-mobility.com/kr/");
console.log(car3);

//

const carList = [car1, car2, car3];
// 포문을돌려서 온클릭 함수를 실행

carList.forEach((item, index) => {
  document.getElementsByClassName("box")[index].innerHTML =
    "<a href=" + item.link + ">" + "<div>" + item.name + "</div>" + "</a>";
});

// carInfo.innerHTML = `<div>${car1.name}</div>`;
// window.open("asdf");

class Test {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  intro = () => {
    this.name = "이름은" + name;
  };
}

const test = new Test("양원철", 14);
console.log(test);
