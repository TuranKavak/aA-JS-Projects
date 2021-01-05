document.addEventListener("DOMContentLoaded", function() {

    const canvas = document.getElementById('mycanvas');

    canvas.width = 500;
    canvas.height = 500;

    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 100, 100);

    // First path
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 15;
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke();



});