let incrementBtn = document.querySelector(".increment");
let decrementBtn = document.querySelector(".decrement");
let containerChildren = document.querySelector(".container").children;

incrementBtn.addEventListener("click", () => {
  for (let i = 0; i < containerChildren.length; i++) {
    let fontSize = window.getComputedStyle(containerChildren[i]).fontSize;
    containerChildren[i].style.fontSize = `${parseInt(fontSize) * 1.1}px`;
  }
});

decrementBtn.addEventListener("click", () => {
  for (let i = 0; i < containerChildren.length; i++) {
    let fontSize = window.getComputedStyle(containerChildren[i]).fontSize;
    containerChildren[i].style.fontSize = `${parseInt(fontSize) * 0.9}px`;
  }
});
