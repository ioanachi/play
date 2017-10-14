var $ = require("jquery");
$("document").ready(function() {

  var clicked = false;
  var difx;
  var dify;
  var xmenu = $("div");


  xdiv.mousedown(function(e) {
    clicked = true;
    var mousex = e.clientX;
    var mousey = e.clientY;
    var posdiv = xdiv.position();
    var posx = posdiv.left;
    var posy = posdiv.top;
    console.log("mouse position :", mousex, mousey);
    console.log("div position :", posx, posy);
    difx = mousex - posx;
    dify = mousey - posy;
    console.log("difference :", difx, dify);
  });

  $("html").mousemove(function(e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;
    console.log("--------------------mouse position :", mouseX, mouseY);
    console.log("====================difference position :", difx, dify);

    var butposx = mouseX - difx;
    var butposy = mouseY - dify;
    console.log("new position for the div:", butposx, butposy);
    if (clicked) {
      xdiv.css("left", butposx);
      xdiv.css("top", butposy);
    }


  });
  $("div").mouseup(function(e) {
    clicked = false;




  });
});
