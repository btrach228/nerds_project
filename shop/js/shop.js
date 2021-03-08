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

//pages

const pages = document.querySelectorAll(".pages-btn");

pages.forEach((el) => {
  el.addEventListener("mousedown", () => {
    el.classList.add("pages-btn-active");
  });
  el.addEventListener("mouseup", () => {
    el.classList.remove("pages-btn-active");
  });
});
