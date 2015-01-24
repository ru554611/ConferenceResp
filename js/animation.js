//calculate position for #circle and size for #leftSide and #rightSide
$(document).ready(function(){
    docWidth = document.documentElement.clientWidth;
    docHeight = document.documentElement.clientHeight;
            
    //position for circle
    docWidth = docWidth / 2 - 50;
    docHeight = docHeight / 2 - 50;
    $('#circle').css('left', docWidth);
    $('#circle').css('top', docHeight);
    $('#circle').css('visibility', 'visible');
});

//open/close gate animation
$(document).ready(function(){
    $("#circle").click(function(){
        var leftSide = document.getElementById("leftSide");
        var rightSide = document.getElementById("rightSide");
        var circle = document.getElementById("circle");
                
        //calculate width for left and right sides
        var circleTopPosition = window.getComputedStyle(circle).top;
        circleTopPosition = parseInt(circleTopPosition.substr(0, circleTopPosition.length - 2));
        docHeight = document.documentElement.clientHeight;
        var sideWidth = window.getComputedStyle(leftSide).width;
        sideWidth = parseInt(sideWidth.substr(0, sideWidth.length - 2)) + 1;
                    
        var y = $('#circle').css('height');
        y = parseInt(y.substr(0, y.length - 2)) / 2;
        var x = Math.round(docHeight / 2) - y;                   
        
        if (circleTopPosition == 0)
            {
                $("#leftSide")
                    .show(1);
                $("#rightSide")
                    .show(1);
                $("#leftSide")
                    .animate(
                    { left: 0 }, 
                    { duration: 1500,
                    easing: 'easeOutBounce'
                    });
                $("#rightSide")
                    .animate(
                    { right: 0 }, 
                    { duration: 1500,
                    easing: 'easeOutBounce'
                    });
                $("#circle")
                    .animate(
                    { top: x }, 
                    { duration: 1500,
                    easing: 'easeOutBounce'
                    });
            }
        else
            {
                $("#leftSide")
                    .animate(
                    { left: -sideWidth }, 
                    { duration: 900});
                $("#rightSide")
                    .animate(
                    { right: -sideWidth }, 
                    { duration: 900});
                $("#circle")
                    .animate(
                    { top: 0 }, 
                    { duration: 900});
                $("#leftSide")
                    .hide(1);
                $("#rightSide")
                    .hide(1);
            }
    });
});
//calculate position for #circle after resizing window
$(document).ready(function(){
    $(window).resize(function(){
        docWidth = document.documentElement.clientWidth;
        docHeight = document.documentElement.clientHeight;
        
        var x = $('#circle').css('top');
        if (x == '0px')
        {            
            //position for circle
            docWidth = docWidth / 2 - 50;
            docHeight = docHeight / 2 - 50;
            $('#circle').css('left', docWidth);
        }
        else
        {            
            //position for circle
            docWidth = docWidth / 2 - 50;
            docHeight = docHeight / 2 - 50;
            $('#circle').css('left', docWidth);
            $('#circle').css('top', docHeight);
        }
    });
});