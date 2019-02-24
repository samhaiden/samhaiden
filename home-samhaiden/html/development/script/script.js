$(document).scroll(function() {
        
              var y = $(this).scrollTop();
        
              if (y > 500) {
                  
                $('.top-scroll').slideDown();
                  
              } else {
                  
                $('.top-scroll').slideUp();
                  
              }
        
            });