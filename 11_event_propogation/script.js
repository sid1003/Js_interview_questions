// ===============================
// Question 1: Event Bubbling
// ===============================
/*
const div = document.querySelector("#outerDiv");
const form = document.querySelector("#form");
const button = document.querySelector("#button");

div.addEventListener("click", function () {
  alert("div");
});

form.addEventListener("click", function () {
  alert("form");
});

button.addEventListener("click", function () {
  alert("button");
});
*/

// ===============================
// Question 2: event.target vs currentTarget vs this
// ===============================
/*
function func(event) {
  alert(
    `currentTarget = ${event.currentTarget.tagName}, target = ${event.target.tagName}, this = ${this.tagName}`
  );
}

document.querySelector("#outerDiv").addEventListener("click", func);
document.querySelector("#form").addEventListener("click", func);
document.querySelector("#button").addEventListener("click", func);
*/

// ===============================
// Question 3: Event Capturing
// ===============================
/*
document.querySelector("#outerDiv").addEventListener("click", function () {
  alert("div");
}, { capture: true });

document.querySelector("#form").addEventListener("click", function () {
  alert("form");
}, { capture: true });

document.querySelector("#button").addEventListener("click", function () {
  alert("button");
}, { capture: true });
*/

// ===============================
// Question 4: Stop Propagation
// ===============================
/*
document.querySelector("#outerDiv").addEventListener("click", function () {
  alert("div");
});

document.querySelector("#form").addEventListener("click", function (event) {
  event.stopPropagation();
  alert("form");
});

document.querySelector("#button").addEventListener("click", function () {
  alert("button");
});
*/

// ===============================
// Question 5: Event Delegation
// ===============================
/*
document.querySelector(".products").addEventListener("click", (event) => {
  console.log(event.target.className);

  if (event.target.tagName === "SPAN") {
    window.location.href += "/" + event.target.className;
  }
});
*/

// ===============================
// Question 6: What is the output?
// ===============================
/*
document.querySelector("#outerDiv").addEventListener("click", function () {
  alert("div");
});

document.querySelector("#form").addEventListener("click", function () {
  alert("form");
}, { capture: true });

document.querySelector("#button").addEventListener("click", function () {
  alert("button");
});
*/

// ===============================
// Question 7: Modal click outside to close
// ===============================
const modalContainer = document.querySelector(".modalContainer");
const modalButton = document.querySelector(".modalButton");

modalButton.addEventListener("click", () => {
  toggleModal(true);
});

function toggleModal(show) {
  modalContainer.style.display = show ? "flex" : "none";
}

modalContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("modalContainer")) {
    toggleModal(false);
  }
});
