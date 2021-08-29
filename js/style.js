// Setting  the position  of nav>ul according to the content dynamically
let nav = document.querySelector("nav");
let navLinksCon = document.getElementById("navLinks");
if (window.innerWidth <= 874) {
    navLinksCon.style.top = nav.getBoundingClientRect().height + "px";
}