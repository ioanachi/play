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


var alb = $(".albastru");
console.log(alb, "albbbbb");
var aaa = false
var parinte = $(".parinte");
parinte.click(function(){

  console.log("intra", alb);
alb.addClass("yell");
aaa = true;
});



$("button").click(function(){

  if (clicked || aaa) {
    $(".rosu a").removeClass("read");
    alb.removeClass("yell");
  };

});


});
