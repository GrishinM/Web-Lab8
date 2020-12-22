let url = window.location.search;
let urlParams = new URLSearchParams(url);
let p = document.createElement("p");
let carId = urlParams.get("id");
p.textContent = carId;
window.onload = function() {
    let main = document.getElementsByTagName("main")[0];
    main.appendChild(p);
    let currentCar = cars.find(k => k.id == carId);
    let img = document.createElement("img");
    img.src = "../" + currentCar.imgSrc;
    main.appendChild(img);
}
