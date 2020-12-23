class Review {
    author;
    text;
    rating;

    constructor(author, text, starCount) {
        this.author = author;
        this.text = text;
        this.rating = starCount;
    }

    toHTML() {
        let img = document.createElement("img");
        img.classList.add("review-rate-img");
        img.src = "../images/Rates/" + this.rating + "Stars.png";

        let author = document.createElement("p");
        author.classList.add("review-author");
        author.textContent = this.author;

        let description = document.createElement("p");
        description.classList.add("review-text");
        description.textContent = this.text;

        let content = document.createElement("div");
        content.classList.add("review-description");
        content.append(author, description);

        let review = document.createElement("div");
        review.classList.add("review-container");
        review.append(img, content);
        return review;
    }
}