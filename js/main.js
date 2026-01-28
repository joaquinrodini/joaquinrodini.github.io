// document.addEventListener("DOMContentLoaded", () => {
//   const cursorLight = document.querySelector(".cursor-light");

//   let timeout;
//   let isMoving = false;

//   document.addEventListener("mousemove", (e) => {
//     cursorLight.style.left = `${e.clientX}px`;
//     cursorLight.style.top = `${e.clientY}px`;

//     cursorLight.style.opacity = "1";

//     // If the mouse is moving, reset the timeout to fade out the cursor light later
//     // if (!isMoving) {
//     //   isMoving = true;
//     //   clearTimeout(timeout);
//     // }

//     // timeout = setTimeout(() => {
//     //   cursorLight.style.opacity = "1";
//     //   isMoving = false;
//     // }, 300);
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// Fade in projects on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, observerOptions);

document.querySelectorAll(".project").forEach((project) => {
  observer.observe(project);
});

// Dark mode toggle
const themeToggle = document.getElementById("themeToggle");
const htmlElement = document.documentElement;

const currentTheme = localStorage.getItem("theme") || "light";
htmlElement.setAttribute("data-theme", currentTheme);

function updateIcon(theme) {
  const icon = themeToggle.querySelector("i");
  if (theme === "dark") {
    icon.className = "icon-sun";
  } else {
    icon.className = "icon-moon";
  }
}

updateIcon(currentTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  htmlElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateIcon(newTheme);
});
