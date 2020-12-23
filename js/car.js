class Car {
    name;
    price;
    description;
    imgSrc;
    id;
    length;
    height;
    width;
    seatCount;
    country;

    constructor(id, name, price, description, imgSrc, length, height, width, seatCount, country) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.imgSrc = imgSrc;
        this.id = id;
        this.length = length;
        this.height = height;
        this.width = width;
        this.seatCount = seatCount;
        this.country = country;
    }

    toPreviewHtml(path = "") {
        let link = document.createElement("a");
        link.href = "common/car.html?id=" + this.id;
        let img = document.createElement("img")
        img.classList.add("car-photo")
        img.src = path + this.imgSrc
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

    toDetailedHTML(path = ""){
        let img = document.createElement("img")
        img.classList.add("car-detailed-photo")
        img.src = path + this.imgSrc

        let price = document.createElement("p")
        price.classList.add("details-price")
        price.textContent = this.price + " ₽"

        let name = document.createElement("p")
        name.classList.add("details-name")
        name.textContent = this.name

        let carText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        let pText = document.createElement("p");
        pText.classList.add("details-text");
        pText.textContent = carText;

        let description = document.createElement("div");
        description.classList.add("details-description");
        description.appendChild(name);
        description.appendChild(price);
        description.appendChild(pText);

        let mainInfo = document.createElement("div")
        mainInfo.classList.add("main-details")
        mainInfo.appendChild(img);
        mainInfo.appendChild(description);

        let additionalInfo = this.getDetailsTable();

        let div = document.createElement("div");
        div.classList.add("details");
        div.appendChild(mainInfo);
        div.appendChild(additionalInfo);
        return div
    }

    getDetailsTable()
    {
        let table = document.createElement("table");
        table.classList.add("table-striped");
        let tbody = document.createElement("tbody");
        tbody.appendChild(this.getDetailTableRow("Длина", this.length));
        tbody.appendChild(this.getDetailTableRow("Ширина", this.width));
        tbody.appendChild(this.getDetailTableRow("Высота", this.height));
        tbody.appendChild(this.getDetailTableRow("Кол-во мест", this.seatCount));
        tbody.appendChild(this.getDetailTableRow("Страна сборки", this.country));
        table.appendChild(tbody);
        return table;
    }

    getDetailTableRow(name, value)
    {
        let row = document.createElement("tr");
        let nameColumn = document.createElement("td");
        nameColumn.classList.add("table-row-name");
        nameColumn.textContent = name;
        let valueColumn = document.createElement("td");
        valueColumn.classList.add("table-row-value");
        valueColumn.textContent = value;
        row.appendChild(nameColumn);
        row.appendChild(valueColumn);
        return row;
    }
}