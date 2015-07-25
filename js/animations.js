$(document).ready(function() {
// all code goes in here
    $(".tweet-compose").on("click", function () {
        $(this).css("height", "5em");
        $("#tweet-controls").css("visibility", "visible");
    });

    $("#tweet-content > .tweet-compose").on("keydown", function () {
        var charCount = 140 - $(this).val().length;

        $("#char-count").text(charCount);
        if(charCount<= 10) {
            $("#char-count").css({"color": "red", "font-weight": "bold"});
        }
        else{
            $("#char-count").removeAttr("style");
        }
        if(charCount < 0){
            $("#tweet-submit").prop("disabled", true);
        }
        else {
            $("#tweet-submit").prop("disabled", false);
        }
    })
    $("#tweet-submit").on("click", function() {
        $(".tweet").first().clone().prependTo("#stream");
        $(".tweet .avatar").first().attr("src", "img/alagoon.jpg");
        var name = "Jon Spalding";
        $(".tweet .fullname").first().text(name);
        var text = $(".tweet-compose").val();
        $(".tweet-text").first().text(text);
    })

    $("#stream").on("mouseenter", ".tweet", function() {
        $(".tweet-actions").css("visibility", "visible");
    }).on("mouseleave", ".tweet", function(){
        $(".tweet-actions").css("visibility", "hidden");
    })

});




