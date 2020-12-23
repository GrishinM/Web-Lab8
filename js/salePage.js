window.onload = function() {
    let div = document.querySelector(".sales-container");
    sales.forEach(k => div.appendChild(k.toHTMLString()));
}