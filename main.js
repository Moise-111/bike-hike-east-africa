// Select elements with fade-in classes
const fadeElements = document.querySelectorAll('.fade-in-left, .fade-in-right');

const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeElements.forEach(el => {
  observer.observe(el);
});

const images = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
// Modal open/close
const openBtn = document.getElementById('openBooking');
const modal = document.getElementById('bookingModal');
const closeBtn = document.getElementById('closeBooking');

openBtn.addEventListener('click', () => modal.style.display = 'flex');
closeBtn.addEventListener('click', () => modal.style.display = 'none');

// Close modal if clicked outside content
window.addEventListener('click', (e) => {
    if(e.target === modal) modal.style.display = 'none';
});


document.querySelectorAll(".faq-question").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
        const answer = item.nextElementSibling;

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});
const showMoreBtn = document.getElementById("show-more-services");
const moreServices = document.getElementById("more-services");

showMoreBtn.addEventListener("click", () => {
    moreServices.classList.toggle("hidden");
    showMoreBtn.textContent = moreServices.classList.contains("hidden") ? "See All Experiences" : "Hide Experiences";
});
// MOBILE MENU
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Close menu after clicking link
document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});
