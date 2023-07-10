//자바스크립트 이벤트

document.getElementById("btn").onclick = function () {
  console.log("클릭했습니다");
};
// 메써드
window.onload = function () {
  console.log("페이지 로딩완료");
};

document.getElementById("btn").addEventListener("click", (e) => {
  console.log(e.target);
});
// 콜백 함수
document.getElementById("btn").addEventListener("click", (e) => {
  console.log(e.target.innerHTML);
}); // 이벤트가 들어오는지 확인 후 실행

// target 은 해당 이벤트가 실행된 장소 . 어떠한 엘리먼트에서 실행되는지.

document.getElementById("btn").addEventListener("mouseover", (e) => {
  console.log("버튼위 마우스");
});

const tempClick = (e) => {
  console.log(e);
};

tempClick();

document.getElementById("btn").onclick = tempClick;

// [].forEach((v, i, a) => {});

document.getElementById("count").addEventListener("click", (e) => {
  console.log(e);
  if (e.altKey) {
    e.target.innerHTML = +e.target.innerHTML - 1;
  } else {
    e.target.innerHTML = +e.target.innerHTML + 1;
  }
});

// window.addEventListener("pointerdown", (e) => {
//   console.log(e.pageX);
//   console.log(e.pageY);
// });

// window.addEventListener("pointerup", (e) => {
//   console.log(e.pageX);
//   console.log(e.pageY);
// });
//드래그;

// window.addEventListener("touchstart", (e) => {
//   console.log(e.pageX);
//   console.log(e.pageY);
// });

// window.addEventListener("touchend", (e) => {
//   console.log(e.pageX);
//   console.log(e.pageY);
// });

window.onresize = function (e) {
  document.getElementById("width").innerHTML = e.target.innerWidth + "px";
  document.getElementById("height").innerHTML = e.target.innerHeight + "px";
};

// const tempClick = (e) => {
//   const tempElem = document.createElement("div");
//   tempElem.innerHTML = "testing";
//   tempElem.onload = function () {
//     console.log("테스트 추가 완료 ");
//   };
//   e.target.append(tempElem);
// };

window.onkeydown = (e) => {
  console.log(e);
};

// 키 값을 받아올 수 있다.

// document.getElementById("test-form").onsubmit = (e) => {
//   //   alert("데이터 보냈어");
//   e.preventDefault();  // 서버로 폼을 보내는 것을 막아준다.  통신을 통해 값을 확인한 뒤에 데이터를 보내는 상황에 많이 쓰인다.
//   console.log("데이터 안보냈어");
// };
// // 폼 데이터를 서버에 보낸다.

console.log(document.forms["test-form"]);

// console.lopg(document.form.test-form); <<안됨. - 를 마이너스로 인식

document.forms["test-form"].onsubmit = (e) => {
  e.preventDefault();
  console.log("데이터 입력 완료");
};

// document.body.onload = () => {
//   document.getElementById("test-img").onload = (e) => {
//     console.log(e.target);
//     console.log("이미지 온로드 확인");
//   };
//   document.getElementById("test-img").setAttribute("src", "public/");
// };

document.getElementById("name").onchange = function (e) {
  console.log(e.target.value);
};

document.getElementById("name").onfocus = function (e) {
  console.log("포커싱");
};

document.getElementById("name").onblur = function (e) {
  console.log("밖으로 나갔어");
};

document.getElementById("name").onchange = function (e) {
  console.log(e.target.value);
  document.getElementById("name-alert");
  innerHTML = e.target.value;
};
// 값이 바뀌었을때 출력 회원가입 .에서 아이디를 잘 못치거나했을때 블러처리되면서 요청을 보냄.
//커서가 나왔을때 실행

document.forms["test-form"]["name"].oninput = function (e) {
  console.log(e.target.value);
};
// 즉각적으로 백엔드 서버에 보내서 확일할때 많이 한다.
// 변경 즉식 실행

// 템플릿 리터널 => string , html 에서의 pre 같은 형식 , 입력한 형식 그대로 입력 된다.
` `;
console.log(
  `1 옆에 있는 백틱이다. ${1 + 2 + 3 + 4} << 여기에 변수를 입력 가능
  ${[1, 2, 3, 4]} << 여기에 변수를 입력 가능
  ${{ a: 1, b: 2 }} << 여기에 변수를 입력 가능`
); // 삼항 연산자 , 객체 , 배열
const tempStudent = {
  name: "양원철",
  age: "28",
};

document.getElementById(
  "template-literal"
).innerHTML = `이름은 ${tempStudent.name} 이고 나이는 ${tempStudent.age}입니다.`;

//  mouseover , mouseenter , mouseout , mouseleave

document.getElementById("game").style.top = "500px";
document.getElementById("game").style.left = "500px";

window.addEventListener("keydown", (e) => {
  //   e.preventDefault();
  console.log(e);
  console.log(e.keyCode);
  console.log(typeof e.keyCode);
  if (e.keyCode == 38) {
    document.getElementById("game").style.top = "400px";
  } else if (e.keyCode == 40) {
    document.getElementById("game").style.top = "500px";
  } else if (e.keyCode == 37) {
    document.getElementById("game").style.left = "400px";
  } else if (e.keyCode == 39) {
    document.getElementById("game").style.left = "500px";
  }
});
