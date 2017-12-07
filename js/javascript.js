// Setting up our variables 
var topics = ["Goku", "Vegeta", "Frieza", "Cell", "Gohan" ];

// Generic function for capturing the character name from the data attribute
function renderButtons() {
    //$("#buttons-view").empty();
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("character");
        a.attr("data-name", topic[i]);
        a.text(topics[i]);
        $("#buttons-view").append(a);
    }
}


// Once the document loads, do these things:
$(document).ready(function() {
    $("#add-character").on("click", function(event) {
        event.preventDefault();
        var movie = $("#character-input").val().trim();
        topics.push(topics);
        renderButtons();        
})    