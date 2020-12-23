let popup = document.querySelector(".popup")
let shader = document.querySelector(".shader")
let button = document.querySelector(".feedback-button")

button.addEventListener("click", function () {
    popup.classList.remove("popup-hidden")
    shader.classList.add("shader-active")
})
shader.addEventListener("click", function () {
    popup.classList.add("popup-hidden")
    shader.classList.remove("shader-active")
})