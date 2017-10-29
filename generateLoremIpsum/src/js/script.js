var $ = require("jquery");
$("document").ready(function() {
  // var paragraphs = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,z";
  // var letter = paragraphs.split(",");
  // console.log(letter);
  // // var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','v','w','z','x'];
  // var characters = '';
  // var paragraph = '';
  //
  // function generateWords(c, b) {
  //   for (var x = c; x < b; x++) {
  //     var randomNr = Math.floor(Math.random() * letter.length);
  //     characters = characters + letter[randomNr];
  //     console.log(characters, "characters");
  //   }
  //   console.log(characters, "characters");
  //
  //   return characters;
  // };
  //
  // generateWords(3, 10);
  // var generateParagraph = function(a) {
  //   for (var i = 0; i < a; i++) {
  //     paragraph = paragraph + " " + characters + " ";
  //     console.log(paragraph, "paragraph");
  //   };
  // };
  //
  // var content = generateParagraph(1500);
  // $("generateContent").html();

  //return a random number between two values
  // function getRandomInt(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min)) + min;
  // }
  // var xchars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  // var finalString ='';
  // var randomNumber = 0;
  // var word = '';
  // for( var x=0; x<1500; x++){
  //   word = '';
  //   var k = getRandomInt(3,10);
  //   for(var i=0;i<k;i++){
  //     randomNumber = getRandomInt(0,xchars.length-1);
  //     var char = xchars[parseInt(randomNumber)];
  //     console.log(char,"char");
  //
  //     word = word+char;
  //
  //   }
  //   finalString = finalString + ' '+ word;
  // }
  // console.log(finalString);


  function randomNr(min,max){
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()*(max-min))+min;}
  var characters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var paragraph ='';
  var numberRandom=0;
  var word = '';

  function randomWord(b) {
    for(var i=0;i<b;i++) {
    numberRandom= parseInt(randomNr(0,characters.length-1));
    var char = characters[numberRandom];
    word = word+char;};
    return word;
  }



   for(var x=0; x < 1500; x++){
    var word = '';
    var k=randomNr(3,10);
    randomWord(k);

    paragraph = paragraph+' '+word;
  }


    console.log(paragraph);

    $(".generateContent").html(paragraph);















});
