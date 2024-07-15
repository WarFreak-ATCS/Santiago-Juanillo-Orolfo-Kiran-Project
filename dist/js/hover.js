const cards = document.querySelectorAll('.sponsor__card');
const hovers = document.querySelectorAll('.sponsor__card--hover');
cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
        addHover();
    });

    card.addEventListener("mouseleave", () => {
        removeHover();
    });
});

function addHover() {
    hovers.forEach((hover) => {
        hover.classList.add("hover");
    });
}

function removeHover() {
    hovers.forEach((hover) => {
        hover.classList.remove("hover");
    }); 
}