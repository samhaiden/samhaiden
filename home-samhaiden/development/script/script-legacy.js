$(document).ready(function() {
    

    /* $(".menu-link").click(function() {
            
            alert(hello);

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

        }); */
    

    $(document).scroll(function() {

            var y = $(this).scrollTop();

                if (y > 500) {

                    $('.top-scroll').slideDown();

                  } else {

                    $('.top-scroll').slideUp();

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
    
});


