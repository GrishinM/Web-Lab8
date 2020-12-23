class Sale {
    startDate;
    endDate;
    name;
    description;
    image;

    constructor(startDate, endDate, name, description, image)
    {
        this.startDate = startDate;
        this.endDate = endDate;
        this.name = name;
        this.description = description;
        this.image = image;
    }

    toHTMLString()
    {
        let div = document.createElement("div");
        div.classList.add("sale-item");
        let img = document.createElement("img");
        img.src = this.image;

        let name = document.createElement("p");
        name.classList.add("sale-name");
        name.textContent = this.name;

        let date = document.createElement("p");
        date.classList.add("sale-date");
        date.textContent = this.startDate + "-" + this.endDate;

        let saleDetails = document.createElement("div");
        saleDetails.classList.add("sale-detail");

        let saleInfo = document.createElement("div");
        saleInfo.classList.add("sale-info");

        saleInfo.appendChild(name);
        saleInfo.appendChild(date);

        let description = document.createElement("p");
        description.textContent = this.description;

        let saleDescription = document.createElement("div");
        saleDescription.classList.add("sale-description");
        saleDescription.appendChild(description);
        
        saleDetails.appendChild(saleInfo);
        saleDetails.appendChild(saleDescription);

        div.appendChild(img);
        div.appendChild(saleDetails);
        
        return div;
    }
}

let counter = 0;
let sales = [
    new Sale("2020/10/08", "2020/10/09", "Скидка на покупку машина-нейм", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "../images/sale.jpg"),
    new Sale("2020/10/08", "2020/10/09", "Скидка на покупку машина-нейм", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "../images/sale.jpg"),
    new Sale("2020/10/08", "2020/10/09", "Скидка на покупку машина-нейм", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "../images/sale.jpg"),
    new Sale("2020/10/08", "2020/10/09", "Скидка на покупку машина-нейм", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "../images/sale.jpg"),
    new Sale("2020/10/08", "2020/10/09", "Скидка на покупку машина-нейм", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "../images/sale.jpg"),
    new Sale("2020/10/08", "2020/10/09", "Скидка на покупку машина-нейм", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "../images/sale.jpg"),
]