// let cardEls = document.querySelectorAll(".card");
let webChallengeEl = document.querySelectorAll(".websites-challenge");
let webAppEl = document.querySelectorAll(".web-applications");
let fullStackEl = document.querySelectorAll(".fullstack-applications");
let frontendEl = document.querySelectorAll(".css-effect");
let designEl = document.querySelectorAll(".design-card");
// let publishmentPage = document.querySelectorAll(".get-book-link");
let blogCardEl = document.querySelectorAll(".blog-card");
let projectCard = document.querySelectorAll(".project-card");

// const header = document.querySelector("header");

// window.addEventListener("scroll", function () {
//   header.classList.toggle("sticky", window.scrollY > 50);
// });

// * Card component for hover arrow animation effect

// cardEls.forEach((element) => {
//   element.addEventListener("mouseover", () => {
//     if (element.querySelectorAll(".bx-chevron-right").length > 0) {
//       element.querySelector("i").classList.remove("bx-chevron-right");
//       element.querySelector("i").classList.add("bx-chevrons-right");
//     } else {
//       return;
//     }
//   });
//   element.addEventListener("mouseleave", () => {
//     if (element.querySelectorAll(".bx-chevrons-right").length > 0) {
//       element.querySelector("i").classList.add("bx-chevron-right");
//       element.querySelector("i").classList.remove("bx-chevrons-right");
//     } else {
//       return;
//     }
//   });
// });

// * project cards for hover and active effect

projectCard.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.querySelector("h2").classList.add("deactive-display");
    element.querySelector(".project-link").classList.add("active-display");
  });
  element.addEventListener("mouseleave", () => {
    element.querySelector("h2").classList.remove("deactive-display");
    element.querySelector(".project-link").classList.remove("active-display");
  });
});

// * Publishment card for opening the link

// publishmentPage.forEach((element) => {
//   element.addEventListener("click", () => {
//     window.open(
//       "https://docs.google.com/document/d/1q0w1twNke7ZH5M2sgqnWbBfuvK6l8NeP-fk2wQWf9Xc/edit#"
//     );
//   });
// });

// * Publishment card for opening the link

webChallengeEl.forEach((element) => {
  element.addEventListener("click", () => {
    window.open("./projects/websites.html", "_self");
  });
});

// * Web App card for opening the link

webAppEl.forEach((element) => {
  element.addEventListener("click", () => {
    window.open("./projects/applications.html", "_self");
  });
});

// * Fullstack card for opening the link

fullStackEl.forEach((element) => {
  element.addEventListener("click", () => {
    window.open("./projects/fullstack.html", "_self");
  });
});

// * frontend Effect card for opening the link

frontendEl.forEach((element) => {
  element.addEventListener("click", () => {
    window.open("./projects/frontend.html", "_self");
  });
});

// * Design card for opening the link

designEl.forEach((element) => {
  element.addEventListener("click", () => {
    window.open("./projects/ui-ux.html", "_self");
  });
});

// * Design card for opening the link

blogCardEl.forEach((element) => {
  element.addEventListener("click", () => {
    window.open("");
  });
});

// * Navbar

// window.addEventListener("scroll", function () {
//   header.classList.toggle("sticky", window.scrollY > 50);
// });

// let menuIcon = document.querySelector("#menu-icon");
// let navlist = document.querySelector(".navlist");

// menuIcon.onclick = () => {
//   menuIcon.classList.toggle("bx-x");
//   navlist.classList.toggle("open");
// };
