var character=document.getElementById("bird");
var counter=0;
var id=null;
function free()
{
    document.getElementById("btn").style.visibility="hidden";
setInterval(down,10);
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
    if((charactop>900)||(((blockleft1<100)&&(blockleft1>-100))&&((birdtop<holetop1)||(birdbottom>holebottom1))))
    {
        stop();
    } 
   else if((charactop>900)||(((blockleft2<0)&&(blockleft2>-200))&&((birdtop<holetop2)||(birdbottom>holebottom2))))
    {
        stop();
    }
   else if((charactop>900)||(((blockleft3<-100)&&(blockleft3>-300))&&((birdtop<holetop3)||(birdbottom>holebottom3))))
    {
        stop();
    }
    // else{
        
    // }
    
}
}
function stop()
{   clearInterval(id); 
    document.getElementById("btn").style.visibility="hidden";
    document.getElementById("gameover").innerHTML="Game Over:<br>"+counter;
    document.getElementById("replay").style.visibility="visible";
}
function control(event){
    if(event.key==' ')
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
function startGame()
{   var dif=2;
    clearInterval(id);
    var i=document.getElementsByClassName("outer")[0].offsetWidth;
    var j=document.getElementsByClassName("outer")[0].offsetWidth;
    var k=3000;
    var m=3800;
    id = setInterval(moveBlock,0.1);
    function moveBlock()
    {

        i-=dif;j-=dif;k-=dif;m-=dif;
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
            dif++;
        }
        else
        {
            document.getElementById("block1").style.left=i+"px";
            document.getElementById("block2").style.left=k+"px";
            document.getElementById("block3").style.left=m+"px";
            document.getElementsByClassName("outer")[0].style.backgroundPositionX=j+"px";
        }
        counter++;
        document.getElementById("score").innerHTML="Score: "+counter;
    }
    function holePosition(hole)
    {
        document.getElementById(hole).style.top=100+(Math.random()*300)+"px";                   
    }

    
}
