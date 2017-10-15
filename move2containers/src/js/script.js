var $ = require("jquery");
$("document").ready(function() {

  var clicked = false;
  var difx;
  var dify;
  var container = $(".container");
  var small = $(".container .small")
  var clickedDiv;
  container.mousedown(function(e) {
    clicked = true;
    var mousex = e.clientX;
    var mousey = e.clientY;
    var poscontainer = container.position();
    console.log(poscontainer);
    var posx = poscontainer.left;
    var posy = poscontainer.top;
    console.log("mouse position :", mousex, mousey);
    console.log("container position :", posx, posy);
    difx = mousex - posx;
    dify = mousey - posy;
    console.log("difference :", difx, dify);
    var spos = small.offset();
    var spox = spos.left;
    var spoy = spos.top;
    console.log(spox, spoy);
    var sposx = spox + small.width();
    console.log(sposx);
    var sposy = spoy + small.height();
    if ((mousex > spox) && (mousex < sposx) && (mousey > spoy) && (mousey < sposy)) {
      console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      clicked = false;

    }
  });

  $("html").mousemove(function(e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    console.log("--------------------mouse position :", mouseX, mouseY);
    console.log("====================difference position :", difx, dify);
    var divposx = mouseX - difx;
    var divposy = mouseY - dify;
    console.log("new position for the container:", divposx, divposy);
    if (clicked) {
      container.css("left", divposx);
      container.css("top", divposy);
    }


  });
  container.mouseup(function(e) {
    clicked = false;




  });
});
