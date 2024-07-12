const card = document.querySelector('.blog__slider--card');
const hover = document.querySelector('.slider__card-hover');

card.addEventListener("mouseover", () => {
hover.classList.add("open");
});
card.addEventListener("mouseleave", () => {
hover.classList.remove("open");
});
