var character=document.getElementById("bird");
var counter=0;
var id=null;
var time=null;
var call=true;
function free()
{
    document.getElementById("btn").style.visibility="hidden";
time=setInterval(down,10);
function down()
{
    var charactop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    character.style.top=(charactop+3)+'px'; 
    character.style.transform="rotate(60deg)";
    var holetop1=parseInt(window.getComputedStyle(hole1).getPropertyValue("top"));
    var holetop2=parseInt(window.getComputedStyle(hole2).getPropertyValue("top"));
    var holetop3=parseInt(window.getComputedStyle(hole3).getPropertyValue("top"));
    var birdtop=parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    var birdbottom=birdtop+100;
    var holebottom1=holetop1+310;
    var holebottom2=holetop2+310;
    var holebottom3=holetop3+310;
    var blockleft1=parseInt(window.getComputedStyle(block1).getPropertyValue("left"));
    var blockleft2=parseInt(window.getComputedStyle(block2).getPropertyValue("left"));
    var blockleft3=parseInt(window.getComputedStyle(block3).getPropertyValue("left"));
    var charleft=parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var cright=charleft+100;
    var cleft=charleft-100;
    if((charactop>900)||(((blockleft1<cright)&&(blockleft1>cleft))&&((birdtop<holetop1)||(birdbottom>holebottom1))))
    {    clearInterval(id)
        stop();
    } 
   else if((charactop>900)||(((blockleft2<cright-100)&&(blockleft2>cleft-100))&&((birdtop<holetop2)||(birdbottom>holebottom2))))
    {     clearInterval(id) 
        stop();
    }
   else if((charactop>900)||(((blockleft3<cright-200)&&(blockleft3>cleft-200))&&((birdtop<holetop3)||(birdbottom>holebottom3))))
    {    clearInterval(id)
        stop();
    }

}
}
function stop()
{   call=false;
    document.getElementById("btn").style.visibility="hidden";
    document.getElementById("gameover").innerHTML="Game Over:<br>"+counter;
    document.getElementById("replay").style.visibility="visible";
    var charactop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(charactop>900)
    clearInterval(time);
}
function control(event){
    if(event.keyCode==38)
    jump();
}
function jump(){
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>0))
        character.style.top = (characterTop-7)+"px";
        character.style.transform="rotate(0deg)";
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumpCount=0;
        }
        jumpCount++;
    },6);
}
document.addEventListener('keyup',control);
function control1(event)
{
   if(event.keyCode==39)
   right();
}

function right()
{
    var cright = parseInt(window.getComputedStyle(character).getPropertyValue("right"));
    if(cright>0)
    character.style.right=(cright-50)+'px';
}

document.addEventListener('keyup',control1);
function control2(event)
{
   if(event.keyCode==37)
   left();
}

function left()
{
    var cleft = parseInt(window.getComputedStyle(character).getPropertyValue("right"));
    if(cleft<2100)
    character.style.right=(cleft+50)+'px';
}

document.addEventListener('keyup',control2);
function startGame()
{  
    var i=document.getElementsByClassName("outer")[0].offsetWidth;
    var j=document.getElementsByClassName("outer")[0].offsetWidth;
    var k=3000;
    var m=3800;
    id = setInterval(moveBlock,0.3);
    function moveBlock()
    {   if(call==true){
        i-=2;j-=2;k-=2;m-=2;
        if(i==-300){
            i=document.getElementsByClassName("outer")[0].offsetWidth ;
            holePosition("hole1");
        }
        else if(k==-300)
        {
            k=document.getElementsByClassName("outer")[0].offsetWidth;
            holePosition("hole2");
        }
        else if(m==-300){
            m=document.getElementsByClassName("outer")[0].offsetWidth;
            holePosition("hole3");
        }
        else
        {
            document.getElementById("block1").style.left=i+"px";
            document.getElementById("block2").style.left=k+"px";
            document.getElementById("block3").style.left=m+"px";
            document.getElementsByClassName("outer")[0].style.backgroundPositionX=j+"px";
        }
        if(call==true)
        {
        setTimeout(moveBlock,10000);
        counter++;
        document.getElementById("score").innerHTML="Score: "+counter;
        console.log(counter);
        }
    }
    }
    function holePosition(hole)
    {
        document.getElementById(hole).style.top=100+(Math.random()*300)+"px";                   
    }
}
