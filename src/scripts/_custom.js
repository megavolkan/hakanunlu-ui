(function () {
  "use strict";

  // const slider = new Swiper(".mySwiper", {
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },
  // });

  function mainNavigation() {
    const navigation = new Navigation(document.getElementById("navigation"), {
      //breakpoint: 1024,
      //overlay: false,
      //overlayColor: "#31A6FF",
      // onInit: function () {
      //   alert("Initialized");
      // }
    });
  }

  // function heroSlider() {
  //   if (document.querySelector('.hero-slider')) {
  //     const swiper = new Swiper('.hero-slider .swiper', {
  //       loop: true,
  //       autoplay: {
  //         delay: 2500,
  //         disableOnInteraction: false,
  //       },
  //       pagination: {
  //         el: ".swiper-pagination",
  //         clickable: true
  //       },
  //       navigation: {
  //         nextEl: '.hero-slider .slider-button-next',
  //         prevEl: '.hero-slider .slider-button-prev',
  //       },
  //     })
  //   }
  // }

  // Portföy Slider
  function portfoySlider() {
    if (document.querySelector(".main-portfoyler-section")) {
      const slider = new Swiper(".main-portfoyler-section .swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".main-portfoyler-section .slider-button-next",
          prevEl: ".main-portfoyler-section .slider-button-prev",
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        },
      });
    }
  }
  // haber Slider
  function haberSlider() {
    if (document.querySelector(".main-haberler-section")) {
      const slider = new Swiper(".main-haberler-section .swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".main-haberler-section .slider-button-next",
          prevEl: ".main-haberler-section .slider-button-prev",
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        },
      });
    }
  }

  // Intl Tel Input

  function telefonInput() {
    const input = document.querySelector("#phone");
    window.intlTelInput(input, {
      // allowDropdown: false,
      // autoPlaceholder: "off",
      // containerClass: "test",
      // countryOrder: ["jp", "kr"],
      // customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
      //   return "e.g. " + selectedCountryPlaceholder;
      // },
      // dropdownContainer: document.querySelector('#custom-container'),
      // excludeCountries: ["us"],
      // fixDropdownWidth: false,
      // formatAsYouType: false,
      // formatOnDisplay: false,
      // geoIpLookup: function(callback) {
      //   fetch("https://ipapi.co/json")
      //     .then(function(res) { return res.json(); })
      //     .then(function(data) { callback(data.country_code); })
      //     .catch(function() { callback(); });
      // },
      // hiddenInput: () => "phone_full",
      // i18n: { 'de': 'Deutschland' },
      initialCountry: "us",
      // nationalMode: false,
      // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
      // placeholderNumberType: "MOBILE",
      // showFlags: false,
      // separateDialCode: true,
      // strictMode: true,
      // useFullscreenPopup: true,
      utilsScript: "./utils.js",
    });
  }

  // Scroll top Button

  function scrollTop() {
    const btnScrollTop = document.getElementById("scrollTop");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        btnScrollTop.classList.remove("hide-btn");
      } else {
        btnScrollTop.classList.add("hide-btn");
      }
    });

    btnScrollTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  function mainNav() {
    const mainNav = document.querySelector(".main-nav");
    const mainNavBg = document.querySelector(".main-nav-bg");
    const btnNavToggler = document.querySelector(".nav-toggler");
    const btnNavClose = document.querySelector(".nav-close");

    const toggleNav = () => mainNav.classList.toggle("active");
    btnNavToggler.addEventListener("click", toggleNav);
    btnNavClose.addEventListener("click", toggleNav);
    mainNavBg.addEventListener("click", toggleNav);
  }

  mainNavigation();
  // heroSlider()
  // telefonInput()
  portfoySlider();
  haberSlider();
  mainNav();
  // initAcc('.accordion.v1', true);
  // scrollTop()
})();
