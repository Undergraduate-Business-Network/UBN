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
    
$('.sponsor-logo').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
    
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});


						
/*
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
*/



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



/**
 *  Function for the navigation bar to show as the user scrolls down
 **/
$(document).scroll(function(){
    if($(this).scrollTop() > 100)
    {   
       $('.navbar').css({"background":"#007bb5"});
        //$('.navbar').css({"background":"#313335"});
       $('.navbar').css({"border-bottom": "5px solid #313335"});
       $('#logo').css({"height": "50px"});
       $('.navbar').css({"padding-bottom": "0px"});
       $('.navbar').css('transition', '.5s');
        $('.navbar').css('-o-transition', '.5s');
        $('.navbar').css('-moz-transition', '.5s');
        $('.navbar').css('-webkit-transition', '.5s');
        $('.navba').css('-ms-transition', '.5s');

     
       
    } else {
       
       $('.navbar').css({"background":"transparent"});
       //$('.navbar-recruit').css({"background-color": "rgba(48, 48, 48, .4)"});
        //$('.navbar-recruit').css({ "background-color": "rgba(49, 51, 53,.4)"});
        $('.navbar-recruit').css({ "background-color": "rgba(0, 123, 181, 1)"});
       $('.navbar-member').css({"background-color": "#007bb5"});
  
       $('.navbar-collapse').css({"background":"transparent"});
       $('.navbar').css({"border-bottom": "transparent"});
       $('#logo').css({"height": "65px"});
        $('.navbar').css('transition', '.5s');
        $('.navbar').css('-o-transition', '.5s');
        $('.navbar').css('-moz-transition', '.5s');
        $('.navbar').css('-webkit-transition', '.5s');
        $('.navba').css('-ms-transition', '.5s');


    }
    
    
});

/**
 *  Function to change the opacity of Conquer and Challenge in the recruitment
 *  page.
 **/
$(window).scroll(function(){
    if($(window).scrollTop() < 10){
        $('#conquer').css('transition', '.5s');
        $('#conquer').css('-o-transition', '.5s');
        $('#conquer').css('-moz-transition', '.5s');
        $('#conquer').css('-webkit-transition', '.5s');
        $('#conquer').css('-ms-transition', '.5s');
        $('#conquer').css('opacity','1.0');
        $('#challenge').css('opacity','0');
    }
    if($(window).scrollTop() > 10
                && $(window).scrollTop() < 50){
        $('#conquer').css('opacity','.7');
        $('#challenge').css('opacity','.3');
        
    }
    else if($(window).scrollTop() > 50
                && $(window).scrollTop() < 100){
        $('#conquer').css('opacity','.4');
        $('#challenge').css('opacity','.6');
        
    }
    else if($(window).scrollTop() > 100
                && $(window).scrollTop() < 150){
        $('#conquer').css('opacity','0');
        $('#challenge').css('opacity','1');
        
    }
    
    else if($(window).scrollTop() > 150){
        $('#conquer').css('opacity','0');
        $('#challenge').css('opacity','1.0');
        $('#challenge').css('transition', '.5s');
        $('#challenge').css('-o-transition', '.5s');
        $('#challenge').css('-moz-transition', '.5s');
        $('#challenge').css('-webkit-transition', '.5s');
        $('#challenge').css('-ms-transition', '.5s');
      
    }
    
    
    
    /*if($(window).scrollTop() < 10){
       /* $('#conquer').css('transition', '.5s');
        $('#conquer').css('-o-transition', '.5s');
        $('#conquer').css('-moz-transition', '.5s');
        $('#conquer').css('-webkit-transition', '.5s');
        $('#conquer').css('-ms-transition', '.5s');
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
        $('#challenge').css('transition', '.5s');
        $('#challenge').css('-o-transition', '.5s');
        $('#challenge').css('-moz-transition', '.5s');
        $('#challenge').css('-webkit-transition', '.5s');
        $('#challenge').css('-ms-transition', '.5s');
      
    }*/
    
    
    
    
});

/**
 *  Function to show and hide sidebar for collapsed navigation
 **/
$("#menu-toggle, .mask, #close-button").click(function(e) {
    $('.mask').toggleClass('toggled');
    $('#slide-wrapper').toggleClass('toggled');
    if($('#slide-wrapper').css('visibility') === 'visible'){
        $('.navbar').css('visibility', 'visible');
        $('#logo, .navbar').css('transition','1s');
        $('#logo').css('-o-transition','.5s');
        $('#logo').css('-ms-transition','.5s');
        $('#logo').css('-moz-transition','.5s');
        $('#logo').css('-webkit-transition','.5s');
    }
    else{
        $('.navbar').css('visibility', 'hidden');
        $('#logo, .navbar').css('transition','0s');
        $('#logo').css('-o-transition','0s');
        $('#logo').css('-ms-transition','0s');
        $('#logo').css('-moz-transition','0s');
        $('#logo').css('-webkit-transition','0s');

            
            
    }
});

/**
 *  Function to validate the information in the contact form
 **/
function validate(){
    
    
    var nameVal = document.getElementById("name").value;
    var emailVal = document.getElementById("email").value;
    var messageVal = document.getElementById("message").value;
    
    var nameFlag = true;
    var emailFlag = true;
    var messageFlag = true;
    
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var result = filter.test(emailVal);
    console.log(result);
 
    if(nameVal == null || nameVal == ""){
        $("#require-name").css("visibility","visible");
        nameFlag = false;
        console.log("no name");
    }
    else{
        $("#require-name").css("visibility","hidden");
    }
    
    if(emailVal == null || emailVal == "" || !filter.test(emailVal)) {
        $("#require-email").css("visibility", "visible");
        emailFlag = false;
    }

    else{
        $("#require-email").css("visibility", "hidden");
    }
    
    if(messageVal == null || messageVal == ""){
        $("#require-message").css("visibility", "visible");
        messageFlag = false;
    }
    else{
        $("#require-message").css("visibility", "hidden");
    }
    
    if(!nameFlag || !emailFlag || !messageFlag){
        return false;
    }
    
}


/**
 * Google Map plugin for the contact page
**/

function initialize(){
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: new google.maps.LatLng(32.8810, -117.2380),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
}
    google.maps.event.addDomListener(window, 'load', initialize);


/**TESTING FUNCTIONS **/
$('.mask').click(function(e){
    console.log("CLICKED");
    
});
