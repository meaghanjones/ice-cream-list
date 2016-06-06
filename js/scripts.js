var flavors = ["chololate", "straberry", "vanilla", "banana"];

$(document).ready(function() {
    var result="";

    flavors.forEach(function(flavor) {

    $(".person1").text(result += " "+flavor);

  });
});
