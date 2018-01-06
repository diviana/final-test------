(function () {
    "use strict";
    
    
    $.getJSON("js/kids.json", function(data) {
        appendKids(data);
        
    });
    
})();

function filterKIds() {
    var text = $("#filter").value;
    $.getJSON("js/kids.json", function(data) {
        var filteredKids;
        data.forEach(function(element){
            if (element.name.indexOf(text) != -1) {
                filteredKids.push(element);
            }
        });
        
        appendKids(filteredKids);
    });
}

function appendKids(data) {
    var kidTemplate = 
"        <div class=\"kid col-md-6 mb-5\">\n" +
"          <div class=\"card\">\n" +
"            <div class=\"card-heading bg-info text-white\">\n" +
"              <h3 class=\"m-3\">%name%</h3>\n" +
"            </div>\n" +
"            <div class=\"card-body row\">\n" +
"              <div class=\"col-lg-4\">\n" +
"                <img class=\"img-fluid\" src=\"%pic-name%\">\n" +
"              </div>\n" +
"              <div class=\"col-lg-8\">\n" +
"                <ul class=\"my-4\">\n" +
"                  <li><h5>Години: %age%</h5></li>\n" +
"                  <li><h5>Любим цвят: %color%</h5></li>\n" +
"                  <li><h5>Любима игра: %game%</h5></li>\n" +
"                  <li><h5>Любима храна: %food%</h5></li>\n" +
"                </ul>\n" +
"                <button type=\"button\" class=\"btn btn-outline-info\" data-toggle=\"modal\" data-target=\"#kidModal\">Още</button>\n" +
"              </div>\n" +
"            </div>\n" +
"          </div>\n";
    var kidHTML;
    data.forEach(function(element){
            kidHTML = kidTemplate.replace(/%name%/g, element.name)
            .replace(/%pic-name%/g, element.image)
            .replace(/%game%/g, element.game)
            .replace(/%food%/g, element.food)
            .replace(/%age%/g, element.age)
            .replace(/%color%/g, element.color);
            $("#kids").append(kidHTML);
        });
}