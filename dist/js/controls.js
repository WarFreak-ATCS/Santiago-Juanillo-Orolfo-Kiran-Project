const controls = document.querySelector('.slider__controls');
const images = document.querySelectorAll('.banner__items img');
const texts = document.querySelectorAll('.banner__items--text');

images.forEach((image) => {
    image.addEventListener("mouseover", () => {
        controls.classList.add("open");
        });

        image.addEventListener("mouseleave", () => {
            controls.classList.remove("open");
            });           
});

texts.forEach((text) => {
    text.addEventListener("mouseover", () => {
        controls.classList.add("open");
        });
});

controls.addEventListener("mouseover", () => {
controls.classList.add("open");
});
controls.addEventListener("mouseleave", () => {
controls.classList.remove("open");
});