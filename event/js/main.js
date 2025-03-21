function changeColor() {
    const box = document.querySelector(".box");
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    box.style.backgroundColor = randomColor;
}
