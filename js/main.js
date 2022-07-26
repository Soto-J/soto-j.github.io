const navbar = document.querySelector(".nav-bar");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("sticky", window.scrollY > 100);
});
