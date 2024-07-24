document.addEventListener('DOMContentLoaded', (event) => {
    const gameArea = document.getElementById('gameArea');
    const basket = document.getElementById('basket');
    const scoreDisplay = document.getElementById('score');
    let score = 0;
    let basketPosition = gameArea.offsetWidth / 2 - basket.offsetWidth / 2;

    document.addEventListener('mousemove', (e) => {
        const gameAreaRect = gameArea.getBoundingClientRect();
        basketPosition = e.clientX - gameAreaRect.left - basket.offsetWidth / 2;
        if (basketPosition < 0) basketPosition = 0;
        if (basketPosition > gameAreaRect.width - basket.offsetWidth) basketPosition = gameAreaRect.width - basket.offsetWidth;
        basket.style.left = basketPosition + 'px';
    });

    function createFallingObject() {
        const fallingObject = document.createElement('div');
        fallingObject.className = 'fallingObject';
        fallingObject.style.left = Math.random() * (gameArea.offsetWidth - 30) + 'px';
        gameArea.appendChild(fallingObject);

        let fallingInterval = setInterval(() => {
            let top = parseInt(fallingObject.style.top || 0);
            if (top < gameArea.offsetHeight - basket.offsetHeight) {
                fallingObject.style.top = top + 2 + 'px';
            } else {
                clearInterval(fallingInterval);
                gameArea.removeChild(fallingObject);
                if (top >= gameArea.offsetHeight - basket.offsetHeight - 30 &&
                    parseInt(fallingObject.style.left) + 30 > basketPosition &&
                    parseInt(fallingObject.style.left) < basketPosition + basket.offsetWidth) {
                    score++;
                    scoreDisplay.textContent = score;
                }
            }
        }, 10);
    }

    setInterval(createFallingObject, 1000);
});