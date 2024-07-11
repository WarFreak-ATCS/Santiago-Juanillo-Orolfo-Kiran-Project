const card = document.querySelector('.sponsor__item');
const hover = document.querySelector('.sponsor__hover');

card.addEventListener("mouseover", () => {
hover.classList.add("open");
});
card.addEventListener("mouseleave", () => {
hover.classList.remove("open");
});