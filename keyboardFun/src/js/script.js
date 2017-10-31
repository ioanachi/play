var $ = require("jquery");
$("document").ready(function() {
//   $(document).keydown(function(e) {
//     switch (e.which) {
//     case 37:
//         $('div').stop().animate({
//             left: '-=40'
//         }); //left arrow key
//         break;
//     case 38:
//         $('div').stop().animate({
//             top: '-=40'
//         }); //up arrow key
//         break;
//     case 39:
//         $('div').stop().animate({
//             left: '+=40'
//         }); //right arrow key
//         break;
//     case 40:
//         $('div').stop().animate({
//             top: '+=40'
//         }); //bottom arrow key
//         break;
//     }
// })
var box = $('.box');
$(document).keydown(function(e) {
  console.log(e.which);
    switch (e.which) {
    case 37:
        box.css('left', box.offset().left - 10);
        break;
    case 38:
        box.css('top', box.offset().top - 10);
        break;
    case 39:
        box.css('left', box.offset().left + 10);
        break;
    case 40:
        box.css('top', box.offset().top + 10);
        break;
    }
})


});
