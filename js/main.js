// Loading
let Loading = document.querySelector(".loading");

let loading_func = function(){
  Loading.style.opacity = "0";
  document.body.style.overflow = "auto";
}
setTimeout(loading_func,1800);
let d_none = function(){
  Loading.style.display = "none";
}
setTimeout(d_none,2100);


// Swiper Liprary
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    
    effect: "coverflow",
    coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      0:{
        slidesPerView: 1,
      },
      769:{
        slidesPerView: 2,
      },
      992:{
        slidesPerView: 3,
      },
    }
  });


  // Aos Liprary
  AOS.init();