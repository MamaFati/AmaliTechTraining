const answer = document.querySelectorAll(".answer");
const display = document.querySelectorAll(".display");

for (let i = 0; i < display.length; i++) {
  display[i].addEventListener("click", function () {
    answer[i].classList.toggle("hidden");
    if (display[i].src.includes("icon-plus.svg")) {
      display[i].src = "./assets/images/icon-minus.svg";
    } else {
      display[i].src = "./assets/images/icon-plus.svg";
    }
    // console.log("hi");
  });
}
