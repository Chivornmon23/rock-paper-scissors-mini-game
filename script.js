window.onload = function(){
    const popUp = document.getElementById('startPopUp');
    const playNowBtn = document.getElementById('playNowBtn');
    const closeBtn = document.getElementById('closeBtn');
    const bgMusic = document.getElementById('bgMusic');
    const closeMusic = document.getElementById('closeMusic');
    playNowBtn.addEventListener('click',() => {
        popUp.style.display = 'none'; 
        bgMusic.play();
        bgMusic.volume = 0.2; 
    });
    closeBtn.addEventListener('click', () => {
        popUp.style.display = 'none';
        closeMusic.play();
        closeMusic.volume = 0.5;
    });
}

// function to show result popup 
function showResultPopUp(result){
    resultText.textContent = result;
    resultModal.style.display = 'flex';
}

//close result popup
closeResultBtn.onclick = () => {
    resultModal.style.display = 'none';
    closeMusic.play();
    closeMusic.volume = 0.2;
}

let playerScore = 0; 
let botScore = 0;

function playGame(playerMove){
    const computerMove = pickComputerMove();
    let result = '';

    if(playerMove === computerMove){
        showResultPopUp("Its a Tie! 🤭");
        result = "It's a tie!";
    }else if(
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    ){
        showResultPopUp("You Win! 😊")
        result = 'You Win!';
        playerScore++;
        winSound.currentTime = 0;
        winSound.play();
        winSound.volume = 0.5; 
        setTimeout(() => {
            winSound.pause();
            winSound.currentTime = 0;
        }, 1500);
        document.getElementById('player-score').textContent = playerScore;
    } else{
        showResultPopUp("You lose! 😭");
        result = 'You lose!';
        botScore++;
        loseSound.currentTime = 0;
        loseSound.play();
        loseSound.volume = 0.5;
        setTimeout(() => {
            loseSound.pause();
            loseSound.currentTime = 0;
        }, 1500);
        document.getElementById('bot-score').textContent = botScore;
    }
    
    // Update DOM
  document.getElementById('result-text').textContent =
    `You picked ${playerMove}, computer picked ${computerMove}. ${result}`;

  
  
}

function pickComputerMove(){
    const randomNumber = Math.random();

    if(randomNumber < 1/3){
        return 'rock';
    } else if(randomNumber <2/3){
        return 'paper'; 
    } else if(randomNumber <1){
        return 'scissors';
    }
}