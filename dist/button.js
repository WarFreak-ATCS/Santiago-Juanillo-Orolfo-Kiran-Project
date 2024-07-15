const button = document.querySelector(".donate");
window.addEventListener("resize", () => {
    if (window.outerWidth <= 700) {
        button.classList.add("mobileHeader");
        button.classList.remove("straightHeader");
    } else {
        button.classList.add("straightHeader");
        button.classList.remove("mobileHeader");
    }
});