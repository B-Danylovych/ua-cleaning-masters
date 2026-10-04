const mainHeader = document.getElementById("mainHeader");

window.addEventListener("scroll", () => {
    mainHeader.classList.toggle("scrolled", window.scrollY > 0);
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("menu-open");
});

const steps = document.querySelectorAll(".howItWorksStep");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
});

steps.forEach(step => {
    observer.observe(step);
});

const serviceBlocks = document.querySelectorAll(".serviceBlock");

serviceBlocks.forEach(block => {
    const button = block.querySelector(".learnMoreButton");

    button.addEventListener("click", () => {
        const isExpanded = block.classList.toggle("expanded");

        button.textContent = isExpanded
            ? "Show less ↑"
            : "Learn more →";
    });
});

const serviceBenefits = document.querySelectorAll(".serviceBenefit");

serviceBenefits.forEach(benefit => {
    observer.observe(benefit);
});