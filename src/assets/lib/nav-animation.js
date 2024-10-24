export const navAnimation = () => {
  const navMenu = document.getElementById("menu-toggle");
  const navWrap = document.getElementsByClassName("main-navigation")[0];

  navMenu.addEventListener("click", () => {
    console.log('clicked something')
    if (navMenu.classList.contains("is-clicked")) {
      navMenu.classList.remove("is-clicked");
      navWrap.classList.remove("open");
    } else {
        navMenu.classList.add("is-clicked");
        navWrap.classList.add("open");
    }
  });
};
