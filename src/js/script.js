var $ = require("jquery");
$("document").ready(function() {
  $('btn').mouseover(function() {


        $(this).animate({
            right: "50px",

        });
    });
});
