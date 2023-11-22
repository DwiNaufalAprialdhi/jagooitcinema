// Submit Filter

const trend = document.querySelector(".film-trend");
const favorite = document.querySelector(".film-favorite");

function allSubmit() {
  console.log("all");
  favorite.classList.remove("d-none");
  trend.classList.remove("d-none");
}

function trendSubmit() {
  console.log("trend");
  favorite.classList.add("d-none");
  trend.classList.remove("d-none");
}

function favoriteSubmit() {
  console.log("favorite");
  favorite.classList.remove("d-none");
  trend.classList.add("d-none");
}

// Toggle Chair
document.addEventListener("DOMContentLoaded", function () {
  const seats = document.querySelectorAll(".seat");

  seats.forEach((seat) => {
    seat.addEventListener("click", function () {
      if (!seat.classList.contains("occupied")) {
        seat.classList.toggle("selected");
      }
    });
  });
});
