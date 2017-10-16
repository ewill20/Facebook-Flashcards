$(document).ready(function() {
    $(".back").hide();
    $(".back2").hide();
});
    $(".flipper").flip({
        trigger: 'manual'
});
$(".btn-arrow-right").click(function() {
    $(".back2").hide();
    $(".back").show(".different-hints");
    $(".flipper").flip({reverse: false});
    $(".flipper").flip('toggle');
    
    $(".btn-arrow-right").on("toggle", function() {
        $('.back').hide();
        $(".back2").hide();
        
    })
});

    $(".btn-arrow-left").click(function() {
        $(".back").hide();
        $(".flipper").flip({reverse: true});
        $(".flipper").flip('toggle');
        $(".back2").show(".different-Options");
        $(".btn-arrow-left").on("toggle", function() {
            $(".back2").hide();
            $(".back").hide();  
    })
    });
   
