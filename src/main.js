// import Swiper from "swiper";
import "./styles/index.scss";

// let burger = document.querySelector(".burger");
// let list = document.querySelector(".nav-list");

// burger.addEventListener("click", () => {
//   list.classList.toggle("open");
//   list.classList.contains("open")
//     ? burger.classList.add("rotated")
//     : burger.classList.remove("rotated");
// });

const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  //   centeredSlides: true,
  freeMode: true,
  spaceBetween: 80,
  mousewheel: {
    releaseOnEdges: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    hide: true,
    dragClass: "swiper-scrollbar-drag",
  },
});

const complexSwiper = new Swiper(".myComplexSwiper", {
  slidesPerView: "auto",
  //   centeredSlides: true,
  freeMode: true,
  spaceBetween: 20,
  mousewheel: {
    releaseOnEdges: true,
  },
  scrollbar: {
    el: ".complex-swiper-scrollbar",
    draggable: true,
    hide: true,
    dragClass: "complex-swiper-scrollbar-drag",
  },
});
const wrapper = document.querySelector(".wrapper");
const swiperMargin = document.querySelectorAll(".swiper-ml");

swiperMargin.forEach((item) => (item.style.marginLeft = 20 + wrapper.offsetLeft + "px"));

window.addEventListener("resize", () => {
  if (document.documentElement.clientWidth < 468) {
    swiperMargin.forEach((item) => (item.style.marginLeft = 5 + wrapper.offsetLeft + "px"));
  } else {
    swiperMargin.forEach((item) => (item.style.marginLeft = 20 + wrapper.offsetLeft + "px"));
  }
});
