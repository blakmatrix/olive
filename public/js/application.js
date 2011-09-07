$(document).ready(function(){

  // Google code prettify
  // ====================

  prettyPrint();





  // Dropdown example for topbar nav
  // ===============================

  $("body").bind("click", function (e) {
    $('.dropdown-toggle, .menu').parent("li").removeClass("open");
  });
  $(".dropdown-toggle, .menu").click(function (e) {
   var $li = $(this).parent("li").toggleClass('open');
    return false;
  });

  //$('.dropdown-toggle, .menu').toggle(
  //  function(){ $(this).slideDown(); return false; },
  //  function(){ $(this).slideUp(); return false; }
  //);

 $('a').not(document.getElementById('no-link')).click(function() {
   $.get( $(this).attr('href')+'.json', function(data){
     $('#content').html(data);
   });

   return false;
 });





  // POSITION TWIPSIES
  // =================

  $('.twipsies.well a').each(function () {
    var type = this.title
      , $anchor = $(this)
      , $twipsy = $('.twipsy.' + type)

      , twipsy = {
          width: $twipsy.width() + 10
        , height: $twipsy.height() + 10
        }

      , anchor = {
          position: $anchor.position()
        , width: $anchor.width()
        , height: $anchor.height()
        }

      , offset = {
          above: {
            top: anchor.position.top - twipsy.height
          , left: anchor.position.left + (anchor.width/2) - (twipsy.width/2)
          }
        , below: {
            top: anchor.position.top + anchor.height
          , left: anchor.position.left + (anchor.width/2) - (twipsy.width/2)
          }
        , left: {
            top: anchor.position.top + (anchor.height/2) - (twipsy.height/2)
          , left: anchor.position.left - twipsy.width - 5
          }
        , right: {
            top: anchor.position.top + (anchor.height/2) - (twipsy.height/2)
          , left: anchor.position.left + anchor.width + 5
          }
      }

    $twipsy.css(offset[type])

  });

});
