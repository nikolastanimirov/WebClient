  $(document).ready(function(){
    //defaults player's turn to X'
    var turn = "X";
    //array stroing the values
    var turns = ["#","#","#","#","#","#","#","#","#"];
    //player 2
    var playerTwo = "O";
    //keeps track if its players 2 turn
    var gameOn = false;
// Players 2 turn X
$('#turnX').click(function(){
    turn = "O";
    playerTwo = "X";
    $("#turnX").removeClass("btn-primary");
    $("#turnO").addClass("btn-primary");
});
//Players 2 turn O

$('#turnO').click(function(){
    turn = "X";
    playerTwo = "O";
    $("#turnO").removeClass("btn-primary");
    $("#turnX").addClass("btn-primary");
});

function playerTurn(turn,id){
    var spotTaken=$("#"+id).text();
    if(spotTaken==="#"){
        turns[id] = turn;
        $("#"+id).text(turn);
        winCondition(turns,turn);   
    }
};
function winCondition(turnArray, currentTurn){
    if(turnArray[0]===currentTurn && turnArray[1]===currentTurn && turnArray[2]===currentTurn){
        gameOne =true;
        reset();
        alert("Player "+currentTurn+" wins! ");  
    }
    else if (turnArray[2]===currentTurn && turnArray[4]===currentTurn && turnArray[6]===currentTurn){
        gameOne =true;
        reset();
        alert("Player "+currentTurn+" wins! ");  
    }
    else if (turnArray[0]===currentTurn && turnArray[3]===currentTurn && turnArray[6]===currentTurn){
        gameOne =true;
        reset();
        alert("Player "+currentTurn+" wins! ");  
    }
    else if (turnArray[0]===currentTurn && turnArray[4]===currentTurn && turnArray[8]===currentTurn){
        gameOne =true;
        reset();
        alert("Player "+currentTurn+" wins! ");  
    }
    else if (turnArray[1]===currentTurn && turnArray[4]===currentTurn && turnArray[7]===currentTurn){
        gameOne =true;
        reset();
        alert("Player "+currentTurn+" wins! ");  
    }
    else if (turnArray[2]===currentTurn && turnArray[5]===currentTurn && turnArray[8]===currentTurn){
        gameOne =true;
        reset();
        alert("Player "+currentTurn+" wins! ");  
    }
    else if (turnArray[3]===currentTurn && turnArray[4]===currentTurn && turnArray[5]===currentTurn){
        gameOne =true;
        reset();
        alert("Player "+currentTurn+" wins! ");  
    }
    else if (turnArray[6]===currentTurn && turnArray[7]===currentTurn && turnArray[8]===currentTurn){
        gameOne =true;
        reset();
        alert("Player "+currentTurn+" wins! ");  
    }
    else{
        gameOn=false;
    }
   
};
$(".tic").click(function(){
    var slot = $(this).attr('id');
    playerTurn(turn,slot);
});

function reset(){
    turns = ["#","#","#","#","#","#","#","#","#"];
    count = 0;
    $(".tic").text("#");
    gameOn= true;
};
$("#reload").on('click',function ifDraw(){
    location.reload();
    });

});
