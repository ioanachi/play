var $ = require("jquery");
$("document").ready(function() {
  var copil = $(".problema");
  var cil =   copil.find("ul");
  console.log(cil);
  var clicked = false;
copil.click(function(){

$(".rosu a").addClass("read");
clicked = true;
});


var alb = $(".albastru a");
console.log(alb, "albbbbb");

var parinte = $(".parinte");
parinte.click(function(){
  if (clicked) {
    $(".rosu a").removeClass("read");
  }
alb.addClass("yell");



});


});
