console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='New value';

var img=document.getElementById('madi');
img.onclick=function()
{
    var interval=setInterval(moveRight,100);
};