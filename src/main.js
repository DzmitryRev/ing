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
  spaceBetween: 30,
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

const wrapper = document.querySelector(".wrapper");
const swiperMargin = document.querySelector(".swiper-ml");

swiperMargin.style.marginLeft = 20 + wrapper.offsetLeft + "px";

window.addEventListener("resize", () => {
  if (document.documentElement.clientWidth < 468) {
    swiperMargin.style.marginLeft = 5 + wrapper.offsetLeft + "px";
  } else {
    swiperMargin.style.marginLeft = 20 + wrapper.offsetLeft + "px";
  }
});
