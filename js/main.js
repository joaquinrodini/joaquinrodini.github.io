document.addEventListener("DOMContentLoaded", () => {
  const cursorLight = document.querySelector(".cursor-light");

  let timeout;
  let isMoving = false;

  document.addEventListener("mousemove", (e) => {
    cursorLight.style.left = `${e.clientX}px`;
    cursorLight.style.top = `${e.clientY}px`;

    cursorLight.style.opacity = "1";

    // If the mouse is moving, reset the timeout to fade out the cursor light later
    // if (!isMoving) {
    //   isMoving = true;
    //   clearTimeout(timeout);
    // }

    // timeout = setTimeout(() => {
    //   cursorLight.style.opacity = "1";
    //   isMoving = false;
    // }, 300);
  });
});

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
