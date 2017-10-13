var $ = require("jquery");
$("document").ready(function() {

  var clicked = false;
  var difx;
  var dify;
  var xbutton = $("button");


  xbutton.mousedown(function(e) {
    clicked = true;
    var mousex = e.clientX;
    var mousey = e.clientY;
    var posButton = xbutton.position();
    var posx = posButton.left;
    var posy = posButton.top;
    console.log("mouse position :", mousex, mousey);
    console.log("button position :", posx, posy);
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
    console.log("new position for the button:", butposx, butposy);
    if (clicked) {
      xbutton.css("left", butposx);
      xbutton.css("top", butposy);
    }


  });
  $("button").mouseup(function(e) {
    clicked = false;




  });
});
