// $(".red").click(function () {
//     $("h1").css("color" , "red");
// });
// $(".yellow").click(function () {
//     $("h1").css("color" , "yellow");
// });
// $(".green").click(function () {
//     $("h1").css("color" , "green");
// });
// $(".blue").click(function () {
//     $("h1").css("color" , "blue");
// });
// $(".orange").click(function () {
//     $("h1").css("color" , "orange");
// });
// JavaScript
$("p").hover(function() {
    var colorClass = $(this).attr("class");
    $("h1").removeClass().addClass(colorClass);
});

$(document).ready(function() {
    $("#colorPicker").change(function() {
        var selectedColor = $(this).val();
        $("body").css("background-color", selectedColor);
    });
});

