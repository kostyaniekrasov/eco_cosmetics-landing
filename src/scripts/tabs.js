"use strict";

const tabs = document.querySelectorAll(".shop__tab-box--button");
const content = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tab.classList.remove("active");
    tab.classList.add("active");

    const line = document.querySelector(".shop__tab-box--line");

    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";

    content.forEach((c) => {
      c.classList.remove("content__active");
    });

    content[index].classList.add("content__active");
  });
});
