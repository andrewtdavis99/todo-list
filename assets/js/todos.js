// Check Off Specific Todos By Clicking

$("input[type = 'text']").hide();



$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// Click On X To Delete Todo

$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

// Add Todo's To List

$("input[type = 'text']").keypress(function (event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("#instruction").remove();
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$("#plus").click(function () {
    $("input[type = 'text']").fadeToggle();
    $("input[type = 'text']").focus();
});

// Creating Sortable List Items

$(function () {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
});