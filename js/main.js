let cars = [
    new Car("Lada Kalina", 300000, "...", "images/cars/kalina.jpg"),
    new Car("Renault Logan", 600000, "...", "images/cars/logan.jpg"),
    new Car("Hyundai Solaris", 800000, "...", "images/cars/solaris.jpg"),
    new Car("Ford Focus", 1200000, "...", "images/cars/focus.jpg"),
    new Car("Kia Ceed", 1300000, "...", "images/cars/ceed.jpg"),
    new Car("Volkswagen Polo", 700000, "...", "images/cars/polo.jpg"),
    new Car("Chevrolet Niva", 700000, "...", "images/cars/niva.jpg"),
    new Car("Mazda 6", 1600000, "...", "images/cars/mazda.jpg"),
    new Car("Skoda Octavia", 1400000, "...", "images/cars/octavia.jpg"),
    new Car("BMW X4", 4000000, "...", "images/cars/bmw.jpg")
]

let container = document.querySelector(".cars-container")
cars.forEach(car => container.appendChild(car.toHtml()))