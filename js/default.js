let main = document.querySelector("main");
let header = document.querySelector("header");

main.style.paddingTop = header.offsetHeight.toString() + "px"
let button = document.querySelector(".scroll-button");
if (document.body.offsetHeight <= innerHeight)
    button.remove()