class Car {
    name;
    price;
    description;
    imgSrc;

    constructor(name, price, description, imgSrc) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.imgSrc = imgSrc;
    }

    toHtml() {
        let img = document.createElement("img")
        img.classList.add("car-photo")
        img.src = this.imgSrc
        let price = document.createElement("p")
        price.classList.add("car-price")
        price.textContent = this.price + " ₽"
        let name = document.createElement("p")
        name.classList.add("car-name")
        name.textContent = this.name
        let div = document.createElement("div")
        div.classList.add("car-container")
        div.append(img, price, name)
        return div
    }
}