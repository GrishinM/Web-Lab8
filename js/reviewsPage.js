let container = document.querySelector(".reviews-container")
reviews.forEach(review => container.appendChild(review.toHTML()))