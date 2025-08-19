// Wait until everything loads
window.addEventListener("load", () => {
    // Add fade-in effect
    document.body.classList.add("fade-in");
  
    // Auto-scroll
    setTimeout(() => {
      const aboutSection = document.querySelector("#about-section");
      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: "smooth"
        });
      }
    }, 1599);
  });
  