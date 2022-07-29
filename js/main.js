const btnNavToggle = document.querySelector(".nav-bar__navigation-toggle-btn");
const navBarLinks = document.querySelector(".nav-bar__navigation-links");

btnNavToggle.addEventListener("click", () => {
    navBarLinks.classList.toggle("nav-bar__navigation-links-active");
});
// const nav = document.querySelector(".navigation");
// const introSection = document.querySelector(".main__intro");
// const sectionOneOptions = {};

// const introObserver = new IntersectionObserver((entries, introObserver) => {
//     entries.forEach((entry) => {
//         if (!entry.isIntersecting) {
//             nav.style.position = "fixed";
//         }
//     });
// }, sectionOneOptions);

// introObserver.observe(introSection);
