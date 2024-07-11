const controls = document.querySelector('.slider__controls');
const image = document.querySelector('.banner__items img');
const text = document.querySelector('.banner__items--text');

image.addEventListener("mouseover", () => {
controls.classList.add("open");
});

text.addEventListener("mouseover", () => {
controls.classList.add("open");
});
image.addEventListener("mouseleave", () => {
controls.classList.remove("open");
});


controls.addEventListener("mouseover", () => {
controls.classList.add("open");
});
controls.addEventListener("mouseleave", () => {
controls.classList.remove("open");
});