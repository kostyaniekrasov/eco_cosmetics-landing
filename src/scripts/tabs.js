"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".shop__tab-box--button");
  const allContent = document.querySelectorAll(".content");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const line = document.querySelector(".shop__tab-box--line");
      line.style.width = e.target.offsetWidth + "px";
      line.style.left = e.target.offsetLeft + "px";

      allContent.forEach((content) =>
        content.classList.remove("content__active")
      );
      allContent[index].classList.add("content__active");
    });
  });
});
