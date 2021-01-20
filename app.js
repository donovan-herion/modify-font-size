let incrementBtn = document.querySelector(".increment");
let decrementBtn = document.querySelector(".decrement");
let containerChildren = document.querySelector(".container").children;

let fontSizeStatus = 1;

incrementBtn.addEventListener("click", () => {
  if (fontSizeStatus < 2) {
    decrementBtn.style.cursor = "pointer";
    for (let i = 0; i < containerChildren.length; i++) {
      let fontSize = window.getComputedStyle(containerChildren[i]).fontSize;
      containerChildren[i].style.fontSize = `${parseInt(fontSize) + 5}px`;
    }
    fontSizeStatus++;
    if (fontSizeStatus == 2) {
      incrementBtn.style.cursor = "no-drop";
    }
  }
});

decrementBtn.addEventListener("click", () => {
  if (fontSizeStatus > 0) {
    incrementBtn.style.cursor = "pointer";
    for (let i = 0; i < containerChildren.length; i++) {
      let fontSize = window.getComputedStyle(containerChildren[i]).fontSize;
      containerChildren[i].style.fontSize = `${parseInt(fontSize) - 5}px`;
    }
    fontSizeStatus--;

    if (fontSizeStatus == 0) {
      decrementBtn.style.cursor = "no-drop";
    }
  }
});
