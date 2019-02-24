$("#top-menu").load( "header.html" );

$(document).ready(function () {
    
    $(".cross").hide();

    $(".menu").hide();
        
        $(".hamburger").click(function () {
            
            $(".wrapper-main").animate({"margin-top": "250px"}, "slow");

            $(".menu").slideToggle("slow", function () {

            $(".hamburger").hide();

            $(".cross").show();
                           
    });     
            
});
        

$(".cross").click(function() {
    
    $(".wrapper-main").animate({"margin-top": "35px"}, "slow");

    $(".menu").slideToggle( "slow", function() {
        
        $(".cross").hide();
        
        $(".hamburger").show();
                
    });
    
});

})

