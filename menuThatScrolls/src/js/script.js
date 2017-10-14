var $ = require("jquery");
$("document").ready(function() {

  var clicked = false;
  var difx;
  var dify;
  var xmenu = $(".menu");


  xmenu.mousedown(function(e) {
    clicked = true;
    var mousex = e.clientX;
    var mousey = e.clientY;
    var posmenu = xmenu.position();
    var posx = posmenu.left;
    var posy = posmenu.top;
    console.log("mouse position :", mousex, mousey);
    console.log("menu position :", posx, posy);
    difx = mousex - posx;
    dify = mousey - posy;
    console.log("difference :", difx, dify);
    xmenu.addClass("newpos");
  });

  $("html").mousemove(function(e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;
    console.log("--------------------mouse position :", mouseX, mouseY);
    console.log("====================difference position :", difx, dify);

    var butposx = mouseX - difx;
    var butposy = mouseY - dify;
    console.log("new position for the menu:", butposx, butposy);
    if (clicked) {
      xmenu.css("left", butposx);
      xmenu.css("top", butposy);
    }


  });
  $(".menu").mouseup(function(e) {
    clicked = false;
    xmenu.removeClass("newpos");





  });
});
