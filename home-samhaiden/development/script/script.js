$(document).ready(function() {
    
$(".cross").hide();

$(".menu").hide();
        
$(".hamburger").click(function() {
            
        $(".wrapper-main").animate({"margin-top": "250px"}, "slow");
        
        $(".menu").slideToggle("slow", function () {

        $(".hamburger").hide();

        $(".cross").show();
                           
    });     
            
});
        

$(".cross").click(function() {
    
    $(".menu").slideToggle( "slow", function() {
        
        $(".cross").hide();
        
        $(".hamburger").show();
                
    });
    
});



if ($(window).width() <= 849) {
    
    $(".menu-link").click(function() {  
    
        if (this.hash !== "") {

        event.preventDefault();

      var hash = this.hash;
            
      $('html, body').animate({
          
        scrollTop: $(hash).offset().top
          
      }, 800, function() {
   
        window.location.hash = hash;
          
      });
            
    } 
    
            $(".menu").slideToggle( "slow", function() {

            $(".cross").hide();

            $(".hamburger").show();
                
                
        });
    
    });
    
} else if ( $(window).width() >= 850) {
    
    $(".menu-link").click(function() {  
    
        if (this.hash !== "") {

        event.preventDefault();

      var hash = this.hash;
            
      $('html, body').animate({
          
        scrollTop: $(hash).offset().top
          
      }, 800, function() {
   
        window.location.hash = hash;
          
      });
                              
    }
    
}); 

}

$(".top-scroll").click(function() {  
    
        if (this.hash !== "") {

        event.preventDefault();

      var hash = this.hash;
            
      $('html, body').animate({
          
        scrollTop: $(hash).offset().top
          
      }, 800, function() {
   
        window.location.hash = hash;
          
            });
            
        } 
    
    });
    
$(".btn-learnmore").click(function() {  
    
        if (this.hash !== "") {

        event.preventDefault();

      var hash = this.hash;
            
      $('html, body').animate({
          
        scrollTop: $(hash).offset().top
          
      }, 800, function() {
   
        window.location.hash = hash;
          
            });
            
        } 
    
    });
    
$(document).scroll(function() {

    var y = $(this).scrollTop();

        if (y > 500) {

            $('.top-scroll').slideDown();

                } else {

                    $('.top-scroll').slideUp();

            }

    });
    
});