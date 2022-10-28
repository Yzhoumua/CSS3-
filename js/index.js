init()
function init(){
    var Oimg = $('img');
    var len = Oimg.length;
    var degdu = 360  / len;
   for(var i = 0; i < len ; i ++){
   
        $(Oimg[i]).css({
            transform :'rotateY(' + degdu*i + 'deg)' +' translateZ(500px)',
            transition: 'transform ' + '0.3s ' + (len - 1 - i)*0.1  +'s'
        })
   }
  Bevent();
}
function Bevent(){
    var Body = $('body');
    var oWap = $('.wapper')
    var lastY,lastX,nowX,nowY,disX = 0,disY = -10;
    var rowX = 0, rowY = 0;
    var timer;
    Body.on('mousedown',function(e){
        var event = e || window.event;
        lastX = event.clientX;
        lastY = event.clientY;
        Body.on('mousemove',function(e){
            var event = e || window.event;
            nowX = event.clientX;
            nowY = event.clientY;
            disX = nowX - lastX;
            disY = nowY - lastY;
            rowX -= disY * 0.2;
            rowY += disX * 0.2;
            oWap.css({
                transform:'rotateX(' + rowX +'deg) ' + 'rotateY(' + rowY +'deg)',
                cursor : 'move'
            });
            lastX = nowX;
            lastY = nowY;
        })
        Body.on('mouseup',function(){
            $(this).off('mousemove');
            clearInterval(timer);
            timer = setInterval(function(){
                disX *= 0.9;
                disY *= 0.9;
                rowX -= disY * 0.2;
                rowY += disX * 0.2;
                oWap.css({
                    'transform': 'rotateX(' + rowX + 'deg) rotateY(' + rowY + 'deg)',
                    'cursor': 'pointer'
                })
                if (Math.abs(disX) < 0.1 && Math.abs(disY) < 0.1) {
                    clearInterval(timer);
                }
            },20)
        })
        return false
    })
}