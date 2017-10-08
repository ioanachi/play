var $ = require("jquery");
$("document").ready(function() {
  var stupidButton = {
  	init: function() {
  		this.attachEvents();
  	},

  	attachEvents: function() {
  		$('#runaway-container').on('hover', this.flyAway);
  		// $('#runaway').on('click', this.showWin);
  	},

  	flyAway: function(e) {
  		var mLeft = Math.random() * 300;
  		var mTop = Math.random() * 300;

  		$('#runaway').css('margin-left', mLeft);
  		$('#runaway').css('margin-top', mTop);
  	},

  	showWin: function(e) {
  		alert('Nice! Here, have a cookie!');
  	}
  };

  stupidButton.init();
});
