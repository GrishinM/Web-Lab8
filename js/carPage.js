let url = window.location.search;
let urlParams = new URLSearchParams(url);
let carId = urlParams.get("id");

window.onload = function() {
    let main = document.querySelector("main");
    let header = document.querySelector("header");
    main.style.paddingTop += header.offsetHeight.toString() + "px";
    let content = document.querySelector(".car-details");
    let currentCar = cars.find(k => k.id == carId);
    let res = currentCar.toDetailedHTML("../");
    content.appendChild(res);
}