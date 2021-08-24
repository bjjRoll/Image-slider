const btn_prev = document.querySelector('#gallery .buttons .prev');
const btn_next = document.querySelector('#gallery .buttons .next');

const images = document.querySelectorAll('#gallery .photos img');
let i = 0;

btn_prev.onclick = function(){
     images[i].className = '';
     i = i - 1;
     
     if(i < 0){
         i = images.length - 1;
     }
     
     images[i].className = 'showed';
}

btn_next.onclick = function(){
     images[i].className = '';
     i = i + 1;
     
     if(i >= images.length){
         i = 0;
     }
     
     images[i].className = 'showed';
}
