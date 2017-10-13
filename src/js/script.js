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

  // onmousemove = function(e){console.log("mouse location:",e.clientX , e.clientY)}


  // onmousemove = function(e) {
  // mouse posittion

  // button position
  // console.log(mLeft, mTop);
  //       $("body").mousemove(function (){
  //         var mousex = e.clientX;
  //         var mousey = e.clientY;
  //         console.log("mouse location:", mousex, mousey)
  //         var y = $("button").position()
  //         var axax = y.left + 150;
  //         var axay = y.top + 40;
  //         console.log("button position:", axax, axay);
  //         var distx = mousex - axax;
  //         var dtx = axax - mousex;
  //         var disty = mousey - axay;
  //         var dty = axay - mousey;
  //
  //         console.log("distance between M-B:", distx, disty);
  //         if ((disty < 20 && distx < 20) || ( dtx <200 && dty <200)) {
  //           var mLeft = Math.random() * 300;
  //           var Le = Math.round(mLeft);
  //           var mTop = Math.random() * 300;
  //           var To = Math.round(mTop);
  //           console.log(Le, To, "tttttttttttttttttttttttttttttttttttt");
  //           var mTo = To + disty ;
  //           var mLe = Le + distx ;
  //
  // y.left = mTo;
  // y.right= mLe;
  //
  //       }
  //       // $("button").css('margin-left', Le);
  //
  //     });
  //   }
  //
  //   onmousemove();



  $("body").mousemove(function(e) {
    var mousex = e.clientX;
    var mousey = e.clientY;

    console.log("mouse location:", mousex, mousey);
    var paxax = $("button").position().left - 20;
    var paxay = $("button").position().top - 20;
    var pax = $("button").position().left + 150 + 20;
    var pay = $("button").position().top + 40 + 20;
    console.log(paxax, paxay, pax, pay);

    if (mousex > paxax && mousey > paxay && mousex < pax && mousey < pay) {
      var mLeft = Math.random() * 300;
      var Le = Math.round(mLeft);
      var mTop = Math.random() * 300;
      var To = Math.round(mTop);
      console.log(Le, To, "tttttttttttttttttttttttttttttttttttt");
      $("button").css('left', Le);
      $("button").css('top', To);

    }







  });



});
