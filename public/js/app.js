$(document).ready(function() {
    $(".back").hide();
    $(".back2").hide();
});

$(".flipper").flip({
    trigger: 'manual'

});

$(".btn-arrow-left").click(function(){
    $(".flipper").flip({reverse: true});
    $(".flipper").flip('toggle');
    $(".back2").show();
    $(".btn-arrow-left").on("toggle", function() {
        $(".back2").hide();
    })
    });


$(".btn-arrow-right").click(function() {
    $(".flipper").flip({reverse: false});
    $(".flipper").flip('toggle');
    $(".back").show();
    $(".btn-arrow-right").on("toggle", function() {
        $('.back').hide();
    })
});

// $(".btn-arrow-left").on("click", function() {
//     display();

// $(".btn-arrow-right").on("click", function() {
//     display();
// })    

// function display() {
//     if(".btn-arrow-left") {
//         $(".back").html();
//     } 
//     if(".btn-arrow-right") {
//         $(".back2").html();
//     }
// };

// })
