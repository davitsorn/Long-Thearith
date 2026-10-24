const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const classes = entry.target.classList;

    let animationClass = "";
    if (classes.contains("fade-left")) animationClass = "enableFadeLeft";
    else if (classes.contains("fade-right")) animationClass = "enableFadeRight";
    else if (classes.contains("fade-up")) animationClass = "enableFadeUp";
    else if (classes.contains("fade-in")) animationClass = "enableFadeIn";
    else if (classes.contains("progress-bar-animation"))
      animationClass = "enableProgressBarAnimation";

    if (entry.isIntersecting) {
      entry.target.classList.add(animationClass);
    }
  });
});

const animatedElements = document.querySelectorAll(
  ".fade-left, .fade-right, .fade-up, .fade-in, .progress-bar-animation",
);
animatedElements.forEach((el) => observer.observe(el));

const heroSection = document.querySelector("main > section:first-of-type");
if (heroSection) {
  heroSection.addEventListener("pointermove", (event) => {
    const rect = heroSection.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    heroSection.style.setProperty("--pointer-x", `${x * 8}px`);
    heroSection.style.setProperty("--pointer-y", `${y * 8}px`);
  });

  heroSection.addEventListener("pointerleave", () => {
    heroSection.style.removeProperty("--pointer-x");
    heroSection.style.removeProperty("--pointer-y");
  });
}

var typed = new Typed(".auto-type", {
  strings: ["Long Thearith"],
  typeSpeed: 100,
  backSpeed: 100,
  cursor: false,
  loop: true,
});
