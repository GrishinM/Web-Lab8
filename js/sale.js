class Sale {
    startDate;
    endDate;
    name;
    description;
    imgSrc;

    constructor(startDate, endDate, name, description, imgSrc) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.name = name;
        this.description = description;
        this.imgSrc = imgSrc;
    }

    toHTML() {
        let img = document.createElement("img");
        img.classList.add("sale-img")
        img.src = this.imgSrc;

        let name = document.createElement("p");
        name.classList.add("sale-name");
        name.textContent = this.name;

        let date = document.createElement("p");
        date.classList.add("sale-date");
        date.textContent = this.startDate + "-" + this.endDate;

        let saleInfo = document.createElement("div");
        saleInfo.classList.add("sale-info");
        saleInfo.append(name, date);

        let saleDescription = document.createElement("p");
        saleDescription.classList.add("sale-description");
        saleDescription.textContent = this.description

        let saleDetails = document.createElement("div");
        saleDetails.classList.add("sale-detail");
        saleDetails.append(saleInfo, saleDescription);

        let div = document.createElement("div");
        div.classList.add("sale-item");
        div.append(img, saleDetails);
        return div;
    }
}