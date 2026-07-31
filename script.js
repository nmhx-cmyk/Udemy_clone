(function () {
  "use strict";

  // Mobile drawer
  var menuToggle = document.getElementById("menuToggle");
  var drawer = document.getElementById("mobileDrawer");
  var drawerClose = document.getElementById("drawerClose");

  function openDrawer() {
    drawer.classList.add("open");
    menuToggle.setAttribute("aria-expanded", "true");
  }
  function closeDrawer() {
    drawer.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  menuToggle.addEventListener("click", openDrawer);
  drawerClose.addEventListener("click", closeDrawer);
  drawer.addEventListener("click", function (e) {
    if (e.target === drawer) closeDrawer();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeDrawer();
  });

  // Course carousels
  var carouselButtons = document.querySelectorAll(".carousel__button");
  carouselButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var track = document.getElementById(btn.dataset.target);
      var dir = Number(btn.dataset.dir);
      var cardWidth = track.querySelector(".course-card").offsetWidth + 18;
      track.scrollBy({ left: dir * cardWidth * 2, behavior: "smooth" });
    });
  });
})();
