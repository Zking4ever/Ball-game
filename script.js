function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}


var wraper = document.getElementsByClassName('wraper');
var ball = document.getElementById('ball');
var obstacle =document.getElementsByClassName('box');
var gameover = document.getElementsByClassName('wraper2')[0];
var playingArea =document.getElementsByClassName('dynamic_part')[0];
var ScoredResult = document.getElementsByClassName('scoreResult');
function start(){
    wraper[0].style.display ="flex";
    wraper[1].style.display ="none";
    wraper[2].style.display ="none";
    wraper[3].style.display ="none";
    document.getElementsByClassName('footer')[0].style.opacity ="100";
    move();
}
function exit(){
    wraper[1].style.display ="flex";
    wraper[0].style.display ="none";
    wraper[2].style.display ="none";
    wraper[3].style.display ="none";
    document.getElementsByClassName('footer')[0].style.opacity ="100";

}
function abt(){
    wraper[3].style.display ="flex";
    wraper[0].style.display ="none";
    wraper[1].style.display ="none";
    wraper[2].style.display ="none";
    document.getElementsByClassName('footer')[0].style.opacity ="0";
}
function restart(){
    obstacle[0].style.right ="-70px";
    start();
    
}
wraper[0].addEventListener('click',async function(){
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

var over=0;
var score=0;
 async function move(){

            for(var i=(-40);i<1210;i=i+100){
                await delay(1000);
                obstacle[0].style.right = i +"px";
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
        wraper[2].style.display ="flex";
        over =1;
    }        
    obstacle_right=0;
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