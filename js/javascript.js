//smooth scrolling - JQuery Easin plugin
$(function() {
    $('.smooth-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-50
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });
});


$(document).ready(function(){

  var $window = $(window); 
  $('section[data-type="background"]').each(function(){
    var $bgobj = $(this); // assigning the object
    $(window).scroll(function() {
     var yPos = -( ($window.scrollTop() - $bgobj.offset().top) / $bgobj.data('speed'));
      // Put together our final background position
      var coords = '50% '+ yPos + 'px';
      // Move the background
      $bgobj.css({ backgroundPosition: coords });
      });
  });
});




//WORK IN PROGRESS -- CLICK TO CHANGE NAVBAR 
/*var toggle = true;

$('.navbar-toggle').click(function(){
 
if($(this).scrollTop() < 125){
if(toggle == true){
    $('.navbar').css({"background":"#192f42"});
    
    $('.navbar').css({"border-bottom": "4px solid beige"});
    $('#logo').css({"height": "50px"});
    $('.navbar').css({"padding-bottom": "0px"});
    toggle = false;
  }

else{

  $('.navbar').css({"background":"transparent"});
       $('.navbar-collapse').css({"background":"transparent"});
       $('.navbar').css({"border-bottom": "0px solid white"});
       $('#logo').css({"height": "90px"});
       toggle = true;
}

}

});*/




$(document).scroll(function(){
    if($(this).scrollTop() > 100)
    {   
       $('.navbar').css({"background":"#303030"});
       $('.navbar').css({"border-bottom": "4px solid gray"});
       $('#logo').css({"height": "50px"});
       $('.navbar').css({"padding-bottom": "0px"});
    } else {
       
       $('.navbar').css({"background":"transparent"});
        $('.navbar-recruit').css({"background-color": "rgba(48, 48, 48, .4)"});
       $('.navbar-collapse').css({"background":"transparent"});
       $('.navbar').css({"border-bottom": "0px solid white"});
       $('#logo').css({"height": "65px"});


    }
    
    
});


$(window).scroll(function(){
    if($(window).scrollTop() < 10){
        $('#conquer').css('opacity','1.0');
        $('#challenge').css('opacity','0');
    }
    else if($(window).scrollTop() > 10
                && $(window).scrollTop() < 20){
        $('#conquer').css('opacity','.9');
        $('#challenge').css('opacity','.1');
        
    }
    else if($(window).scrollTop() > 20
                && $(window).scrollTop() < 30){
        $('#conquer').css('opacity','.8');
        $('#challenge').css('opacity','.2');   
    }
    else if($(window).scrollTop() > 30
                && $(window).scrollTop() < 40){
        $('#conquer').css('opacity','.7');
        $('#challenge').css('opacity','.3');   
    }
    else if($(window).scrollTop() > 40
                && $(window).scrollTop() < 55){
        $('#conquer').css('opacity','.6');
        $('#challenge').css('opacity','.4');   
    }
    else if($(window).scrollTop() > 55
                && $(window).scrollTop() < 70){
        $('#conquer').css('opacity','.5');
        $('#challenge').css('opacity','.5');   
    }
    else if($(window).scrollTop() > 70
                && $(window).scrollTop() < 85){
        $('#conquer').css('opacity','.4');
        $('#challenge').css('opacity','.6');   
    }
    else if($(window).scrollTop() > 85
                && $(window).scrollTop() < 100){
        $('#conquer').css('opacity','.3');
        $('#challenge').css('opacity','.7');   
    }
    else if($(window).scrollTop() > 100
                && $(window).scrollTop() < 110){
        $('#conquer').css('opacity','.2');
        $('#challenge').css('opacity','.8');   
    }
    else if($(window).scrollTop() > 110
                && $(window).scrollTop() < 120){
        $('#conquer').css('opacity','.1');
        $('#challenge').css('opacity','.9');   
    }
    else if($(window).scrollTop() > 120){
        $('#conquer').css('opacity','0');
        $('#challenge').css('opacity','1.0');   
    }
    
    
    
    
});

/*Function to show hidebar*/
$("#menu-toggle, .mask, #close-button").click(function(e) {
    $('.mask').toggleClass('toggled');
    $('#slide-wrapper').toggleClass('toggled');
    if($('#slide-wrapper').css('visibility') === 'visible'){
        $('#logo').css('transition','.25s');
        $('#logo').css('-o-transition','.25s');
        $('#logo').css('-ms-transition','.25s');
        $('#logo').css('-moz-transition','.25s');
        $('#logo').css('-webkit-transition','.25s');
        $('.navbar').css('visibility', 'visible');
    }
    else{
        $('.navbar').css('visibility', 'hidden');
        $('#logo').css('transition','0s');
        $('#logo').css('-o-transition','0s');
        $('#logo').css('-ms-transition','0s');
        $('#logo').css('-moz-transition','0s');
        $('#logo').css('-webkit-transition','0s');
            
            
    }
});

$('.mask').click(function(e){
    console.log("CLICKED");
    
});




//#192f42

//different test colors
//FFCC66
//8ABBCC
//00254A
//00254A
//FFCC00