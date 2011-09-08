$(document).ready(function(){

  // Google code prettify
  // ====================

  prettyPrint();
  $('#colorpickerHolder').ColorPicker({color: '#f0f000',flat: true});
  $('#submit_color').bind('click', function(){
    $("body").css("background-color", "#"+$(".colorpicker_hex input").val() );
  });

//
  function setButton(id) {
    if (id =='home1'||id =='home2')id='home';
    $('.topbar .nav li').removeClass('active');
    $('#'+id).parent('li').addClass('active')
  }



  // Dropdown example for topbar nav
  // ===============================

  $("body").bind("click", function (e) {
    //$('.dropdown-toggle, .menu').parent("li").removeClass("open");
    $('.dropdown-menu').slideUp();
  });
  $(".dropdown-toggle, .menu").click(function (e) {
   //var $li = $(this).parent("li").toggleClass('open');
   $('.dropdown-menu').slideDown();
    return false;
  }

  );

  //$('.dropdown-toggle, .menu').toggle(
  //  function(){ $(this).slideDown(); return false; },
  //  function(){ $(this) return false; }
  //);

  $('.topbar a').not(document.getElementById('no-link')).click(function() {
    setButton($(this).attr('id'));
    $.get( $(this).attr('href')+'.json', function(data){
      $('#content').html(data);
      $('#colorpickerHolder').ColorPicker({color: '#f0f000',flat: true});
      $('#submit_color').bind('click', function(){
        $("body").css("background-color", "#"+$(".colorpicker_hex input").val() );
      });

    });
    $('.dropdown-menu').slideUp();

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
