var $ = require("jquery");
$("document").ready(function() {

  // var chil = $("ul");
  // console.log(chil);
  //
  //
  // var child = $("ul").children();
  // console.log(child, "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhiiiiiiiiiiiiiii");
  // var sd = child.html();
  // console.log(sd, "htmlllllllllllll");
  //
  //
  //
  // var ere = child.children();
  // var ulmijloc = ere[0];
  // console.log(ere, "huuuuuuuuuuuuuuuuuussssssssss");
  // console.log(ulmijloc, "hjmmmmmmmmmmmmmmmmmmmm");
  //
  //
  //
  //
  //
  // var anumitcopil = $('li:nth-last-of-type(2)')
  // console.log(anumitcopil, "run");
  //
  //
  // var primulcopil = $('li:last-child')
  // console.log(primulcopil, "reach");
  //
  //
  //
  //
  // var ultimulull = $('ul:first-child')
  // console.log(ultimulull, "stay");
  // ultimulull.click(function() {
  //   ultimulull.addClass("bluex");
  //
  //
  //
  //
  //
  // });
  //
  // child.click(function() {
  //   console.log("whattttttttttt");
  //
  //
  //
  // });
  //
  // for (var i = 9; i < 12; i++) {
  //   var chide = child[i];
  //   var ar = chide;
  //   console.log(chide, "reachhhhhhhhh");
  //   chide.click(function() {
  //     console.log("whyyyyyyyyyyyyyyy");
  //
  //
  //
  //   });
  // };
  //
  //
  //
  //
  //
  //
  // for (var y = 9; y < child.length; y++) {
  //   child[y];
  //
  // }
  //
  //
  //
  //
  //
  //
  // var ultimulul = $('ul:nth-child(n+3)')
  // console.log(ultimulul, "ultimul ul");
  // var parinte = ultimulul.not("even");
  // console.log(parinte, "parinteeeeeeeeeeeeeeeeeeeee");


  // li-urile din primul ul
  var x = $('.menu');
  var firstUl = x.children().children();
  console.log(firstUl, 'must be ul');
  var first = $('.ul:nth-child(n)');
  console.log(first, 'must');


  // ultimele 2 ul-uri
  var x = $('ul');

  var lastUL = $('ul').children().children();
  console.log(lastUL, 'lasyyyyyyyyyyyyyyyyyyyyyy');


  // ultimul ul
  var lastUl = x[2];
  console.log(lastUl, 'lastUl');

  // middle ul
  var middleUl = x[1];
  console.log(middleUl, 'middleUl');


  //  Li-urile din ultimul ul
  var primul = $(lastUl).children();
  console.log(primul, 'primul');
  console.log(lastUl, 'primul html');


  //  Li-urile din ul-ul de mijloc
  var middleLi = $(middleUl).children();


// functia de click pt primul ul
var liunu =$(middleLi[0]);
console.log(liunu, middleLi, firstUl, 'middleLi');
// scot separat implement pentru ca el selecteaza toate li-urile
 var removeImplemnt = firstUl.last();
 console.log(removeImplemnt,'mustkkkkkkkkkkkkkkkkk');

  liunu.click(function() {
    firstUl.addClass('bluex');
    // ?elimin clasa de la implement deci de la restul de li-uri
    removeImplemnt.removeClass('bluex');
    console.log(firstUl,'mustkkkkkkkkkkkkkkkkk');
  });
// se repeta functia de 3 ori pt ca, daca o bag in loop nu face functia click pe arr[i]
// for (var i = 3; i < middleLi.length; i++) {
// var liMiddle =  middleLi[i];
// }
// liMiddle.click(function() {
//   primul.addClass('read');
//   console.log("de ce nu merge???????????")
// });

var lidoi =$(middleLi[1]);

lidoi.click(function() {
  firstUl.addClass('bluex');
  removeImplemnt.removeClass('bluex');
});

var li3 = $(middleLi[2]);
li3.click(function() {
  firstUl.addClass('bluex');
  removeImplemnt.removeClass('bluex');
});

// functia pentru selectia copiilor

var liFour= $(middleLi[3]);
liFour.click(function() {
  primul.addClass('read');
});

var liFive = $(middleLi[4]);
liFive.click(function() {
  primul.addClass('read');
});

var liSix = $(middleLi[5]);
var liSixChild = liSix.children();
console.log(liSixChild);
liSix.click(function() {
  primul.addClass('read');
});












// button reset
$("button").click(function(){
  firstUl.removeClass('bluex');
  primul.removeClass('read');





});
});
