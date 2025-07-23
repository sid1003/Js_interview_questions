const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

let triggerCount = 0;
let pressedCount = 0;

const throttled = _.throttle(() => {
  triggerCount++;
  count.innerHTML = triggerCount;
}, 1000);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  throttled();
});
