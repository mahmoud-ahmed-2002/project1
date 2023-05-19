
//  ---------------------- snipeer

$(document).ready(function () {
  $(".snipeer").fadeOut(3000);
});

//  ---------------------- navbar scroll script 


let headerNav = document.querySelector('.header');
let navScroll = document.querySelector('.nav-scroll');

console.log(navScroll)

onscroll = (event) => {
  if (window.pageYOffset > headerNav.clientHeight) {
    // headerNav.classList.add('d-none');
    navScroll.classList.add('scroll');
  } else {
    // headerNav.classList.remove('d-none');
    navScroll.classList.remove('scroll');
  }
};

// -------------- slid down and up section add queation
$("#addComment").click(function () {
  $("#addComment").hide();
  $("#form-group-comment").slideDown();
});


// ----------------- edit layout of page dacboard 

window.onresize = () => {
  refreWidth()
}


function refreWidth() {
  let dasboardWidth = $('.dasboard-meun').outerWidth() + 5 + 'px';
  let pageTopbarHeight = $('.page-topbar').outerHeight() + 5 + 'px';
  $('.page-topbar').css('left', dasboardWidth);
  $('.main-content').css({ 'left': dasboardWidth, 'top': pageTopbarHeight });

}
refreWidth()

 //MainSlider
 var mainSlider = new Swiper(".mainSliderContainer", {
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  // effect: "fade",
  speed: 500,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".mainsliderPagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".mainSliderNext",
    prevEl: ".mainsliderPrev",
  },
});