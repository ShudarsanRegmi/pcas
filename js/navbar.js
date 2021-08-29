let menuOpener = document.querySelector(".menuOpener");
let menuCounter = 0;
menuOpener.addEventListener("click", event => {
    //  toggle the display status of nav links
    if (menuCounter % 2 == 0) {
        navLinksCon.style.display = "flex";
        menuOpener.classList.remove("fa-bars");
        menuOpener.classList.add("fa-times");
    } else {
        navLinksCon.style.display = "none";
        menuOpener.classList.add("fa-bars");
        menuOpener.classList.remove("fa-times");
    }
    menuCounter++;

})