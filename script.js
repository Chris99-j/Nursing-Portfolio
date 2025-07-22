let current = 0;
const slides = document.querySelectorAll(".slide");
const navLinks = document.querySelectorAll("nav a");
let autoSlideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
  current = index;
}

function nextSlide() {
  let next = (current + 1) % slides.length;
  showSlide(next);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 10000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    stopAutoSlide();

    const id = link.getAttribute("href").substring(1);
    const index = [...slides].findIndex(slide => slide.id === id);
    if (index !== -1) {
      showSlide(index);
    }

    startAutoSlide();
  });
});

startAutoSlide(); // always run
