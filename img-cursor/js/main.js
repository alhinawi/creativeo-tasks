document.onmousemove = function (e) {
    var x = e.clientX;
    var y = e.clientY;
    ico.style.left = x + "px";
    ico.style.top = y + "px"; 
}