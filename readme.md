CSS
todo: how to make an floating profile element

JS
// todo: the addEventListener dont work.
// Fix: forget to remove the active-page.
// todo: how not to select the active page (display:none) to not effect the whole page performance
// add another container to wrap up the whole child element.
// todo: how to let two same classname element work!
// fix: querySelectorAll and querySeletor;

// todo: the addEventListener dont work.
// Fix: forget to remove the active-page.
// todo: how not to select the active page (display:none) to not effect the whole page performance
// add another container to wrap up the whole child element.
// todo: how to let two same classname element work!
// querySelectorAll and querySeletor; foreach function！
// todo: search what is the dif between addEvenlistener and onClick
// addEventListener can add multiple events, whereas with onclick this cannot be done.
// onclick can be added as an HTML attribute, whereas an addEventListener can only be
// added within <script> elements

/_ todo: how to switch different page don't jump to another file and just pop up below navbar _/
/_ set the container display:noen and animation scale to different page _/
/_ todo: why add active-page doesn't work? _/

/_ todo: why the resume page still under the homepage and about page? _/
/_ fix: because you set resume page display attribute _/

/_ todo: how to make an floating profile element _/

// todo: why this code get conflic
// hasChildnode = true
// querySelectorAll = HTMLCollection(39)
// document.getElementsByClassName("bx-chevron-right") = HTMLCollection(39)
// document.querySelectorAll(".card .bx-chevron-right") = HTMLCollection(39)

//_ fix:
// if (document.querySelectorAll(".card .bx-chevron-right")) {
// console.log(document.querySelectorAll(".card .bx-chevron-right"));
// } else {
// console.log("dont do anything");
// }
// _ because document.querySelectorAll mean document not inside function element!

// todo: something wrong with this code
// arrowIconEls.forEach((icon) => {
// cardEls.forEach((element) => {
// element.addEventListener("mouseover", () => {
// if (element.querySelectorAll(".bx-chevron-right").length > 0) {
// console.log("do something");
// icon.classList.remove("bx-chevron-right");
// } else {
// console.log("dont do anything");
// }
// });
// });
// });
