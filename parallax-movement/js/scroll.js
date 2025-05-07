//vars 

var header = document.getElementById("header");
var info = document.getElementById("info");
var currentInfo = parseInt(this.window.getComputedStyle(info).top);


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    header.style.left = value * 0.25 + 'px';
    info.style.left = value * 1.25 + 'px';

    info.style.top = currentInfo + value + 'px';
})