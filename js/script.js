// Announcement Bar
$("header nav").css("margin-top", "35px");
$(".announcement-bar .fa-close").click(() => {
  $(".announcement-bar").hide();
  $("header nav").css("margin-top", "0");
});

// Navigation toggle
$(".menu-toggler-close").hide();
$(".nav-menu-mobile-wrapper").hide();

function toggleMenu(status) {
  if (status === "open") {
    $(".menu-toggler-open").hide();
    $(".menu-toggler-close").show();
    $(".nav-menu-mobile-wrapper").show();
  }
  if (status === "close") {
    $(".menu-toggler-open").show();
    $(".menu-toggler-close").hide();
    $(".nav-menu-mobile-wrapper").hide();
  }
}

$(".menu-toggler-open").click(() => {
  toggleMenu("open");
});

$(".menu-toggler-close").click(() => {
  toggleMenu("close");
});

$(".nav-menu-mobile-wrapper .menu-item").click(() => {
  $(".nav-menu-mobile-wrapper .sub-menu").removeClass("hide-menu");
});

$(".nav-menu-mobile-wrapper .back-btn").click((e) => {
  e.stopPropagation();
  $(".nav-menu-mobile-wrapper .sub-menu").addClass("hide-menu");
});

// Slider
$(".nav-menu-mobile-wrapper .owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 14,
  stagePadding: 45,
  nav: "",
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
      nav: true,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 5,
      nav: true,
      loop: false,
    },
  },
});
