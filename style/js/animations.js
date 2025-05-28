document.addEventListener("DOMContentLoaded", () => {
  // Click animation for buttons
  const buttons = document.querySelectorAll("a.btn, button");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.currentTarget.classList.add("clicked");
      setTimeout(() => {
        e.currentTarget.classList.remove("clicked");
      }, 300);
    });
  });

  // Scroll animation for sections
  const sections = document.querySelectorAll("section");
  const observerOptions = {
    threshold: 0.1,
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
});
