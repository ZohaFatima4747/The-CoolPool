document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll to Services section
  document
    .getElementById("servicesBtn")
    ?.addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelector("#services")
        ?.scrollIntoView({ behavior: "smooth" });
    });

  // Get all gallery images and modal functionality
  const galleryImages = document.querySelectorAll(".gallery-img");
  const modal = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeModal = document.getElementById("close-modal");

  galleryImages.forEach((img) => {
    img.addEventListener("click", function () {
      modal.style.display = "flex";
      lightboxImg.src = this.src;
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Timing Popup Functionality
  const timingCards = document.querySelectorAll(".timing-card");
  const popup = document.getElementById("timing-popup");
  const popupMessage = document.getElementById("popup-message");
  const closePopup = document.getElementById("close-popup");

  function showPopup(message) {
    popupMessage.textContent = message;
    popup.style.display = "block";
  }

  timingCards.forEach((card) => {
    card.addEventListener("click", () => {
      const day = card.getAttribute("data-day");

      if (day === "monday-thursday") {
        showPopup("We are open Monday to Thursday from 9:00 AM to 8:00 PM.");
      } else if (day === "friday") {
        showPopup("We are open on friday from 2:00 PM to 8:00 PM.Open to Womens only.");
      } else if (day === "saturday-sunday") {
        showPopup("We are open Saturday to Sunday from 9:00 AM to 8:00 PM.");
      }
    });
  });

  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Google Maps Button Functionality
  document
    .getElementById("location-btn")
    ?.addEventListener("click", function () {
      const locationUrl = "https://goo.gl/maps/8dKHLEKQa2vProwM6";
      window.open(locationUrl, "_blank");
    });

  // Smooth scroll to Contact section when button clicked
  document
    .getElementById("contactBtn")
    ?.addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelector("#contact")
        ?.scrollIntoView({ behavior: "smooth" });
    });

  // Smooth scroll for all navbar links
  document.querySelectorAll(".nav-links a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute("href"));
      targetSection?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  // Toggle hamburger menu for mobile view
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger?.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Smooth scroll + close menu after clicking on navbar links (Mobile)
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetSection = document.querySelector(link.getAttribute("href"));
      targetSection?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      navLinks.classList.remove("active"); // Close menu after clicking
    });
  });
});
