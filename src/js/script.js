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
    var axax = y.left + 150;
    var axay = y.top + 150;
    console.log("button position:", axax, axay);
    var distx = mousex - axax;
    // var dtx = axax - mousex;
    // var disty = mousey - axay;
    var dty = axay - mousey;

    console.log("distance between M-B:", distx,);
    if ( distx < 20 ||  dty <200) {
      var mLeft = Math.random() * 300;
      var Le = Math.round(mLeft);
      var mTop = Math.random() * 300;
      var To = Math.round(mTop);
      console.log(Le, To, "fuckkkkkkkkkkkkkkkkkkkkkkkCttttttttttttttttttttt");
      var mTo = To + dty ;
      var mLe = Le + distx ;


      console.log(mLeft, mTop);
      $("button").css('margin-top', mTo);
      $("button").css('margin-left', Le);

    }
  }

  onmousemove();









});
