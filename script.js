const header = document.querySelector(".main__header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const logo = document.querySelector("#logo");

logo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const elements = document.querySelectorAll(".skill__card, .project-card, .timeline__content");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add("show");
    }
    });
}, {
    threshold: 0.2
});

elements.forEach(el => observer.observe(el));
