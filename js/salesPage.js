let container = document.querySelector(".sales-container");
sales.forEach(sale => container.appendChild(sale.toHTML()));