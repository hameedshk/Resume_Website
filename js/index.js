$("document").ready(function () {
    $("img").addClass("animated fadeInDown");
    $("h1").addClass("animated fadeInDown");
    $("h2").addClass("animated fadeInDown");
    $("h3").addClass("animated fadeInDown");
    $("h4").addClass("animated fadeInDown");
    $("h5").addClass("animated fadeInDown");
    $("h6").addClass("animated fadeInDown");
    $("p").addClass("animated fadeInDown");
    $("hr").addClass("animated fadeInDown");
    $("i").addClass("animated fadeInDown");
    $("section").addClass("animated fadeInDown");
    $("article").addClass("animated fadeInDown");
    $("ul").addClass("animated fadeInDown");
    
    $.scrollIt();
    $('#navicon').click(function() {
          $('.nav').css({
              'transform': 'translateX(0)'
          });
      });
  
      $('.nav').click(function() {
          $('.nav').css({
              'transform': 'translateX(-200px)'
          });
      });
    
      $("body").click(function(e){
        let myTarget = $(".nav");
        let clicked = e.target.className;
        if(clicked!="")
        {
            $('.nav').css({
                'transform': 'translateX(-200px)'
            });
        }
      /*  if($.trim(myTarget[0]) != '') {
            if($("." + myTarget[0]) != clicked) {
                $('.nav').css({
                    'transform': 'translateX(-200px)'
                });
            }
        }*/
      });
  });