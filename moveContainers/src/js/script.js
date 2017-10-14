var $ = require("jquery");
$("document").ready(function() {

  var clicked = false;
  var difx;
  var dify;
  var xfirst = $("div");

  var clickedDiv;


  xfirst.mousedown(function(e) {
    clicked = true;
    xfirst.removeClass("middlepos");

    var mousex = e.clientX;
    var mousey = e.clientY;
    var posfirst = $(this).position();
    var posx = posfirst.left;
    var posy = posfirst.top;
    console.log("mouse position :", mousex, mousey);
    console.log("first position :", posx, posy);
    difx = mousex - posx;
    dify = mousey - posy;
    console.log("difference :", difx, dify);
    $(this).addClass("newpos");
    clickedDiv = $(this);
  });

  $("html").mousemove(function(e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;
    console.log("--------------------mouse position :", mouseX, mouseY);
    console.log("====================difference position :", difx, dify);

    var divposx = mouseX - difx;
    var divposy = mouseY - dify;
    console.log("new position for the first:", divposx, divposy);
    if (clicked) {
      clickedDiv.css("left", divposx);
      clickedDiv.css("top", divposy);
    }


  });
  xfirst.mouseup(function(e) {
    clicked = false;
    clickedDiv.removeClass("newpos");
    clickedDiv.addClass("middlepos");




  });
});
