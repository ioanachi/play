var $ = require("jquery");
$("document").ready(function() {

  var cutie = $(".raspuns");
  var buttOn = $(".firstbutton");
  var texts = $(".content");
  console.log($.prototype);

  buttOn.click(function() {
    var objx = {
      url: 'http://ioanachichernea.com/',
      type: "get",
      success: function(response) {
        document.write(response);
        console.log(response, 'response');
        var date = '';

        for (var i = 0; i < response.length; i++) {
          console.log(i, 'i');

          var name = "<h2>" + response[i].name + "</h2>";
          console.log(name, 'name');

          var owner = "<p> Owner:" + response[i].owner.login + "</p>"
          console.log(owner, 'owner');

          var ownerUrl = "<p> Owner Url: <a href= " + response[i].owner.url + " target=_blanch>" + response[i].owner.url + "<a></p>"
          console.log(ownerUrl, 'ownerUrl');

          var htmlLink = "<p><a href=" + response[i].url + " target=_blanch>" + response[i].url + "</a></p>"
          console.log(htmlLink, 'htmlLink');

          date += name + owner + ownerUrl + htmlLink;

        }
        cutie.html(date);
        // texts.append(date);
      },
      error: function(xhr) {
        cutie.html(xhr);
      }
    };

    $.ajax(objx);
  })

});
