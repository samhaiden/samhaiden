
$(document).ready(function () {
    
    $(".cross").hide();

    $(".menu").hide();
        
        $(".hamburger").click(function () {
            
            $("#wrapper").animate({"margin-top": "250px"}, "slow");

            $(".menu").slideToggle("slow", function () {

            $(".hamburger").hide();

            $(".cross").show();
                           
    });     
            
});
        

$(".cross").click(function() {
    
    $("#wrapper").animate({"margin-top": "35px"}, "slow");

    $(".menu").slideToggle( "slow", function() {
        
        $(".cross").hide();
        
        $(".hamburger").show();
                
    });
    
});

})