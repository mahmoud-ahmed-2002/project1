// -------------- slid down and up section add queation
$("#addComment").click(function () {
  $("#addComment").hide();
  $("#form-group-comment").slideDown();
});


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