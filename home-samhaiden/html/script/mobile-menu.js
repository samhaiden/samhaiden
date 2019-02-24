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



$("li").click(function() {  
    
            $(".menu").slideToggle( "slow", function() {

            $(".cross").hide();

            $(".hamburger").show();
                
        });
    
    });

})
    
    //e.preventDefault();
    
    //var targetClass = $(this).attr("href");
    
    //var top = $(targetClass).offset().top;
    
    //$('html, body').stop().animate({scrollTop: top }, 300);
    
