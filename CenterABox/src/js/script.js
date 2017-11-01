var $ = require("jquery");
$(document).ready(function(){

var container = $("#firstC");
var content = "<div class=\"box\"></div>"
var box = container.append(content);
var redBox = "<div class=\"redBox\"></div>"
box.append(redBox);
})
