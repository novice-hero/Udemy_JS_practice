// 배경색 무지개색깔로 차례로 변경

const delayColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        document.body.style.backgroundColor = color;
        resolve(color);
      } else {
        reject(color);
      }
    }, delay);
  });
};

delayColorChange("red", 1000)
  .then((color) => {
    console.log(`Success! Next Color ${color}`);
    return delayColorChange("orange", 1000);
  })
  .then((color) => {
    console.log(`Success! Next Color ${color}`);
    return delayColorChange("yellow", 1000);
  })
  .then((color) => {
    console.log(`Success! Next Color ${color}`);
    return delayColorChange("green", 1000);
  })
  .then((color) => {
    console.log(`Success! Next Color ${color}`);
    return delayColorChange("blue", 1000);
  })
  .then((color) => {
    console.log(`Success! Next Color ${color}`);
    return delayColorChange("indigo", 1000);
  })
  .then((color) => {
    console.log(`Success! Next Color ${color}`);
    return delayColorChange("violet", 1000);
  })
  .catch((color) => {
    console.log(`Err... Next Color ${color}`);
  });
