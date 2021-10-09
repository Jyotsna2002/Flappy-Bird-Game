var character=document.getElementById("bird");
var jumping=0;
var counter=0;
function free()
{
setInterval(down,20);
function down()
{
    var charactop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    character.style.top=(charactop+4)+'px'; 
   /*var holetop=parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var blockleft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    */
    var ctop=window.getComputedStyle(character).getPropertyValue("top");
    if(ctop==470)  
    {
        window.alert("game over!!");
        character.style.top=100+"px";
    } 
}
}
function jump(){
    jumping= 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>0))
        character.style.top = (characterTop-6)+"px";
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}
function startGame()
{   
    clearInterval(id);

    var id=null;
    var block=document.getElementById("block");
    block.style.visibility="visible";
    var i=document.getElementsByClassName("outer")[0].offsetWidth;
    var x=7+Math.random()*10;
    var y=8+Math.random()*10;
    document.getElementById("pipetop").style.top ="-"+x+"%";
    document.getElementById("pipebottom").style.bottom="-"+y+"%";
    id = setInterval(moveBlock,5);
    function moveBlock()
    {
        i--;
        if(i==-80){
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
