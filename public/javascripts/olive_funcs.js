$(document).ready(function(){
  
  $("#content-slider").slider({
    animate: true,
    change: handleSliderChange,
    slide: handleSliderSlide
  });

});

function handleSliderChange(e, ui)
{
  //var maxScroll = $("#content-scroll").attr("scrollWidth") - $("#content-scroll").width();
  //$("#content-scroll").animate({scrollLeft: ui.value * (maxScroll / 100) }, 1000);
  $(function(){ChangeColor("#color_box", ui.value)});
}

function handleSliderSlide(e, ui)
{
  //var maxScroll = $("#content-scroll").attr("scrollWidth") - $("#content-scroll").width();
  //$("#content-scroll").attr({scrollLeft: ui.value * (maxScroll / 100) });
  $(function(){ChangeColor("#color_box", ui.value)});
}
// COLOR FUNCTIONS


function setColor(a, color)
{   
    $(a).css("background-color","#"+color); 
}

function getColor(a)
{   
    var color_rgb= $(a).css("background-color");
    var color = "";
    if(color_rgb.match(/^rgba/)){
      color_rgb = color_rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      // parts now should be ["rgba(0, 70, 255, 0)", "0", "70", "255"]
      var R=color_rgb[1];
      var G=color_rgb[2];
      var B=color_rgb[3];
      var color = rgbToHex(R,G,B);
    }else if(color_rgb.match(/^rgb/)){
      color_rgb = color_rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      // parts now should be ["rgb(0, 70, 255", "0", "70", "255"]
      var R=color_rgb[1];
      var G=color_rgb[2];
      var B=color_rgb[3];
      var color = rgbToHex(R,G,B);
    }else if(color_rgb.match(/^#/)){
         color = color_rgb.replace(/#/g,'');
    }else{//default
        color = "808000";
    }
    return color; 
    
}


function ChangeColor(a, pos){
    var f={R:0,G:0,B:0};
    //H 180-60
    // V 240 - 0
    n_pos = pos;
    if(pos == 100){n_pos=99;}
    var hue_range = 160-60;
    var hue_increment = ((n_pos%10)/10)*hue_range;
    var hue_val = 60+hue_increment;
    var value_increment = ((Math.floor(n_pos/10)%10)/10)*240;
    var lum_val = 240-value_increment;
    var e={H:hue_val,S:0.95,V:lum_val};

    hsv2rgb(e,f);

    $(a).css("background-color","rgb("+f.R+","+f.G+","+f.B+")");
    $("#slider_val").text("slider=  "+pos);
    $("#hue_val").text("hue val= "+hue_val);
    $("#lum_val").text("lum val= "+lum_val);
    var hex_val = rgbToHex(f.R, f.G, f.B)
    $("#hex_val").text("hex val= #"+hex_val);
    setColor(a,hex_val);
    //body_color_str = hex_val;
    //$("#bcs_val").text("bcs val= #"+body_color_str);
}

function setWindowColor()
{   
    var socket = io.connect();
    color = getColor("div#color_box");
    $("body").css("background-color","#"+color);
    socket.emit('set_color', {change_color: color });
    
}
// utility converters
function hsv2rgb(d,g){
    var c=(d.H>=0&&d.H<360)?d.H:0;
    var l=(d.S>=0&&d.S<=1)?d.S:1;
    var j=(d.V>=0&&d.V<=255)?d.V:255;
    var i=Math.floor(c/60);
    var e=c/60-i;
    var b=Math.round(j*(1-l));
    var a=Math.round(j*(1-e*l));
    var k=Math.round(j*(1-(1-e)*l));
    switch(i){
        case 0:g.R=j,g.G=k,g.B=b;break;
        case 1:g.R=a,g.G=j,g.B=b;break;
        case 2:g.R=b,g.G=j,g.B=k;break;
        case 3:g.R=b,g.G=a,g.B=j;break;
        case 4:g.R=k,g.G=b,g.B=j;break;
        case 5:g.R=j,g.G=b,g.B=a;break
    }
}

function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}

function toHex(n) {
 n = parseInt(n,10);
 if (isNaN(n)) return "00";
 n = Math.max(0,Math.min(n,255));
 return "0123456789ABCDEF".charAt((n-n%16)/16)
      + "0123456789ABCDEF".charAt(n%16);
}

function hideFlashMessages() {
    $(this).fadeOut();
}

setTimeout(function() {
    $('.flash').each(hideFlashMessages);
}, 5000);
$('.flash').click(hideFlashMessages);

