const mainDiv = document.querySelector('div');

 
const btn = document.createElement('button');
btn.textContent = 'select the number of squares';
document.body.insertBefore(btn, mainDiv);
btn.className = 'btn';
btn.addEventListener('click', resize);

function resize(){
   let x = prompt('enter the number of squares');

   for( i =0; i < x; i++ ){
      const square = document.createElement('div');
      square.addEventListener('mouseover', changeColor);
      mainDiv.appendChild(square);
   }
  
}

function changeColor(event){
   let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
   event.target.style.backgroundColor = randomColor;
}
