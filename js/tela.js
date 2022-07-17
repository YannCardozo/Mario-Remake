var tela = 1;
var largura = 150;
var altura = 50;
var xMenu = 220;
var yMenu1 = 280;
var yMenu2 = 340;



function setup(){
    createCanvas(640,580);
    fundo = loadImage('./img/menu_mario.jpg');
}

function draw(){
    textStyle(NORMAL);
    if(tela == 1){
        background(fundo);
        textAlign(CENTER);
        //Iniciar o jogo aqui
        textSize(26);

        if ( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura ){
                
        
            stroke(50);
            fill(300);
            rect(xMenu,yMenu1,largura,altura,55);
            if(mouseIsPressed){
                tela = 2;
            }
       
    }
        fill(240);
        stroke(0);
        text("Iniciar", 300, 313);
        
        if ( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura ){
            //Informações do jogo
            stroke(50);
            fill(300);
            rect(xMenu,yMenu2,largura,altura,55);
            if(mouseIsPressed){
                tela = 3;
                
            }
    }
        fill(240);
        stroke(0);
        text("Instruções", 300, 373);

        if(keyIsDown(ESCAPE)){
            tela = 1;
        }
    }


    else if(tela == 2){
        location.href = 'html-mario.html';

        if(keyIsDown(ESCAPE)){
            tela = 1;
        }

    }
    else if (tela ==3){
        if(keyIsDown(ESCAPE)){
            tela = 1;
        }

    }
}


/*

var tela = 1;
y = 225;
var i;
var fundo;
controle = false;


function setup(){
    createCanvas(640,580);
    fundo = loadImage('./img/menu_mario.jpg')
}

function draw(){
    if (tela == 1){
        background(fundo);
        //Menu com duas opções
        //iniciar o jogo
        textSize(25);
        textAlign(CENTER);
        fill(0, 102, 153);
        rect(300, y, 120, 30);
        fill(363, 245, 255);
 
        text('Jogar',363, 300);
        text('Instruções', 363, 350);
        text('Créditos', 363, 400);

        if(keyIsPressed == false){
            controle = false;
        }
        if(controle ==false){
            if(keyIsDown(UP_ARROW) && (y <= 400 && y > 300)){
                y -= 50;
                controle = true;
            }
            if(keyIsDown(ENTER) && y == 150){
                tela = 2;
                controle = true;
            }
            else if(keyIsDown(ENTER) && y == 200){
                tela = 3;
                controle = true;
            }
            else if(keyIsDown(ENTER) && y == 250){
                tela = 4;
                controle = true;
            }
            if(keyIsDown(DOWN_ARROW) && (y < 400 && y >= 222)){
                y += 50;
                controle = true;
            }


            if(keyIsDown(ESCAPE)){
                tela = 1;
            }
        }
    }

    //jogando
    else if (tela == 2){
        background('none');





        if(keyIsDown(ESCAPE)){
            tela = 1;
        }
    }







}

*/