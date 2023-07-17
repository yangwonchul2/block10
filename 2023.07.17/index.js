// setTimeout(() => {
//   console.log("a");
//   setTimeout(() => {
//     console.log("b");
//     setTimeout(() => {
//       console.log("c");
//       setTimeout(() => {
//         console.log("d");
//         setTimeout(() => {
//           console.log("e");
//         }, 5000);
//       }, 4000);
//     }, 3000);
//   }, 2000);
// }, 1000);
// 콜백 지옥

// function notCallbackHell(msg, time) {
//     return new Promise((resolve, reject) => {
//       try {
//         setTimeout(() => {
//           resolve(msg);
//         }, time);
//       } catch (error) {
//         reject("is error");
//       } finally {
//         console.log("통신 완료");
//       }
//     });
//   }

// notCallbackHell("a", 1000)
//   .then((data) => {
//     console.log(data);
//     return notCallbackHell("b", 2000);
//   })
//   .then((data) => {
//     console.log(data);
//     return notCallbackHell("c", 3000);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("끝났어");
//   });

//   async function waitFunc() {
//     try {
//       let temp = await notCallbackHell("a", 1000);
//       console.log(temp);
//       temp = await notCallbackHell("b", 2000);
//       console.log(temp);
//       temp = await notCallbackHell("c", 3000);
//       console.log(temp);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   waitFunc();
//   console.log("끝났어");

//   document.cookie = "name=value" && "name2=value2";
//   2121;

function hell(msg, time) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(msg);
      }, time);
    } catch (error) {
      reject("is error");
    } finally {
      console.log("통신완료");
    }
  });
}
let a = 10;
async function promise2() {
  try {
    let test = await hell(a, 1000);
    console.log(test);
    test = await hell(a + 10, 2000);
    console.log(test);
  } catch (error) {
    console.log(error);
  }
}
promise2();
