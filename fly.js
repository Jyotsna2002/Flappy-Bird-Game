<<<<<<< HEAD
var character=document.getElementById("bird");
var jumping=0;
var counter=0;
setInterval(down,10);
function down()
{
    var charactop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    character.style.top=(charactop+3)+'px'; 
}
function jump(){
    jumping= 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>0))
        character.style.top = (characterTop-10)+"px";
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },5);
}
/*
setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop+3)+"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        alert("Game over. Score: "+(counter-1));
        character.style.top = 100 + "px";
        counter=0;
    }
},10);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)){
            character.style.top = (characterTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}*/
=======
function startGame()
{
    clearInterval(id);

    var id=null;
    var block=document.getElementById("block");
    var i=document.getElementsByClassName("outer")[0].offsetWidth;
    var x=7+Math.random()*10;
    var y=8+Math.random()*10
    document.getElementById("pipetop").style.top ="-"+x+"%";
    document.getElementById("pipebottom").style.bottom="-"+y+"%";
    id = setInterval(moveBlock,5)
    block.style.right=0+"px";
    function moveBlock()
    {
        i--;
        if(i==0){
            i=document.getElementsByClassName("outer")[0].offsetWidth;
        }

        else{
            document.getElementById("block").style.left=i+"px";
       
        // document.getElementById("pipebottom").style.height = 100 - (document.getElementById("pipetop").offsetHeight + 15) + "%";
        }
    }
    function blockPosition(){
        
        
        
    }

}
>>>>>>> a558ea9e1ece64e424b63557f931ccd8133f76d8
