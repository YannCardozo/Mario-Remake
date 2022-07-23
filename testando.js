/*
var xhr = new XMLHttpRequest();
var documento;

xhr.responseType = "json";


xhr.onreadystatechange = function(){
    
    if(xhr.readyState == 4 && xhr.status >= 200 && xhr.status <= 400){
       // alert("deu certo");
       //documento = xhr.response;
       //documento = JSON.parse(documento);
        //console.log(xhr.response);
        documento = xhr.response;
        console.log(documento);
    }else{
       // alert("deu erro");
       console.log("não estou pronto");
    }
}

xhr.open("GET","https://jsonplaceholder.typicode.com/posts/1");


xhr.send();
*/

/*
var xhr = new XMLHttpRequest();
var documento = {
        "userId": 200,
        "id": 12,
        "title": "noticia exclusiva",
        "body": "Desenvolvedor larga Jquery após descobrir quão fácil é ele."
};

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        console.log(xhr);
    }
}

xhr.open("POST","https://jsonplaceholder.typicode.com/posts");

xhr.send(documento);

*/

//if (xhr.send(documento) == true){
 //   console.log("Fui enviado com sucesso meu caro");
//}else{
//   console.log("não me enviaram");
//}
function startgame(){
    const removemenu = document.getElementById('menu');
    const ligajogo = document.getElementById('game-board');
    var liguei = Number(2);
    removemenu.remove();
    if(liguei == 2){
        $("div").after('<div class="row justify-content-center text-center" id="linha-start">',
            '<div class="game-board">','<img src="img/clouds.png" class="clouds">',
            '<img src="img/mario.gif" class="mario" id="mariomorre" onclick="jump" animationend ="morrendo">',
            '<img src="img/pipe.png" class="pipe">','</div>','</div>');
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
        }
    }
function startcreditos(){
    const removemenu = document.getElementById('menu');
    const mostracreditos = document.getElementById('creditos');
    var mostrei = Number(3);
    removemenu.remove();
    if(mostrei == 3){
        $("div").after('<div class="row justify-content-center text-center" id="linha-start">',
        '<div class="creditocentralizado;">','<img src="img/maxresdefault.jpg" class="imgcredito">',
        '</div>','</div>');
    }
}

