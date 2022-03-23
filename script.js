"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.getElementById("close");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

window.addEventListener("load", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnCloseModal.addEventListener("click", closeModal());

const testBtn = document.getElementById("test");
testBtn.onclick(console.log("Hello"));
