//DOM,  Document(HTML) Object Model
// MVC
console.log(document); // html 을 데이터화 시킨 구조를 도큐먼트
console.dir(document.body);
console.dir(document.head);
console.log(document.body.innerHTML);

console.log(document.body.innerHTML);
console.log(document.body.innerText);

document.body.innerHTML += "<div>추가중</div>";

document.body.innerHTML = "<div>상단에 추가 </div>" + document.body.innerHTML;

console.log(document.body.innerHTML);
// DOM 은 HTML 문서를 Javascript 로 수정할 수 있다.
console.log(document.getElementById("root").innerHTML);
document.getElementById("root").innerHTML += "<div> 루트에 추가중 </div>";
console.log(document.getElementById("root").innerHTML);
console.log(document.getElementById("root").outerHTML);

document.getElementById("root").style.border = "1px solid black";

const a = {
  name: "양원철",
  age: 29,
  hobby: "골프",
  area: "하남",
  army: {
    name: "해병대",
    area: "포항",
  },
};

console.log(a);

function AInfo() {
  this.b = a;
}

const aInfo = new AInfo();
console.log(aInfo);
console.log(aInfo.b);
