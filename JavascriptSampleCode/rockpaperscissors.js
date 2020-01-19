
var move = 0;
var score = 0;
var aiScore = 0;

function myFunction(playerMove) {
    playerMove = document.getElementById('pmove').value;
    var displayCount = document.getElementById('scoreCount');

    var aimove = Math.floor(Math.random() * 3);

    switch (aimove) {
        case 0:
            // document.getElementById('result').innerText = "Paper";
            move = 0;
            break;
        case 1:
            // document.getElementById('result').innerText = "Rock";
            move = 1;
            break;
        case 2:
            // document.getElementById('result').innerText = "Scissors";
            move = 2;
            break;
    }

if(aiScore != 5 || score != 5){
    if (playerMove.toLowerCase() === 'paper') {
        if (move === 0) {
            document.getElementById('res').innerText = "Lol! It's a tie!";
            console.log('Paper');
        } else if (move === 1) {
            document.getElementById('res').innerText = "You win!";
            console.log('Rock');
            score++;
            displayCount.innerText = score;
            console.log('Player ' + score);
        } else if (move === 2) {
            document.getElementById('res').innerText = "You lose :(";
            console.log('Scissors');
            ++aiScore;
            console.log('AI' + aiScore);
        }
    } else if (playerMove.toLowerCase() === 'rock') {
        if (move === 0) {
            document.getElementById('res').innerText = "You lose! Man c'mon";
            console.log('Paper');
            ++aiScore;
            console.log('AI' + aiScore);
        } else if (move === 1) {
            document.getElementById('res').innerText = "It's a tie";
            console.log('Rock');
        } else if (move === 2) {
            document.getElementById('res').innerText = "You win!";
            console.log('Scissors');
            score++;
            displayCount.innerText = score;
            console.log('Player ' + score);
        }
    } else if (playerMove.toLowerCase() === 'scissors') {
        if (move === 0) {
            document.getElementById('res').innerText = "You win!!!";
            console.log('Paper');
            score++;
            displayCount.innerText = score;
            console.log('Player ' + score);
        } else if (move === 1) {
            document.getElementById('res').innerText = "You lost this one mate";
            console.log('Rock');
            ++aiScore;
            console.log('AI' + aiScore);
        } else if (move === 2) {
            document.getElementById('res').innerText = "It's a tie";
            console.log('Scissors');
        }
    }
} else if (aiScore == 5){
    document.getElementById('scoreCount').innerText = "AI wins";
} else if (score == 5){
    document.getElementById('scoreCount').innerText = "Player wins";
}


}