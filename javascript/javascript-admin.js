const aside = document.querySelector("aside");
const navArrow = document.querySelector(".nav-arrow");

aside.addEventListener("click", (e) => {
  if (e.target.closest(".choice")) {
    document.querySelectorAll(".choice").forEach((item) => {
      item.classList.remove("choosed");
    });
    document.querySelector(".sub-nav").classList.remove("opened");
    if (e.target.closest(".choice").classList.contains("sub")) {
      document.querySelector(".sub-nav").classList.add("opened");
    }

    e.target.closest(".choice").classList.add("choosed");
  }
});
navArrow.addEventListener("click", () => {
  aside.classList.toggle("aside-display");
});
document.querySelector(".right-arrow-nav").addEventListener("click", () => {
  aside.classList.toggle("aside-display");
});
