let container = document.querySelector(".cars-container")
cars.forEach(car => container.appendChild(car.toPreviewHTML()))