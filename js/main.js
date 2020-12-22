let cars = [
    new Car(1, "Lada Kalina", 300000, "...", "images/cars/kalina.jpg"),
    new Car(2, "Renault Logan", 600000, "...", "images/cars/logan.jpg"),
    new Car(3, "Hyundai Solaris", 800000, "...", "images/cars/solaris.jpg"),
    new Car(4, "Ford Focus", 1200000, "...", "images/cars/focus.jpg"),
    new Car(5, "Kia Ceed", 1300000, "...", "images/cars/ceed.jpg"),
    new Car(6, "Volkswagen Polo", 700000, "...", "images/cars/polo.jpg"),
    new Car(7, "Chevrolet Niva", 700000, "...", "images/cars/niva.jpg"),
    new Car(8, "Mazda 6", 1600000, "...", "images/cars/mazda.jpg"),
    new Car(9, "Skoda Octavia", 1400000, "...", "images/cars/octavia.jpg"),
    new Car(10, "BMW X4", 4000000, "...", "images/cars/bmw.jpg")
]


let container = document.querySelector(".cars-container")
cars.forEach(car => container.appendChild(car.toHtml()))