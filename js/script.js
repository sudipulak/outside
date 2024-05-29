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
$(".nav-menu-mobile-wrapper .close-btn").click((e) => {
  e.stopPropagation();
  $(".nav-menu-mobile-wrapper .sub-menu").addClass("hide-menu");
});
// Slider
$("header .owl-carousel").owlCarousel({
  loop: true,
  margin: 14,
  stagePadding: 45,
  responsiveClass: true,
  nav: true,
  responsive: {
    0: {
      items: 2,
      nav: false,
    },
    768: {
      nav: false,
      items: 3,
    },
    1024: {
      nav: true,
      loop: false,
      items: 4,
      stagePadding: 0,
    },
  },
});

// Playbox year toggle

$(".nav-menu-desktop-wrapper .sub-menu .box2").hide();
function toggleYear(box) {
  $(".box").hide();
  $(`.box${box}`).show();
  $(".nav-menu-desktop-wrapper .col-quarter ul a").removeClass("active");
  $(`.nav-menu-desktop-wrapper .col-quarter ul a.${box}`).addClass("active");
}
