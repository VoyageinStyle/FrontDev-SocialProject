//jshint esversion:6

var bodyBg = document.querySelector("body");
var innerBg = document.querySelectorAll(".innerContent").length;
var innerBottomBg = document.querySelectorAll(".innerContent-bottom").length;
var textSmallBg = document.querySelectorAll(".smallText").length;

document.getElementById("switchMode").addEventListener("click", () => {
  if (bodyBg.classList.contains("bgLight")) {
    bodyBg.classList.remove("bgLight");
    document.querySelector(".overview").classList.remove("overviewLight");
    document.querySelector(".hiddenSmall").textContent = "Dark Mode";
    document.querySelector(".hiddenBig").textContent = "Dark Mode";
    for (var i = 0; i < innerBg; i++) {
      document.querySelectorAll(".innerContent")[i].classList.remove("innerContentLight");
    }
    for (var o = 0; o < innerBottomBg; o++) {
      document.querySelectorAll(".innerContent-bottom")[o].classList.remove("innerContent-bottomLight");
    }
    for (var y = 0; y < textSmallBg; y++) {
      document.querySelectorAll(".smallText")[y].classList.remove("smallTextLight");
    }
  } else {
    bodyBg.classList.add("bgLight");
    document.querySelector(".overview").classList.add("overviewLight");
    document.querySelector(".hiddenSmall").textContent = "Light Mode";
    document.querySelector(".hiddenBig").textContent = "Light Mode";
    for (var u = 0; u < innerBg; u++) {
      document.querySelectorAll(".innerContent")[u].classList.add("innerContentLight");
    }
    for (var p = 0; p < innerBottomBg; p++) {
      document.querySelectorAll(".innerContent-bottom")[p].classList.add("innerContent-bottomLight");
    }
    for (var t = 0; t < textSmallBg; t++) {
      document.querySelectorAll(".smallText")[t].classList.add("smallTextLight");
    }
  }
});

var difLength = document.querySelectorAll(".difference").length;

for (var i = 0; i < difLength; i++) {
  if (document.querySelectorAll(".difference")[i].children[0].src.includes("up") == true){
    document.querySelectorAll(".difference")[i].children[1].classList.remove("difRed");
    document.querySelectorAll(".difference")[i].children[1].classList.add("difGreen");
  } else {
    document.querySelectorAll(".difference")[i].children[1].classList.remove("difGreen");
    document.querySelectorAll(".difference")[i].children[1].classList.add("difRed");
  }
}
