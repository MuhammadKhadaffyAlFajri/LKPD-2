let countdown;
let timeLeft = 10; // 10 seconds
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function startCountdown() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    countdown = setInterval(() => {
        timeLeft--;
        updateTimerDisplay(timeLeft);
        if (timeLeft <= 0) {
            clearInterval(countdown);
            startBtn.disabled = false;
            stopBtn.disabled = true;
        }
    }, 1000);
}

function stopCountdown() {
    clearInterval(countdown);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

startBtn.addEventListener('click', startCountdown);
stopBtn.addEventListener('click', stopCountdown);

// Initialize the timer display
updateTimerDisplay(timeLeft);
