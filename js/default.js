let main = document.querySelector("main");
let header = document.querySelector("header");
let footer = document.querySelector("footer");

function footerTop() {
    footer.style.top = Math.max(header.offsetHeight + main.offsetHeight, window.innerHeight - footer.offsetHeight).toString() + "px"
}

main.style.top = header.offsetHeight.toString() + "px"
footerTop()
window.addEventListener("resize", footerTop)
let button = document.querySelector(".scroll-button");
if (window.innerHeight === footer.offsetTop + footer.offsetHeight)
    button.remove()