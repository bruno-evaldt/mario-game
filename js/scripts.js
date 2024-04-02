const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const btnRetry = document.querySelector('.retry');
const img = document.querySelector('.game-over');
let score = 0;
let passedPipe=false;



const updateScore = () => {
        score++; 
        document.getElementById('score').textContent = 'Score: ' + score;
    }

const gameover = () => {
    clearInterval(loop)
   
}

const restartGame = () => {
    location.reload()
    
}


const jump = () => {
   mario.classList.add('jump')
    
    setTimeout(() => {
      
        mario.classList.remove('jump');
        }, 500);
    }


     const loop = setInterval (() => {
  
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px',' ');
       
        console.log(marioPosition);
    
        if (pipePosition <= 120 && pipePosition >0 && marioPosition < 90) {
    
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
    
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
    
            mario.src='./img/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px'
    
            btnRetry.src='./img/retry.png';
            btnRetry.style.width = '60px'
            btnRetry.style.marginLeft = '400px'
            btnRetry.style.display = 'block'
            
            
    
            img.src='./img/game-over-game.gif';
            img.style.width = '400px'
            img.style.marginLeft = '400px'
            img.style.display = 'block'
               
            gameover();
        } 

       if(pipePosition < 0 && pipePosition + pipe.offsetWidth < 70 && !passedPipe){
        updateScore()
        passedPipe = true;                                                                                                                                                                               
       }                                       
       if (pipePosition > 0) {
        passedPipe = false;
    }        
      
    }, 10);


document.addEventListener('keydown', jump);

