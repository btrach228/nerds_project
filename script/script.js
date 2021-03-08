// slider

let btn = document.querySelectorAll(".styledSwitch");

btn.forEach((item) => {
  item.addEventListener("click", () => {});
});

// index-buttom

let index_button = document.querySelectorAll(".index-button");

index_button.forEach((item) => {
  item.addEventListener("mousedown", () => {
    item.classList.add("index-button-active");
  });
});

index_button.forEach((item) => {
  item.addEventListener("mouseup", () => {
    item.classList.remove("index-button-active");
  });
});

index_button.forEach((item) => {
  item.addEventListener("mouseout", () => {
    item.classList.remove("index-button-active");
  });
});

//nav elements:hover change color

let element = document.querySelectorAll(".nav-item");

element.forEach((item) => {
  item.addEventListener("mousedown", () => {
    item.classList.add("nav-elements-active");
  });
});

element.forEach((item) => {
  item.addEventListener("mouseout", () => {
    item.classList.remove("nav-elements-active");
  });
});

element.forEach((item) => {
  item.addEventListener("mouseup", () => {
    item.classList.remove("nav-elements-active");
  });
});

//SLIDER
let offset = 0;
const sliderLine = document.querySelector(".overflow");
let btn1 = document.getElementById("radio1");
let btn2 = document.getElementById("radio2");
let btn3 = document.getElementById("radio3");

btn1.addEventListener("click", (e) => {
  offset = 0;
  sliderLine.style.left = offset + "%";

  offset = 0;
});

btn2.addEventListener("click", (e) => {
  offset -= 100;
  sliderLine.style.left = offset + "%";
  offset = 0;
});

btn3.addEventListener("click", (e) => {
  offset -= 100 * 2;
  sliderLine.style.left = offset + "%";
  offset = 0;
});

//social networks click

let socialIcon = document.querySelectorAll(".social-item");

socialIcon.forEach((item) => {
  item.addEventListener("mousedown", () => {
    item.classList.add("social-networks-active");
  });
});

socialIcon.forEach((item) => {
  item.addEventListener("mouseup", () => {
    item.classList.remove("social-networks-active");
  });
});

socialIcon.forEach((item) => {
  item.addEventListener("mouseout", () => {
    item.classList.remove("social-networks-active");
  });
});
