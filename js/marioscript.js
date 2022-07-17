
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');


var x = document.getElementById("mariomorre");



const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const morrendo = () =>{
    mario.classlist.add('morrendo');

    setTimeout(() => {

        mario.classList.remove('morrendo');
        
    }, 500);

}



const loop = setInterval(() => {

    console.log('loop')
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    const cloudsPosition = window.getComputedStyle(clouds).position;

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        x.style.WebkitAnimation = "morrendo 2s 1";
        x.addEventListener("webkitAnimationEnd", morrendo);
        musica.src = './audio/tema_morte.mp3'

        clouds.style.animation = `${cloudsPosition}px`;
        location.href = 'html-mario.html';
        clearInterval(loop);
    }



}, 10)





document.addEventListener('keydown', jump);

document.addEventListener('animationend', morrendo);

