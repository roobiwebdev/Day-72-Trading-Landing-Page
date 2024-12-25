window.onload = () => {
  document.querySelector(".loading-wrapper").classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
};

const menu = document.querySelector("#menu");
const navBar = document.querySelector("#nav-bar");
const navLink = document.querySelectorAll("#nav-link");

menu.addEventListener("click", () => {
  navBar.classList.toggle("left-[0]");

  menu.classList.toggle("ri-close-large-line");
});

new Swiper(".swiper", {
  loop: true,
  speed: 2000,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnIntraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,

  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    760: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


if (window.innerWidth >= 760) {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 300,
    reset: true,
  });

  sr.reveal(".nav_data", { delay: 700 });
  sr.reveal(".head_scale_data", { scale: 1.5 });
  sr.reveal(".scale_data", { scale: 0.5, delay: 700 });

  sr.reveal(".left_data", { distance: "300px", origin: "left", delay: 900 });
  sr.reveal(".right_data", { distance: "300px", origin: "right", delay: 900 });

  sr.reveal(".footer", { distance: "300px", origin: "bottom" });
}
