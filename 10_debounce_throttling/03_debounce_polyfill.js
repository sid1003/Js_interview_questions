const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

let triggerCount = 0;
let pressedCount = 0;

const myDebounce = (cb, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => cb(...args), delay);
  };
};

const debouncedCount = myDebounce(() => {
  triggerCount++;
  count.innerHTML = triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  debouncedCount();
});
