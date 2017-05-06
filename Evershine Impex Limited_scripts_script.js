/**
 * Created by Kranti on 12/10/2016.
 */

/*
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();
*/

$(document).ready(function() {
    var $platesButton = $('#plates');
    var $content = $('.content');
    
    $platesButton.click(function(){
        $content.addClass('platesImages').append('<img src="images/plates.jpg">');


    });

    /* $platesButton.click(function() {
        $('.sub_header').fadeOut('slow');
        console.log("PLATES APPEAR NOW");
    }); */
});

