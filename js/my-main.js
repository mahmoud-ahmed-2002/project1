// -------------- slid down and up section add queation
$("#addComment").click(function () {
    $("#addComment").hide();
    $("#form-group-comment").slideDown();
  });


  // ----------------- edit layout of page dacboard 
  
  window.onresize = () => { 
    refreWidth()
  }
  
  
  function refreWidth(){
    let dasboardWidth =$('.dasboard-meun').outerWidth() + 5 +'px';
    let pageTopbarHeight = $('.page-topbar').outerHeight() +5 +'px';
    $('.page-topbar').css('left',dasboardWidth);
    $('.main-content').css({'left':dasboardWidth ,'top':pageTopbarHeight});

  }
  refreWidth()