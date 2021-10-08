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