let getHomeEls = document.querySelectorAll(".get-home-page");
let getAboutEls = document.querySelectorAll(".get-about-page");
let getWorkEls = document.querySelectorAll(".get-work-page");
let getContactEls = document.querySelectorAll(".get-contact-page");

const homePageEl = document.querySelector(".home-page");
const aboutPageEl = document.querySelector(".about-page");
const projectsPageEl = document.querySelector(".projects-page");
const contactPageEl = document.querySelector(".contact-page");
const resumePageEl = document.querySelector(".resume-page");
const webChallengePage = document.querySelector(".web-challenge-page");
const webAppPage = document.querySelector(".web-app-page");
const fullStackPage = document.querySelector(".fullstack-page");
const cssEffectPage = document.querySelector(".css-effect-page");
const designPage = document.querySelector(".design-page");

let capabilityEls = document.querySelectorAll(".capability-card");
let publishmentPage = document.querySelectorAll(".get-book-link");
let resumePage = document.querySelectorAll(".resume-card");

let webChallengeEl = document.querySelectorAll(".websites-challenge");
let webAppEl = document.querySelectorAll(".web-applications");
let fullStackEl = document.querySelectorAll(".fullstack-applications");
let cssEffectEl = document.querySelectorAll(".css-effect");
let designEl = document.querySelectorAll(".design-card");

let cardEls = document.querySelectorAll(".card");

let projectCardEls = document.querySelectorAll(".project-card");
let projectLinkEls = document.querySelectorAll(".project-link");

// Navbar

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 50);
});

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  // navlist.classList.toggle("active-display");
  navlist.classList.toggle("open");
  // header.classList.toggle("sticky");
};

// menuIcon.addEventListener("click", () => {
//   console.log("hello");
//   navlist.classList.add("active-display");
// });

// const headerSticky = document.querySelector("header.sticky");
// window.onscroll = () => {
//   // menuIcon.classList.remove("bx-x");
//   // navlist.classList.remove("open");
//   // header.classList.remove("sticky");
//   console.log("hello");
// };

// Project cards for hover effect

projectCardEls.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.querySelector("h2").classList.add("deactive-display");
    element.querySelector(".project-link").style.display = "flex";
  });

  element.addEventListener("mouseleave", () => {
    element.querySelector("h2").classList.remove("deactive-display");
    element.querySelector(".project-link").style.display = "none";
  });
});

// Card component for hover arrow animation effect

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

// Publishment card for opening the link

publishmentPage.forEach((element) => {
  element.addEventListener("click", () => {
    window.open(
      "https://docs.google.com/document/d/1q0w1twNke7ZH5M2sgqnWbBfuvK6l8NeP-fk2wQWf9Xc/edit#"
    );
  });
});

// resume card for opening resume page

resumePage.forEach((element) => {
  element.addEventListener("click", () => {
    console.log("hello");
    window.open("./resume/resume.html");
  });
});

// Home, about, work, contact page for opening each page without
// causing appendix to others

getHomeEls.forEach((element) => {
  element.addEventListener("click", () => {
    homePageEl.classList.remove("deactive-page");
    aboutPageEl.classList.remove("active-page");
    projectsPageEl.classList.remove("active-page");
    contactPageEl.classList.remove("active-page");
    resumePageEl.classList.remove("active-page");

    webChallengePage.classList.remove("active-page");
    webAppPage.classList.remove("active-page");
    fullStackPage.classList.remove("active-page");
    cssEffectPage.classList.remove("active-page");
    designPage.classList.remove("active-page");
  });
});

getAboutEls.forEach((element) => {
  element.addEventListener("click", () => {
    homePageEl.classList.add("deactive-page");
    projectsPageEl.classList.remove("active-page");
    contactPageEl.classList.remove("active-page");
    resumePageEl.classList.remove("active-page");
    aboutPageEl.classList.add("active-page");

    webChallengePage.classList.remove("active-page");
    webAppPage.classList.remove("active-page");
    fullStackPage.classList.remove("active-page");
    cssEffectPage.classList.remove("active-page");
    designPage.classList.remove("active-page");
  });
});

getWorkEls.forEach((element) => {
  element.addEventListener("click", () => {
    homePageEl.classList.add("deactive-page");
    aboutPageEl.classList.remove("active-page");
    contactPageEl.classList.remove("active-page");
    resumePageEl.classList.remove("active-page");
    projectsPageEl.classList.add("active-page");

    webChallengePage.classList.remove("active-page");
    webAppPage.classList.remove("active-page");
    fullStackPage.classList.remove("active-page");
    cssEffectPage.classList.remove("active-page");
    designPage.classList.remove("active-page");
  });
});

getContactEls.forEach((element) => {
  element.addEventListener("click", () => {
    homePageEl.classList.add("deactive-page");
    aboutPageEl.classList.remove("active-page");
    projectsPageEl.classList.remove("active-page");
    resumePageEl.classList.remove("active-page");
    contactPageEl.classList.add("active-page");

    webChallengePage.classList.remove("active-page");
    webAppPage.classList.remove("active-page");
    fullStackPage.classList.remove("active-page");
    cssEffectPage.classList.remove("active-page");
    designPage.classList.remove("active-page");
  });
});

capabilityEls.forEach((element) => {
  element.addEventListener("click", () => {
    homePageEl.classList.add("deactive-page");
    aboutPageEl.classList.remove("active-page");
    resumePageEl.classList.add("active-page");
  });
});

webChallengeEl.forEach((element) => {
  element.addEventListener("click", () => {
    projectsPageEl.classList.remove("active-page");
    webAppPage.classList.remove("active-page");
    fullStackPage.classList.remove("active-page");
    cssEffectPage.classList.remove("active-page");
    designPage.classList.remove("active-page");
    webChallengePage.classList.add("active-page");
  });
});

webAppEl.forEach((element) => {
  element.addEventListener("click", () => {
    projectsPageEl.classList.remove("active-page");
    webAppPage.classList.add("active-page");
    fullStackPage.classList.remove("active-page");
    cssEffectPage.classList.remove("active-page");
    webChallengePage.classList.remove("active-page");
    designPage.classList.remove("active-page");
  });
});

fullStackEl.forEach((element) => {
  element.addEventListener("click", () => {
    projectsPageEl.classList.remove("active-page");
    fullStackPage.classList.add("active-page");
    webAppPage.classList.remove("active-page");
    cssEffectPage.classList.remove("active-page");
    webChallengePage.classList.remove("active-page");
    designPage.classList.remove("active-page");
  });
});

cssEffectEl.forEach((element) => {
  element.addEventListener("click", () => {
    projectsPageEl.classList.remove("active-page");
    cssEffectPage.classList.add("active-page");
    fullStackPage.classList.remove("active-page");
    webAppPage.classList.remove("active-page");
    webChallengePage.classList.remove("active-page");
    designPage.classList.remove("active-page");
  });
});

designEl.forEach((element) => {
  element.addEventListener("click", () => {
    projectsPageEl.classList.remove("active-page");
    cssEffectPage.classList.remove("active-page");
    fullStackPage.classList.remove("active-page");
    webAppPage.classList.remove("active-page");
    webChallengePage.classList.remove("active-page");
    designPage.classList.add("active-page");
  });
});
