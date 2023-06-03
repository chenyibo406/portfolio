var btn = document.getElementById("btn");
var enResume = document.querySelector(".en-resume");
var cnResume = document.querySelector(".cn-resume");

function leftClick() {
  btn.style.left = "0";
  //   enResume.classList.remove("deactive-display");
  //   cnResume.classList.remove("active-display");
}

function rightClick() {
  btn.style.left = "110px";
  //   enResume.classList.add("deactive-display");
  cnResume.classList.add("active-display");
}

var mixer = mixitup(".resume-box");
