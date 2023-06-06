let getHomeEls = document.querySelectorAll(".get-home-page");
let getAboutEls = document.querySelectorAll(".get-about-page");
let getContactEls = document.querySelectorAll(".get-contact-page");
let getWorkEls = document.querySelectorAll(".get-work-page");

const homePageEl = document.querySelector(".home-page");
const aboutPageEl = document.querySelector(".about-page");
const contactPageEl = document.querySelector(".contact-page");
const creativityPageEl = document.querySelector(".creativity-page");

let capabilityEls = document.querySelectorAll(".capability-card");
let publishmentPage = document.querySelectorAll(".get-book-link");
let resumePage = document.querySelectorAll(".resume-card");

let cardEls = document.querySelectorAll(".card");

// * Navbar

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
  console.log("hello");
  console.log(window.onscroll);
};

window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
  // header.classList.remove("sticky");
};

// * Card component for hover arrow animation effect

cardEls.forEach((element) => {
  element.addEventListener("mouseover", () => {
    if (element.querySelectorAll(".bx-chevron-right").length > 0) {
      element.querySelector("i").classList.remove("bx-chevron-right");
      element.querySelector("i").classList.add("bx-chevrons-right");
    } else {
      return;
    }
  });
  element.addEventListener("mouseleave", () => {
    if (element.querySelectorAll(".bx-chevrons-right").length > 0) {
      element.querySelector("i").classList.add("bx-chevron-right");
      element.querySelector("i").classList.remove("bx-chevrons-right");
    } else {
      return;
    }
  });
});

// * Publishment card for opening the link

publishmentPage.forEach((element) => {
  element.addEventListener("click", () => {
    window.open(
      "https://docs.google.com/document/d/1q0w1twNke7ZH5M2sgqnWbBfuvK6l8NeP-fk2wQWf9Xc/edit#"
    );
  });
});

// * resume card for opening resume page

resumePage.forEach((element) => {
  element.addEventListener("click", () => {
    // console.log("hello");
    window.open("./resume/resume.html");
  });
});

// * Home, about, work, contact page for opening each page without
// * causing appendix to others

getHomeEls.forEach((element) => {
  element.addEventListener("click", () => {
    homePageEl.classList.remove("deactive-page");
    aboutPageEl.classList.remove("active-page");
    contactPageEl.classList.remove("active-page");
    creativityPageEl.classList.remove("active-page");

    document.documentElement.scrollTop = 0;
  });
});

// * about page
getAboutEls.forEach((element) => {
  element.addEventListener("click", () => {
    homePageEl.classList.add("deactive-page");
    contactPageEl.classList.remove("active-page");
    creativityPageEl.classList.remove("active-page");
    aboutPageEl.classList.add("active-page");
    document.documentElement.scrollTop = 0;
  });
});

// * contact page

getContactEls.forEach((element) => {
  element.addEventListener("click", () => {
    homePageEl.classList.add("deactive-page");
    aboutPageEl.classList.remove("active-page");

    creativityPageEl.classList.remove("active-page");
    contactPageEl.classList.add("active-page");

    document.documentElement.scrollTop = 0;
  });
});

// * more about me page
capabilityEls.forEach((element) => {
  element.addEventListener("click", () => {
    homePageEl.classList.add("deactive-page");
    aboutPageEl.classList.remove("active-page");
    creativityPageEl.classList.add("active-page");
    document.documentElement.scrollTop = 0;
  });
});

// * get projects page
getWorkEls.forEach((element) => {
  element.addEventListener("click", () => {
    window.open("./work/project.html", "_self");
  });
});
