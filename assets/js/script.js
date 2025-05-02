(function ($) {
   'use strict';


   const selectedLang = document.getElementById("selectedLang");
   const dropdownMenu = document.getElementById("dropdownMenu");

   selectedLang.addEventListener("click", () => {
      dropdownMenu.classList.toggle("active");
   });

   document.addEventListener("mousedown", (event) => {
      if (!selectedLang.contains(event.target) && !dropdownMenu.contains(event.target)) {
         dropdownMenu.classList.remove("active");
      }
   });

   dropdownMenu.addEventListener("click", (e) => {
      const item = e.target.closest(".item");
      if (item) {
         const imgSrc = item.dataset.img;
         const alt = item.querySelector("img")?.alt || 'Lang';
         selectedLang.innerHTML = `<img src="${imgSrc}" alt="${alt}">`;
         dropdownMenu.classList.remove("active");
      }
   });





   $(document).ready(function () {
      var button = $(".menu-open");
      var menu_wrap = $("#menu_wrap,.menu-wrap");
      var bar_close = $("#bar_close");
      button.click(function () {
         if (menu_wrap.hasClass("open-mobilemenu")) {
            bar_close.removeClass("ti-close").addClass("ti-align-justify");
            menu_wrap.removeClass("open-mobilemenu");
         } else {
            menu_wrap.addClass("open-mobilemenu");
            bar_close.removeClass("ti-align-justify").addClass("ti-close");
         }
      });
   });



   /* submenu-open js */
   document.addEventListener('DOMContentLoaded', function () {
      var submenuOpenItems = document.querySelectorAll('.submenu-open');

      submenuOpenItems.forEach(function (item) {
         item.addEventListener('click', function () {
            this.classList.toggle('active');

            submenuOpenItems.forEach(function (otherItem) {
               if (otherItem !== item) {
                  otherItem.classList.remove('active');
               }
            });
         });
      });
   });





   //  hero_slider_inner
   $('.hero_slider_inner').slick({
      autoplay: false,
      speed: 1000,
      fade: true,
      dots: true,
      arrows: false,
      lazyLoad: 'progressive'
   });


   // tab js 
   document.addEventListener('DOMContentLoaded', function () {
      const tabBtns = document.querySelectorAll('.tabBtn');
      tabBtns.forEach(button => {
         button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            tabBtns.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const allContents = document.querySelectorAll('.courses_content');
            allContents.forEach(content => content.classList.remove('active'));
            const selectedTabContent = document.getElementById(tabId);
            if (selectedTabContent) {
               selectedTabContent.classList.add('active');
            } else {

            }
         });
      });
      const defaultTab = 'tab1';
      const defaultTabContent = document.getElementById(defaultTab);
      if (defaultTabContent) {
         defaultTabContent.classList.add('active');
         document.querySelector(`[data-tab="${defaultTab}"]`).classList.add('active');
      } else {

      }
   });


   // team_slider
   $(document).ready(function () {
      $('.team_slider').slick({
         infinite: true,
         slidesToShow: 4,
         slidesToScroll: 1,
         dots: false,
         arrows: true,
         responsive: [
            {
               breakpoint: 1399,
               settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
               }
            },
            {
               breakpoint: 991,
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  dots: true,
                  arrows: false,
               }
            },
            {
               breakpoint: 767,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true,
                  arrows: false,
               }
            }
         ]
      });
   });

   // testimonil slider
   const swiper2 = new Swiper(".Swiper2", {
      effect: "cards",
      grabCursor: true,
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
   });

   // marquee text slider js
   const swiper = new Swiper('.slider-active', {
      loop: true,
      freeMode: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      allowTouchMove: false,
      speed: 6000,
      autoplay: {
         delay: 1,
         disableOnInteraction: true,
      },
   });

   /* WATCH VIDEO */

   $('.popup-youtube').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
   });

   /*   counter UP */
   $(document).ready(function () {
      $('.count').counterUp({
         delay: 10,
         time: 1500
      });
   });








   /*------------------------------------------
       = WOW ANIMATION SETTING
   -------------------------------------------*/
   var wow = new WOW({
      boxClass: 'wow', // default
      animateClass: 'animated', // default
      offset: 0, // default
      mobile: true, // default
      live: true // default
   });

   //active wow
   wow.init();


})(jQuery)



