const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

let triggerCount = 0;
let pressedCount = 0;

const myThrottle = (cb, delay) => {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= delay) {
      last = now;
      cb(...args);
    }
  };
};

const throttled = myThrottle(() => {
  triggerCount++;
  count.innerHTML = triggerCount;
}, 1000);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  throttled();
});
