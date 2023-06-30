document.getElementById("test").onclick = function all() {
  let num1 = 2;
  let num2 = 2;
  while (num1 < 10) {
    num2 = 2;
    while (num2 < 10) {
      console.log(num1 + " * " + num2 + " = " + num1 * num2++);
    }
    num1 += 1;
  }
  // for 괄호 안에 3가지가 들어간다 .  첫번째는 변수 지정  두 번째는 조건 , 세번째는 조건 후 진행시킬 조건
  for (let a = 2; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      console.log(a + "*" + b + "=" + a * b);
    }
  }

  //함수  f(x) = y     sum  작업을 할때 이름을 붙여서 모아두는 개념

  // funtion + 함수명 (외부1 , 정보2 ) +  {return 밖으로 내보낼 }

  function sum(num1, num2) {
    console.log(num1 + "랑" + num2 + "랑 더해줄거야");
    return num1 + num2;
    console.log("이건 출력이 안됨");
  }
  console.log(sum(32, 512));

  console.log(sum(sum(1, 2), sum(3, sum(4, 5))));

  function echoStudent(name, age, job) {
    console.log(
      "학생의 이름은 " +
        name +
        "이고 나이는" +
        age +
        ", 현재 직업은 " +
        job +
        "입니다."
    );
  }
  echoStudent("양원철", 29, "학생");
  //

  const students = [
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

  //cosole.log ( )  괄호 안에 +를 주로 사용했지만 , 로도 사용가능하다.
};
