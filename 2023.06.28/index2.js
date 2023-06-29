let a = "변수입니다.";

console.log(a);

let obj = {
  a: "프로퍼티 입니다",
};

console.log(obj.a);

let array = [1, 3, 144, 241, 23, "이것은 배열입니다."]; //문자열에는 ' ' 사용

console.log(array);

console.log(array[2]); // 3번째 값을 찾습니다.

let obj2 = {
  a: 1,
  b: 2,
  c: 3,
  d: { e: 4 },
}; //프러퍼티 안의 프로퍼티 입니다.

console.log(obj2);
console.log(obj2.a); //밑에 와 같은 값을 찾습니다.
console.log(obj2["a"]);
console.log(obj2["a"]);
