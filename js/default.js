let main = document.querySelector("main");
let header = document.querySelector("header");

main.style.paddingTop = header.offsetHeight.toString() + "px"
let scrollButton = document.querySelector(".scroll-button");
if (document.body.offsetHeight <= innerHeight)
    scrollButton.remove()