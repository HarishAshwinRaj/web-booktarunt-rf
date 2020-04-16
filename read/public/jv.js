$(document).ready(function(){
    $(".sidenav").sidenav();
    $('.dropdown-trigger').dropdown(   {
      constrainWidth :false,
      closeOnClick:false,
      //container:"div"
    });
    //carousel for dash base;
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });
    
})
