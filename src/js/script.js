var $ = require("jquery");
$("document").ready(function() {
  // var stupidButton = {
  // 	init: function() {
  // 		this.attachEvents();
  // 	},
  //
  // 	attachEvents: function() {
  // 		$('#runaway-container').on('hover', this.flyAway);
  // 		// $('#runaway').on('click', this.showWin);
  // 	},
  //
  // 	flyAway: function(e) {
  // 		var mLeft = Math.random() * 300;
  // 		var mTop = Math.random() * 300;
  //
  // 		$('#runaway-container').css('margin-left', mLeft);
  // 		$('#runaway-container').css('margin-top', mTop);
  // 	},
  //
  // 	showWin: function(e) {
  // 		alert('Nice! Here, have a cookie!');
  // 	}
  // };
  //
  // stupidButton.init();
  console.log("marsiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");

  // onmousemove = function(e){console.log("mouse location:",e.clientX , e.clientY)}
  $("#runaway").on('hover', this.moveAway);


  onmousemove = function(e) {
    // mouse posittion
    var mousex = e.clientX;
    var mousey = e.clientY;
    console.log("mouse location:", mousex, mousey)

    // button position
    var y = $("button").position()
    var axax = y.left + 75;
    var axay = y.top + 75;
    console.log("button position:", axax, axay);
    var distx = mousex - axax;
    var disty = mousey - axay;
    console.log("distance between M-B:", distx, disty);
    if (disty < 20 || distx < 20) {
      var mLeft = Math.random() * 300 ;
      var mTop =  Math.random() * 300;
      console.log(mLeft, mTop);

      $("button").css('margin-top', mTop);
      $("button").css('margin-left', mLeft);

    }
  }

  onmousemove();









});
