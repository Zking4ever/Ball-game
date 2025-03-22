var body = document.getElementsByTagName('body')[0];
var ball = document.getElementById('ball');
//when clicked make the ball able to jump
body.addEventListener('click',async function(){
    ball.style.transform = "translateY(-100px)";
    await new Promise(resolve=>setTimeout(resolve,500));
    ball.style.transform = "translateY(0px)";
});



//now lets create a random div for the game
    var gameArea =document.getElementsByClassName('dynamic_part')[0];
function createObstacle(){
            var box = document.createElement('div');
            box.className ="box";
            gameArea.appendChild(box);
         move();
}
    //make the obstacles run and disapper
    var obstacle = document.getElementsByClassName('box');
async function move(){
                //lets make the left decrease by 1 everytime so we can use it to detect a collision;
            var left= 880;
            while(left!=(-100)){
                obstacle[0].style.left = left+'px';
                collision();
                left--;
               // await new Promise(resolve=>setTimeout(resolve,100));
            }

            await new Promise(resolve=>setTimeout(resolve,2000));
                disapper();
}
function disapper(){
        for(var i=0; i<obstacle.length;i++){

                if(parseInt(obstacle[i].style.left)<290){
                    var parent = obstacle[i].parentElement;
                    parent.removeChild(obstacle[i]);
                    createObstacle();
                }
            }
}
//now lets create the collision detecter
 async function collision(){
            var rectO = obstacle[0].getBoundingClientRect();
            var rectB = ball.getBoundingClientRect();
            if(rectO.left == rectB.right){
                 document.getElementsByClassName('score')[0].innerHTML = parseInt(rectO.left) + ", ----" + rectB.right;
            }
}
for(var i=0;i<1;i++){
    move();
}