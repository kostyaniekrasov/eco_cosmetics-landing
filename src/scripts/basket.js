"use strict";

const button = document.getElementById("product-btn");

const shop = document.querySelector(".icon--shop__var");
const delet = document.querySelector(".product__card--delete-btn");
let count = 0;
let res = 0;
const sS = window.sessionStorage;

if (button) {
  button.addEventListener("click", function () {
    count++;
    res = count;
    sS.setItem("res", res);
    shop.innerHTML = sS.getItem("res");
    shop.style.display = "flex";
  });
}

if (delet) {
  delet.addEventListener("click", function () {
    shop.innerHTML = 0;
    count = 0;
    res = 0;
    sS.setItem("res", res);
    shop.style.display = "none";
  });
}

if (typeof window !== "undefined") {
  count = sS.getItem("res");
  shop.innerHTML = count;
}

if (count <= 0) {
  shop.style.display = "none";
}
