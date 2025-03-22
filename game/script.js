function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}


var wraper = document.getElementsByClassName('wraper')[0];
var ball = document.getElementById('ball');
var obstacle =document.getElementsByClassName('box');
var gameover = document.getElementsByClassName('wraper2')[0];
var playingArea =document.getElementsByClassName('dynamic_part')[0];
var ScoredResult = document.getElementsByClassName('scoreResult');

wraper.addEventListener('click',async function(){
    ball.style.transform ="translateY(-120px)";
    ball.style.right ="880px";
    await delay(500);
    ball.style.transform ="translateY(0px)"; 
    ball.style.right ="790px";
});
function placeBallRight(){
    var check = parseInt(ball_style.right);
    if(check !=910){
        ball.style.right ="910px";

    }
}
setInterval(placeBallRight,1000);
move();
var over=0;
var score=0;
 async function move(){

            for(var i=(-40);i<1210;i=i+100){
                await delay(1000);
                obstacle[0].style.right = i+"px";
                collision(i);
                if(over==1){
                    break;
                }
                if(i>1100){
                    destroyOldObstacle();
                    createObstacle();
                    score++;
                    count();
                }
            }
    }


var ball_style = window.getComputedStyle(ball);
function collision(e){
    ball_right = parseInt(ball_style.right);
    obstacle_right = e-50;
    if(ball_right==obstacle_right){
        gameover.style.display ="flex";
        over =1;
    }        
}
function createObstacle(){
        var box=document.createElement('div');
        box.className="box";
        playingArea.appendChild(box);
        move();
    
}
function destroyOldObstacle(){
    playingArea.removeChild(obstacle[0]);
}
function count(){
        for(var i=0;i<ScoredResult.length;i++){
            ScoredResult[i].innerHTML = score;
        }
    
}