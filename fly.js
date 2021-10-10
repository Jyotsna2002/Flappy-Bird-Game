var character=document.getElementById("bird");
var jumping=0;
var counter=0;
var id=null;
function free()
{
setInterval(down,10);
function down()
{
    var charactop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    character.style.top=(charactop+3)+'px'; 
    character.style.transform="rotate(60deg)";
    var holetop1=parseInt(window.getComputedStyle(hole1).getPropertyValue("top"));
    var holetop2=parseInt(window.getComputedStyle(hole2).getPropertyValue("top"));
    var birdtop=parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    var birdbottom=birdtop+100;
    var holebottom1=holetop1+310;
    var holebottom2=holetop2+310;
    var blockleft=parseInt(window.getComputedStyle(block1).getPropertyValue("left"));

    if((charactop>850)||(((blockleft<110)&&(blockleft>0))&&((birdtop<holetop1)||(birdbottom>holebottom1))))
    {
        //    window.alert("game over!!");
        stop();
        
    } 
    else if((charactop>850)||(((blockleft<100)&&(blockleft>-50))&&((birdtop<holetop2)||(birdbottom>holebottom2))))
    {
        //    window.alert("game over!!");
        stop();
        
    } 
}
}
function stop()
{   clearInterval(id); 
    
    document.getElementById("btn").style.visibility="hidden";
    document.getElementById("gameover").innerHTML="GameOver"+counter;
    document.getElementById("replay").style.visibility="visible";
}
function jump(){
    jumping= 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>0))
        character.style.top = (characterTop-7)+"px";
        character.style.transform="rotate(0deg)";
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },6);
}
function startGame()
{   
    clearInterval(id);
    var i=document.getElementsByClassName("outer")[0].offsetWidth;
    var j=document.getElementsByClassName("outer")[0].offsetWidth;
    var k=2800;
    id = setInterval(moveBlock,0.1);
    function moveBlock()
    {
        i-=2;j-=2;k-=2;
        if(i==-300){
           i=document.getElementsByClassName("outer")[0].offsetWidth ;
           holePosition("hole1");
        }
        else if(k==-300)
        {
            k=document.getElementsByClassName("outer")[0].offsetWidth + 300;
            holePosition("hole2");
        }
        else
        {
            document.getElementById("block1").style.left=i+"px";
            document.getElementById("block2").style.left=k+"px";
            document.getElementsByClassName("outer")[0].style.backgroundPositionX=j+"px";
        }
    }
    function holePosition(hole)
    {
        document.getElementById(hole).style.top=100+(Math.random()*300)+"px";                     
    }

}
