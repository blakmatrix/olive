$(document).ready(function(){

  // Google code prettify
  // ====================

  prettyPrint();

  $('#colorpickerHolder').ColorPicker({color: '#f0f000',
                                       flat: true,
                                       onChange: function (hsb) {previewChange(hsb);}});
  // ================================
  //    SUBMIT COLOR & Button init
  // ================================
  function submitColorBtn(){
    $('#submit_color').bind('click', function(){
    var hsb = {h:parseInt($(".colorpicker_hsb_h input").val()),
                s:parseInt($(".colorpicker_hsb_s input").val()),
                b:parseInt($(".colorpicker_hsb_b input").val())};
      setColors(hsb,"body","h1, h2, h3, h4, h5, h6", ".topbar-inner, .topbar .fill");
      emitColors( hsb );
    });
  }
  submitColorBtn();

  function setButton(id) {
    if (id =='home1'||id =='home2')id='home';
    $('.topbar .nav li').removeClass('active');
    $('#'+id).parent('li').addClass('active')
  }
  // ==============================================
  //                 Socket IO
  // ==============================================
  var socket = io.connect();
  socket.on('color_change', function (data) {
   setColors(data.col,"body","h1, h2, h3, h4, h5, h6", ".topbar-inner, .topbar .fill");
  });
  socket.on('update_color', function (data) {
    setColors(data.col,"body","h1, h2, h3, h4, h5, h6", ".topbar-inner, .topbar .fill");
  });
  function emitColors(col){
    var socket = io.connect();
    socket.emit('set_color', {change_color: col });
  }
  // ==============================================
  //            setColors & Helpers
  // ==============================================

  function setColors(col, bg, headers, navbar){
    //console.log('col= '+col);
    var txtb=col.b +50>100?col.b-50:col.b +50;
    var baseHex = $('#colorpickerHolder').ColorPickerHSBToHex(
          {h:col.h,
           s:col.s,
           b:col.b});
    var textColor = $('#colorpickerHolder').ColorPickerHSBToHex(
          {h:0,
           s:0,
           b: txtb});
    var barColorH = $('#colorpickerHolder').ColorPickerHSBToHex(
          {h:col.h,
           s:col.s,
           b:20});
    var barColorL = $('#colorpickerHolder').ColorPickerHSBToHex(
          {h:col.h,
           s:col.s,
           b:13});

    //bg
    $(bg).css("background-color", "#"+baseHex );
    //text
    $(bg).css("color", "#"+textColor );
    $(headers).css("color", "#"+textColor );
    //bars

    colorBar(barColorH,barColorL, navbar);

    //input btn
    //dropdownmenu
    if(bg == "body"){
        $(".dropdown-menu").css("background-color", "#"+barColorH );
    }
  }

  function colorBar(topC, botC, navbar){
    $(navbar).css("background-color", "#"+botC );
    $(navbar).css("background-image", "-khtml-gradient(linear, left top, left bottom, from(#"+topC+"), to(#"+botC+"))");
    $(navbar).css("background-image", "-moz-linear-gradient(top, #"+topC+", #"+botC+")");
    $(navbar).css("background-image", "-ms-linear-gradient(top, #"+topC+", #"+botC+")");
    $(navbar).css("background-image", "-webkit-gradient(linear, left top, left bottom, color-stop(0%, #"+topC+"), color-stop(100%, #"+botC+"))");
    $(navbar).css("background-image", "-webkit-linear-gradient(top, #"+topC+", #"+botC+")");
    $(navbar).css("background-image", "-o-linear-gradient(top, #"+topC+", #"+botC+")");
    $(navbar).css("background-image", "linear-gradient(top, #"+topC+", #"+botC+")");
    //filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#333333', endColorstr='#222222', GradientType=0);

  }
  // ==============================================
  //            previewChange
  // ==============================================
  function previewChange(hsb){
    setColors(hsb, "#colorpickerPreview", "#hPreview", ".divbar-inner, #divbar .fill");
  }
  // ==============================================
  //            Navbar Bindings
  // ==============================================

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
  // ==============================================
  //            NAVIGATION(JSONified+)
  // ==============================================
  $('.topbar a').not(document.getElementById('no-link')).click(function() {
    if ($(location).attr('pathname') == "/"){
      setButton($(this).attr('id'));
      $.get( $(this).attr('href')+'.json', function(data){
        $('#content').html(data);
        $('#colorpickerHolder').ColorPicker({color: '#f0f000',
                                              flat: true,
                                          onChange: function (hsb) {previewChange(hsb);}});
        //var socket = io.connect();
        socket.emit('update_me');
        // SUBMIT COLOR BIND
        submitColorBtn();


      });
      // ---------------
      // COSMETIC NAV
      // ---------------
      var id = $(this).attr('id');
      if (id =='home1'||id =='home2')id='home';
      location.hash = "#"+id;
      $('.dropdown-menu').slideUp();

      return false;
    }
    else{
      return true;
    }
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
