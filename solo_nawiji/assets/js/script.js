document.querySelectorAll('a.nav-link[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    let targetElement = document.querySelector(this.getAttribute("href"));
    if (targetElement) {
      let offset = 70;
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth",
      });
    }
  });
});
