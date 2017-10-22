var $ = require("jquery");
$("document").ready(function() {
  var paragraph = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,z";
  var letter = paragraph.split(",");
  console.log(letter);
  // var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','v','w','z','x'];

  var word;

  var generateContent = function(a) {
    var characters='';

    var paragraph='';

    for (var x = 3; x < 10; x++) {
      var randomNr = Math.floor(Math.random() * letter.length);
      characters = characters + letter[randomNr];
      console.log(characters, "characters");

}
    };
    //
    // for (var i = 1; i < a; i++) {
    //paragraph = paragraph +characters + " "
    // console.log(paragraph, "paragraph");
    //
    // paragraph = paragraph +" " + characters + " ";
    //
    // }

  // };
  generateContent(1500);
  $("generateContent").html();
});
