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

/* function renderGrid(){
	var blocks = document.getElementById("grid-container").children;
	var pad = 0, cols = 3, newleft, newtop;
	for(var i = 1; i < blocks.length; i++){
		if (i % cols == 0) {
			newtop = (blocks[i-cols].offsetTop + blocks[i-cols].offsetHeight) + pad;
		    blocks[i].style.top = newtop+"px";
		} else {
			if(blocks[i-cols]){
				newtop = (blocks[i-cols].offsetTop + blocks[i-cols].offsetHeight) + pad;
				blocks[i].style.top = newtop+"px";
			}
			newleft = (blocks[i-1].offsetLeft + blocks[i-1].offsetWidth) + pad;
			blocks[i].style.left = newleft+"px";	
		}
    }
} 

window.addEventListener("load", renderGrid, false);
window.addEventListener("resize", renderGrid, false); */