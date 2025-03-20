var container = document.getElementsByClassName('container')[0];
var ball = document.getElementById('ball');
//when clicked make the ball able to jump
container.addEventListener('click',async function(){
    ball.style.transform = "translateY(-50px)";
    await new Promise(resolve=>setTimeout(resolve,500));
    ball.style.transform = "translateY(0px)";
});
//cont.style.backgroundColor ="green";
//now lets create a random div for the game
var gameArea =document.getElementsByClassName('dynamic_part')[0];
for(var i=1; i<5;i++){
 var box =document.createElement('div');
 box.className="box";
 var j =(i%5);
 box.setAttribute('style','--i:'+j);
 gameArea.appendChild(box);
}
function move(){
    var obstacle = document.getElementsByClassName['box'];
    var rect = obstacle[0].boundingClientRect;
    alert(rect);
}