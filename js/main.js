const menuBack = document.querySelector(".navigation__background");
const navItems = document.querySelector(".navigation__nav");
const menuBtn = document.querySelector("#navi-toggle");


function removeClasses() {
    navItems.classList.remove("hide");
    menuBack.classList.remove("scaleDown");
}

function closeNav() {
    navItems.classList.remove("hide");
    menuBack.classList.remove("scaleDown");

    navItems.classList.add("hide");
    menuBack.classList.add("scaleDown");

}

window.sr = ScrollReveal({
    origin: 'bottom',
    duration: 1000,
    delay: 500
});
sr.reveal('.content-about');