var $ = require("jquery");
$("document").ready(function() {
  var stupidButton = {
  	init: function() {
  		this.attachEvents();
  	},
  	attachEvents: function() {
  		$('btncontainer').on('hover', this.flyAway);
  		$('btn').on('click', this.showWin);
  	},

  	flyAway: function(e) {
  		mLeft = Math.random() * 300;
  		mTop = Math.random() * 300;

  		$('btncontainer').css('margin-left', mLeft);
  		$('btncontainer').css('margin-top', mTop);
  	},


  showWin: function(e) {
		alert('Nice! Here, have a cookie!');
	}
};

stupidButton.init();
});
