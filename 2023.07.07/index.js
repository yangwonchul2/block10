const str = "abcDeFgHIJklMn";
//문자열도 배열
console.log(str.indexOf("cD"));
console.log(str.length);
console.log(str.slice(2, 4));
console.log(str.split("F"));
console.log(str.split(""));
console.log(str.replace("Fg", " "));
console.log(str.replaceAll("Fg", " "));
const char = "'a'";

console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(!!" ");

const introduce = "i am jkh";
introduce.split(" ");

console.log(introduce.toUpperCase());

console.log(new Date()); //UTC 표기

setTimeout(() => {
  console.log(new Date());
}, 1000);

console.log(new Date().getDate());
console.log(new Date().getDay());
console.log(new Date().getHours());
console.log(new Date().getTimezoneOffset());
console.log(new Date().toISOString());
console.log(Date.now());
console.log(new Date(1688693991812));

const lauages = {
  ko: "안녕",
  en: "Hi",
  jp: "gonichiwa",
  ch: "nihao",
};

let selectedLanguage = "ko";
console.log(lauages[selectedLanguage]);

console.log(new Date().getDate(Date.now()));

console.log(Math.random());
console.log(Math.abs(-9)); // 절대값
console.log(Math.max(1, 23, 5133, 21, -56)); // 최대값
console.log(Math.min(1, 231245, 2312, 23));
console.log(Math.pow(2, 3));
console.log(Math.pow(2, 10));

console.log(Math.round(3.14)); //반올림
console.log(Math.round(3.54));
console.log(Math.round(Math.PI));
console.log(Math.sqrt(2)); // 재곱근
console.log(0.9999999999999999);

console.log([...[1, 2, 3, 4, 5], ...[1, 2, 3, 4, 5]]); // ... 은 내부 아이템을 풀어준다.
