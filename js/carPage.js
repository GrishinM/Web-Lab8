let url = window.location.search;
let urlParams = new URLSearchParams(url);
let carId = urlParams.get("id");
let content = document.querySelector(".car-details");
let car = cars.find(car => car.id === parseInt(carId));
content.appendChild(car.toDetailedHTML("../"));