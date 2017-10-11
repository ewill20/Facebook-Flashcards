$(".flipper").flip({
    trigger: 'manual'

});

$(".btn-arrow-left").click(function(){
    $(".flipper").flip({reverse: true});
    $(".flipper").flip('toggle');
     
    });


$(".btn-arrow-right").click(function() {
    $(".flipper").flip({reverse: false});
    $(".flipper").flip('toggle');
    
});