$(document).ready(function(){
    $('.recruit-banner').animate({opacity: 1}, "slow");
    $('#home-panel, #first-about-panel, #member-panel, #recruit-panel').animate({opacity:.8},"slow");
    $('#contact-panel').animate({opacity:.5},"slow");

    /**
     *  Function to show and hide sidebar for collapsed navigation
     **/
    var btnDisabled = false;
    $("#menu-toggle, .mask, #close-button").click(function(e) {
        if (btnDisabled){return;}
        btnDisabled = true;
        setTimeout(function(){
            btnDisabled = false;}, 1000);
        $('.mask').toggleClass('toggled');
        $('#slide-wrapper').toggleClass('toggled');

        if($('#slide-wrapper').css('visibility') === 'visible'){
            $('.navbar').css('visibility', 'visible').animate({opacity: 1.0}, 1000);

        }
        else{
            $('.navbar').css('visibility', 'hidden').animate({opacity: 0}, 0);

        }
    });

    
    $('.sponsor-element').slick({
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
      ]
    });
    
  });  


/**
 *  Function for the navigation bar to show as the user scrolls down
 **/
$(document).scroll(function(){
    if($(this).scrollTop() > 100)
    {   
        $('.navbar').css({"background":"#007bb5"});
        $('.navbar').css({"padding-bottom": "0px"});
        $('.navbar').css({"border-bottom": "5px solid #313335"});
        /*$('.navbar').animate({
            "background-color": "#007bb5", 
            "padding-bottom": "0px", 
            "border-bottom": "5px solid #313335"}, 1000);*/
                             
        $('#logo').css({"height": "50px"});
        
        $('.navbar').css('transition', '.5s');
        $('.navbar').css('-o-transition', '.5s');
        $('.navbar').css('-moz-transition', '.5s');
        $('.navbar').css('-webkit-transition', '.5s');
        $('.navba').css('-ms-transition', '.5s');
       
    } 
    else {
       $('.navbar').css({"background":"transparent"});
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

