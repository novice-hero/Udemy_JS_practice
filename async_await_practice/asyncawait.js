// 배경색을 무지개색깔로 차례로 변경
const delayColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    if (rand < 0.7) {
      setTimeout(() => {
        document.body.style.backgroundColor = color;
        resolve(`Color is ${color}`);
      }, delay);
    } else {
      reject("Connection Timeout");
    }
  });
};

async function rainbow() {
  try {
    let red = await delayColorChange("red", 1000);
    console.log(red);
    let orange = await delayColorChange("orange", 1000);
    console.log(orange);
    let yellow = await delayColorChange("yellow", 1000);
    console.log(yellow);
    let green = await delayColorChange("green", 1000);
    console.log(green);
    let blue = await delayColorChange("blue", 1000);
    console.log(blue);
    let indigo = await delayColorChange("indigo", 1000);
    console.log(indigo);
    let violet = await delayColorChange("violet", 1000);
    console.log(violet);
    return "All Done!";
  } catch (e) {
    console.log("Error");
    console.log("Error is: ", e);
  }
}

rainbow();
