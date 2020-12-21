class Car {
    name;
    price;
    description;
    imgSrc;
    id;

    constructor(id, name, price, description, imgSrc) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.imgSrc = imgSrc;
        this.id = id;
    }

    toHtml() {
        let link = document.createElement("a");
        link.href = "common/car.html?id=" + this.id;
        let img = document.createElement("img")
        img.classList.add("car-photo")
        img.src = this.imgSrc
        link.appendChild(img);
        let price = document.createElement("p")
        price.classList.add("car-price")
        price.textContent = this.price + " ₽"
        link.appendChild(price);
        let name = document.createElement("p")
        name.classList.add("car-name")
        name.textContent = this.name
        link.appendChild(name);
        let div = document.createElement("div")
        div.classList.add("car-container")
        div.appendChild(link);
        return div
    }
}