console.log(document.getElementById("list").firstElementChild); //유사 배열

const listChildren = document.getElementById("list").children;

for (let i = 0; i < listChildren.length; ++i) {
  //   listChildren[i].style.border = " 1px solid black";
  //   listChildren[i].style.padding = "1rem " + i * 1 + "rem";
  //   listChildren[i].className = "item-border";
  listChildren[i].classList.add("item-border");
  console.log(listChildren[i].classList.contains("item-border"));
  listChildren[i].classList.remove("item-border");
  console.log(listChildren[i].classList.contains("item-border"));
  listChildren[i].onclick = function () {
    // if (listChildren[i].classList.contains("item-border")) {
    //   listChildren[i].classList.remove("item-border");
    // } else {
    //   listChildren[i].classList.add("item-border");
    // }
    listChildren[i].classList.toggle("item-border");
  };
}

console.log(listChildren[0].parentElement);
console.log(listChildren[1].parentElement);

console.log(document.getElementsByClassName("item-1"));

console.log(document.getElementById("list").getElementsByClassName("item-2"));

console.log(document.querySelector("#list"));
console.log("\uac00");
const studentsList = document.getElementById("students");
function addStdentFunc(value) {
  const tempElem = document.createElement("li");
  tempElem.innerHTML = value;
  tempElem.onclick = function () {
    // addStdentFunc(value);
    tempElem.outerHTML = "";
  };
  studentsList.append(tempElem);
}

const students = ["강수빈", "임태훈", "양원철"];

for (let i = 0; i < students.length; i++) {
  addStdentFunc(students[i]);
  //   //   studentsList.innerHTML += '<li class= "item-1">' + students[i] + "</li>";
  //   const tempElem = document.createElement("li"); // createElement  엘리먼트추가 메써드
  //   tempElem.innerHTML = students[i]; // temp 라는 것은 임시라는 뜻
  //   //   tempElem.classList.add("item-border");
  //   studentsList.append(tempElem); //append 순서 추가   prepend 는 역순 추가
}
// for 문 안에서는 반복 실행으로 최적화에 대한 부분을 신경써야 된다.
//  \ 은 문자열로 인식을해라라는 표시

const button = document.getElementById("add-student");
const addStdent = document.getElementById("name");
button.onclick = function () {
  //   console.log(addStdent.value); // .Value 는 값을 가져온다.
  //   const tempElem = document.createElement("li");
  //   tempElem.innerHTML = addStdent.value;
  //   tempElem.onclick = function () {
  //     tempElem.outerHTML = ""; // inner 는 내부만 사라져 리스트 태그는 남아있음.
  //   };
  //   studentsList.append(tempElem);
  addStdentFunc(addStdent.value);
};

// 새로고침시에 입력한 값이 사라지는 것은 콜스택에서 끝났다고 받아들여져 수정한 데이터는 사라지게 된다.
// 실행에 대한 부분은 함수가 담당한다.
