document.addEventListener('DOMContentLoaded', () => {
    const bird = document.querySelector('.bird');
    const display = document.querySelector(".game-container")
    const ground = document.querySelector(".ground");

    let birdLeft = 220;
    let birdBottom = 100;
    let gravity = 2;
    let isGameOver = false;
    let gap = 400;

    function startGame(){
        birdBottom-= gravity;
        bird.style.bottom = birdBottom + "px";
        bird.style.left = birdLeft + "px";
        console.log(!isGameOver);
    }
    let gameTimerId= setInterval(startGame, 20);

    function control(e) {
        if (e.keyCode == 32){
            jump();
        }
    }

    function jump(){
        if(birdBottom < 500){
          birdBottom +=  50;
          bird.style.bottom = birdBottom + "px";
        }
    }

    document.addEventListener('keyup', control);

    function generateObstacle(){
        console.log("generate because game over" + isGameOver);
        let obstacleLeft = 500;
        let randHeight = Math.random() *60;
        let obstacleBottom = randHeight;
        const obstacle = document.createElement('div');
        const topObstacle =document.createElement("div");
        if(!isGameOver){
            obstacle.classList.add('obstacle');
            topObstacle.classList.add('topObstacle');
        }
        display.appendChild(obstacle);
        display.appendChild(topObstacle);                
        obstacle.style.left = obstacleLeft + "px";
        topObstacle.style.left = obstacleLeft + "px";
        obstacle.style.bottom = obstacleBottom + "px";
        topObstacle.style.bottom = obstacleBottom + gap+ "px";

        function moveObstacle(){
            obstacleLeft -= 2;
            obstacle.style.left = obstacleLeft + "px";
            topObstacle.style.left = obstacleLeft + "px";

            if (obstacleLeft === -60){
                clearInterval(timerId);
                display.removeChild(obstacle);
                display.removeChild(topObstacle);
            }
            if ((obstacleLeft > 200 && obstacleLeft< 280 && birdLeft === 220 && birdBottom < obstacleBottom+153)|| 
                birdBottom === 0 ||
                (obstacleLeft > 200 && obstacleLeft< 280 && birdBottom > obstacleBottom+gap-200)){
                gameOver();
                clearInterval(timerId);
            }
        }
        let timerId = setInterval(moveObstacle, 20);
        if(isGameOver){
            setTimeout(generateObstacle, 3000);
        }
    }

    generateObstacle();



    function gameOver(){
        console.log("gg")
        clearInterval(gameTimerId);
        isGameOver = true;  
        document.removeEventListener('keyup', control)
    }
});