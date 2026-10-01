// ================================
// TWO CONVERSATIONS
// Website JavaScript
// ================================


// Mobile Navigation
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("open");
});


// Close mobile menu after clicking a link
const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


// Navbar background when scrolling
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// Scroll Reveal Animation
const revealElements = document.querySelectorAll(
    ".about, .feature-card, .menu-category, .gallery-card, .instagram-content, .visit-content"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {
    revealObserver.observe(element);
});


// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


// Prevent accidental form submission if forms are added later
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", event => {
        event.preventDefault();
    });
});
// Rating System

const stars = document.querySelectorAll("#stars span");
const ratingMessage = document.getElementById("ratingMessage");
const submitRating = document.getElementById("submitRating");

let selectedRating = 0;

stars.forEach((star) => {
    star.addEventListener("click", () => {
        selectedRating = Number(star.dataset.rating);

        stars.forEach((s) => {
            s.classList.toggle(
                "active",
                Number(s.dataset.rating) <= selectedRating
            );
        });

        ratingMessage.textContent =
            `You selected ${selectedRating} out of 5 stars`;
    });
});

submitRating.addEventListener("click", () => {
    if (selectedRating === 0) {
        ratingMessage.textContent = "Please select a rating first.";
        return;
    }

    ratingMessage.textContent =
        "Thank you for rating Two Conversations! ❤️";
});