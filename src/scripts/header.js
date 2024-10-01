document
  .getElementById("header-icon-open-navbar")
  .addEventListener("click", () => {
    const navbarCurrent = document.getElementById("navbar-id");
    if (navbarCurrent.classList.contains("translate-x-full")) {
      navbarCurrent.classList.remove("translate-x-full");
    }
  });

document
  .getElementById("header-icon-close-navbar")
  .addEventListener("click", () => {
    const navbarCurrent = document.getElementById("navbar-id");
    if (!navbarCurrent.classList.contains("translate-x-full")) {
      navbarCurrent.classList.add("translate-x-full");
    }
  });
