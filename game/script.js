function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}


var body = document.getElementsByTagName('body')[0];
var ball = document.getElementById('ball');
var obstacle =document.getElementsByClassName('box');

body.addEventListener('click',async function(){
    ball.style.transform ="translateY(-120px)";
    await delay(500);
    ball.style.transform ="translateY(0px)"; 
});


move();
var over=0;
 async function move(){

            for(var i=(-40);i<1210;i=i+100){
                obstacle[0].style.right = i+"px";
                collision(i);
                if(over==1){
                    break;
                }
                await delay(1000);
            }
    }

function collision(e){
    var ball_style = window.getComputedStyle(ball);
    ball_right = parseInt(ball_style.right);
    obstacle_right = e+50;
    if(ball_right==obstacle_right){
        console.log('reached'); 
        over =1;
    }
        
    
}