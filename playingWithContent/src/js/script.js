var $ = require("jquery");
$("document").ready(function() {
  var names = {
    allNames: function() {
      return ['Ioana Chichernea', 'Ciprian Turcu', 'Mara Mere', 'Elon Musk', 'Steve Jobs', 'Javascript Code'];
    },
  };
  console.log(names.allNames(), "names");

  var arrNames = names.allNames();
  var name;
  var ul = $(".ulli");
  // var ww = true;
  $(".Bcreate").click(function() {
    // if (ww) {
    ul.html("");
    for (var i = 0; i < arrNames.length; i++) {

      name = arrNames[i];
      console.log(name, "name");
var butTon = "<button><img src=\"\" alt=\"\"><img src=\"./img/del.png\" alt=\"poza\"></button>";

      var liLi = "<li>" + name + "  " + butTon + "</li>";
      console.log(liLi, "liLi");
      ul.append(liLi);
      // ww = false;
      // }
    }
    var copii = $(document).find("button");
    for (var x = 0; x < copii.length; x++) {
      copii.click(function() {
        console.log(copii, "copii");
        $(this).parent().remove();
      })
    }
  });

});
