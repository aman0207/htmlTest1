var lightTheme = true;
var r = document.querySelector(':root');

function switchTheme() {
    var rs = getComputedStyle(r);
    console.log("The value of --bgcolor before theme change is: " + rs.getPropertyValue('--bgcolor'));
    lightTheme = !lightTheme;
    // Get the styles (properties and values) for the root
  
    console.log("Theme : "+lightTheme);
// Set the value of variable --blue to another value (in this case "lightblue")
if(lightTheme){
    r.style.setProperty('--bgcolor', '#ffffff');
    r.style.setProperty('--textcolor', '#000000');
    r.style.setProperty('--containerbgcolor', '#ffffff');
}else {
    r.style.setProperty('--bgcolor', '#444444');
    r.style.setProperty('--textcolor', '#bebebe');
    r.style.setProperty('--containerbgcolor', '#878683');


}

    console.log("The value of --bgcolor after theme change is: " + rs.getPropertyValue('--bgcolor'));
}

var player1Turn = true;
var stopGame = false;
var moves = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
function boxClicked(index) {
    console.log("Boxed clicked at : "+index);
    if(moves[index] === -1 && !stopGame){
        var box = document.getElementById('box'+index);
        console.log("box : ",box);
    
        var player1 = document.getElementById('player1');
        var player2 = document.getElementById('player2');
        if(player1Turn){
            box.innerHTML = "&#128520;"
            player1.style.setProperty('color', 'BLACK');
            player2.style.setProperty('color', 'RED');
            moves[index] = 1;
        }else{
            box.innerHTML = "&#128519;"
            player1.style.setProperty('color', 'RED');
            player2.style.setProperty('color', 'BLACK');
            moves[index] = 0;
        }
        //checking for win
        // 0,1,2 --> win
        // 3,4,5 --> win
        // 6,7,8 --> win
        // 0,3,6 --> win
        // 1,4,7 --> win
        // 2,5,8 --> win
        // 0,4,8 --> win
        // 2,4,6 --> win
        if(moves[0] === 0 && moves[1] == 0 && moves[2] === 0 || 
            moves[3] === 0 && moves[4] == 0 && moves[5] === 0 || 
            moves[8] === 0 && moves[6] == 0 && moves[7] === 0){
            console.log("Player 2 WIN Rows");
            document.getElementById('winner').innerText = "Player 2 WIN";
            stopGame = true;
        }else if(moves[0] === 1 && moves[1] == 1 && moves[2] === 1 || 
            moves[3] === 1 && moves[4] == 1 && moves[5] === 1 || 
            moves[8] === 1 && moves[6] == 1 && moves[7] === 1){
            console.log("Player 1 WIN ROWs");
            document.getElementById('winner').innerText = "Player 1 WIN";
            stopGame = true;
        }else if(moves[0] === 0 && moves[3] === 0 && moves[6] === 0 ||
            moves[1] === 0 && moves[4] === 0 && moves[7] === 0 ||
            moves[2] === 0 && moves[5] === 0 && moves[8] === 0){
            console.log("Player 2 WIN Column");
            document.getElementById('winner').innerText = "Player 2 WIN";
            stopGame = true;
        }else if(moves[0] === 1 && moves[3] === 1 && moves[6] === 1 ||
            moves[1] === 1 && moves[4] === 1 && moves[7] === 1 ||
            moves[2] === 1 && moves[5] === 1 && moves[8] === 1){
            console.log("Player 1 WIN Column");
            document.getElementById('winner').innerText = "Player 1 WIN";
            stopGame = true;
        }else if(moves[0] === 0 && moves[4] === 0 && moves[8] === 0 ||
            moves[2] === 0 && moves[4] === 0 && moves[6] === 0){
            console.log("Player 2 WIN Diagnol");
            document.getElementById('winner').innerText = "Player 2 WIN";
            stopGame = true;
        }else if(moves[0] === 1 && moves[4] === 1 && moves[8] === 1 ||
            moves[2] === 1 && moves[4] === 1 && moves[6] === 1){
            console.log("Player 1 WIN Diagnol");
            document.getElementById('winner').innerText = "Player 1 WIN";
            stopGame = true;
        }else if(moves.indexOf(-1) === -1){
            console.log("No One wins");
            document.getElementById('winner').innerText = "No One WIN";
            player1.style.setProperty('color', 'BLACK');
            player2.style.setProperty('color', 'BLACK');
            stopGame = true;
        }
        player1Turn = !player1Turn;
    }else{
        console.error("Move not permitted")
    }
    console.log("Moves array : ",moves)
}

function resetGame() {
    player1Turn = true;
    stopGame = false;
    moves = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
    var player1 = document.getElementById('player1');
    var player2 = document.getElementById('player2');
    player1.style.setProperty('color', 'RED');
    player2.style.setProperty('color', 'BLACK');
    document.getElementById('winner').innerText = "Player 1 V/S Player2";
    for(i = 0 ; i< 9 ; i++){
        document.getElementById('box'+i).innerText = " ";
    }
}