function Player(num1, name, position, hand, pix) {
  this.num1 = num1;
  this.name = name;
  this.position = [];
  if (position == "object") {
    this.position = position;
  } else {
    this.position.push(position);
  }

  this.hand = hand;
  this.pix = pix;
}

const playerInfo = [
  new Player("39번", "다", ["우익수", "1루수"], "우투좌타", "1루수"),
  new Player("7번", "가", ["유격수", "2루수"], "우투좌타", "2루수"),
  new Player("2번", "나", ["3루수", "2루수", "1루수"], "우투우타", "3루수"),
  new Player("14번", "바", ["3루수", "2루수", "유격수"], "우투우타", "유격수"),
  new Player("5번", "자", "투수", "좌투좌타", "투수"),
  new Player("1번", "마", "포수", "좌투우타", "포수"),
  new Player("88번", "라", ["좌익수", "중견수"], "좌투우타", "좌익수"),
  new Player("41번", "사", "좌익수", "좌투우타", "우익수"),
  new Player("4번", "아", "중견수", "좌투우타", "중견수"),
];
let pixArr = [
  "1루수",
  "2루수",
  "3루수",
  "유격수",
  "투수",
  "포수",
  "좌익수",
  "우익수",
  "중견수",
];

let pixHTMLArr = [
  "first",
  "second",
  "third",
  "ss",
  "piture",
  "cather",
  "left",
  "right",
  "center",
];

console.log(playerInfo);

playerInfo.forEach((item, index) => {
  // if (item.pix == "2루수") {
  //   console.log(item.name);
  // }

  for (let i = 0; i < pixArr.length; i++) {
    if (item.pix == pixArr[i]) {
      let pixHtml = document.getElementsByClassName(pixHTMLArr[i]);

      console.log(pixHtml);
      pixHtml[0].textContent = item.name;
    }
  }

  const playerElem = document.getElementById("players");

  const plus = document.createElement("tr");
  playerElem.append(plus);

  const playerNo = document.createElement("td");
  const playerNum = document.createElement("td");
  const playerName = document.createElement("td");
  const playerPosition = document.createElement("td");
  const playerHand = document.createElement("td");
  const playerPix = document.createElement("td");
  const input = document.createElement("input");
  const button = document.createElement("button");
  // const button = document.createElement("button");
  plus.append(playerNo);
  plus.append(playerNum);
  plus.append(playerName);
  plus.append(playerPosition);
  plus.append(playerHand);
  plus.append(playerPix);
  // playerName.append(input);
  // input.value = item.name;

  playerNum.innerHTML = item.num1;
  // playerName.innerHTML = item.name;
  playerPosition.innerHTML = item.position;
  playerHand.innerHTML = item.hand;
  playerPix.innerHTML = item.pix;
  playerNo.innerHTML = index + 1;
  playerName.append(input);
  playerName.append(button);
  button.innerHTML = "출력";

  button.onclick = () => {
    playerInfo[index].name = input.value;
    console.log(playerInfo[index].name);
    console.log(document.getElementsByClassName(pixHTMLArr[index]));
    console.log(document.querySelector(`.${pixHTMLArr[index]}`));
    document.querySelector(`.${pixHTMLArr[index]}`).innerHTML =
      playerInfo[index].name;

    playerNum.innerHTML = item.num1;
    playerPosition.innerHTML = item.position;
    playerHand.innerHTML = item.hand;
    playerPix.innerHTML = item.pix;
  };
});
