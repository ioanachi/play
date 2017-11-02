var $ = require("jquery");
$(document).ready(function() {
  var paragraf = $(".paragraphs")
  var tex = "abcdefghijklmnopqrstvwyzx";
  var arrA = tex.split('');
  console.log(arrA);

  function createText() {
    var cuvinte = "";
    for (var i = 0; i < arrA.length-2; i+=3) {
      cuvinte += "<h5>" + arrA[i]+arrA[i + 1] + arrA[i + 2] + "</br></h5>";
    }
    paragraf.html(cuvinte);

  };
  createText();
})
