// setInterval(() => {
//   [...document.getElementsByClassName("anim")].forEach((elem) => {
//     elem.classList.toggle("off");
//   });
// }, 3000);

const animElems = [...document.getElementsByClassName("anim")];

let aniTime = 0;
function startAnim() {
  animElems.forEach((elem) => {
    if (elem.getBoundingClientRect().top < innerHeight) {
      if (elem.classList.contains("off"))
        setTimeout(() => {
          elem.classList.remove("off");
        }, 1000 * aniTime++);
    } else {
      elem.classList.add("off");
    }
  });
}
startAnim();

document.addEventListener("scroll", (e) => {
  //   console.log(window.scrollY);
  setTimeout(() => {
    aniTime = 0;
  }, 250);
  startAnim();
});

// const [temp, temp2, ...temp3] = [1, 2, 3, 45, 65];
// console.log(temp);
// console.log(temp2);
// console.log(temp3);

// const { aa } = { aa: 4213 };
// console.log(aa);
