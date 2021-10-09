var character=document.getElementById("bird");
var jumping=0;
var counter=0;
function free()
{
setInterval(down,10);
function down()
{
    var charactop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    character.style.top=(charactop+3)+'px'; 
    character.style.transform="rotate(60deg)";
    var holetop=parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var blockleft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if((charactop>850)||((blockleft<-15)&&(blockleft>109)))  
    {
      /* window.alert("game over!!");*/
       character.style.top=50+"px";
    } 
}
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

    var id=null;
    var block=document.getElementById("block");
    var i=document.getElementsByClassName("outer")[0].offsetWidth;
    var j=document.getElementsByClassName("outer")[0].offsetWidth;
    var x=7+Math.random()*10;
    var y=8+Math.random()*10;
    id = setInterval(moveBlock,0.1);
    function moveBlock()
    {
        i-=2;j--;
        if(i==-200){
            i=document.getElementsByClassName("outer")[0].offsetWidth;
            holePosition();
        }
        else
        {
            document.getElementById("block1").style.left=i+"px";
            document.getElementsByClassName("outer")[0].style.backgroundPositionX=j+"px";
        }
    }
    function holePosition(){
    document.getElementById("hole1").style.top=100+(Math.random()*300)+"px";         
    document.getElementById("hole2").style.top=100+(Math.random()*300)+"px";             
    }

}
