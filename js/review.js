class Review {
    author;
    text;
    starCount;

    constructor(author, text, starCount)
    {
        this.author = author;
        this.text = text;
        this.starCount = starCount;
    }

    ToHTMLString() {
        let img = document.createElement("img");
        img.classList.add("review-rate-img");
        img.src = "../images/Rates/" + this.starCount + "Stars.png";
        let author = document.createElement("p");
        author.classList.add("review-author");
        author.textContent = this.author;
        let description = document.createElement("p");
        description.classList.add("review-text");
        description.textContent = this.text;
        let content = document.createElement("div");
        content.classList.add("review-description");
        content.appendChild(author);
        content.appendChild(description);
        let review = document.createElement("div");
        review.classList.add("review-container");
        review.appendChild(img);
        review.appendChild(content);
        return review;
    }
}