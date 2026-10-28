"use strict";

const stars = Array.from(document.querySelectorAll(".star"));
const starsContainer = document.querySelector(".stars");
const ratingMessage = document.querySelector("#rating-message");
const resetButton = document.querySelector("#reset-rating");

let selectedRating = 0;
let hoveredRating = 0;

function updateStars(rating) {
  stars.forEach((star) => {
    const starRating = Number(star.dataset.rating);
    const isActive = starRating <= rating;

    star.classList.toggle("is-active", isActive);
    star.setAttribute(
      "aria-pressed",
      String(starRating === selectedRating),
    );
  });
}

function updateMessage() {
  ratingMessage.textContent = selectedRating
    ? `You rated ${selectedRating} out of 5 stars.`
    : "You haven't rated yet.";
}

stars.forEach((star) => {
  star.addEventListener("mouseover", () => {
    hoveredRating = Number(star.dataset.rating);
    updateStars(hoveredRating);
  });

  star.addEventListener("focus", () => {
    hoveredRating = Number(star.dataset.rating);
    updateStars(hoveredRating);
  });

  star.addEventListener("click", () => {
    selectedRating = Number(star.dataset.rating);
    hoveredRating = 0;
    updateStars(selectedRating);
    updateMessage();
  });
});

starsContainer.addEventListener("mouseleave", () => {
  hoveredRating = 0;
  updateStars(selectedRating);
});

starsContainer.addEventListener("focusout", (event) => {
  if (!starsContainer.contains(event.relatedTarget)) {
    hoveredRating = 0;
    updateStars(selectedRating);
  }
});

resetButton.addEventListener("click", () => {
  selectedRating = 0;
  hoveredRating = 0;
  updateStars(0);
  updateMessage();
});

updateStars(selectedRating);
