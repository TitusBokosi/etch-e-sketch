const mainDiv = document.querySelector('div');
function changeColor(event){
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    event.target.style.backgroundColor = randomColor;
}

 for( i =0; i < 1000; i++ ){
    const square = document.createElement('div');
    square.addEventListener('mouseover', changeColor);
    mainDiv.appendChild(square);
 }

const btn = document.createElement('button');
btn.textContent = 'select the number of squares';
document.body.appendChild(btn);
btn.className = 'btn';
