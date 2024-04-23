const d = document;
function animacionImg(traer){
    d.querySelector('.starbucks').src = traer;
}
function cambiarColorCirculo(color){
    const circulo = d.querySelector('.circulo');
    circulo.style.background = color;
}
