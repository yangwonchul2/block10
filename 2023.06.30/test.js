let input;

function inputDate() {
  input = prompt("가위! 바위! 보!");
  console.log(input);
  let random = Math.random();
  console.log(random);

  if (random < 0.3) {
    random = "가위";
  } else if (0.3 <= random && random < 0.6) {
    random = "바위";
  } else if (0.6 <= random && random < 1) {
    random = "보";
  }
  console.log(random);
  if (input == random) {
    alert("비겼다.");
  } else if (input == "가위" && random == "바위") {
    alert("졌다.");
  } else if (input == "가위" && random == "보") {
    alert("이겼다.");
  }
  if (input == "바위" && random == "보") {
    alert("졌다.");
  } else if (input == "바위" && random == "가위") {
    alert("이겼다.");
  }
  if (input == "보" && random == "가위") {
    alert("졌다.");
  } else if (input == "보" && random == "바위") {
    alert("이겼다.");
  }
}
