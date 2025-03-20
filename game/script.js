var container = document.getElementsByClassName('container')[0];
var ball = document.getElementById('ball');
//when clicked make the ball able to jump
container.addEventListener('click',async function(){
    ball.style.transform = "translateY(-50px)";
    await new Promise(resolve=>setTimeout(resolve,500));
    ball.style.transform = "translateY(0px)";
});



//now lets create a random div for the game
var gameArea =document.getElementsByClassName('dynamic_part')[0];
for(var i=1; i<5;i++){
 var box =document.createElement('div');
 box.className="box";
 var j =(i%5);
 box.setAttribute('style','--i:'+j);
 gameArea.appendChild(box);
}
//make the obstacles run and disapper
    var obstacle = document.getElementsByClassName('box');
async function move(){
        var rect = obstacle[0].getBoundingClientRect();
        obstacle[0].style.left ='280px';
        await new Promise(resolve=>setTimeout(resolve,2000));
        disapper();
}
function disapper(){
        for(var i=0; i<obstacle.length;i++){

                if(parseInt(obstacle[i].style.left)<290){
                    var parent = obstacle[i].parentElement;
                    parent.removeChild(obstacle[i]);
                }
        }
}