const timers = [];

// Function to handle timer setting
function setTimer() {
    const hours = document.getElementById("hour").value || 0;
    const minutes = document.getElementById("min").value || 0;
    const seconds = document.getElementById("sec").value || 0;

    // Create a timer object
    const timer = {
        hours: parseInt(hours),
        minutes: parseInt(minutes),
        seconds: parseInt(seconds),
        display: null,
        intervalId: null
    };

    timers.push(timer);

    // Display the timer
    const currentDiv = document.getElementById("list");
    currentDiv.classList.add("displayy");
    const displayDiv = document.createElement("div");
displayDiv.classList.add("display");
    const timerDisplay = document.createElement("p");
    timerDisplay.textContent = `${timer.hours}h ${timer.minutes}m ${timer.seconds}s`;
    currentDiv.appendChild(timerDisplay);


    // Start the timer
    timer.intervalId = setInterval(function() {
        if (timer.seconds > 0) {
            timer.seconds--;
        } else {
            if (timer.minutes > 0) {
                timer.minutes--;
                timer.seconds = 59;
            } else {
                if (timer.hours > 0) {
                    timer.hours--;
                    timer.minutes = 59;
                    timer.seconds = 59;
             } else {
                    // Timer reached 0, clear interval


                    clearInterval(timer.intervalId);


                    // Remove the timer display from the current timers
                    currentDiv.removeChild(timerDisplay);
                    // Remove the timer from the array
                    const index = timers.indexOf(timer);
                    if (index !== -1) {
                        timers.splice(index, 1);
                    }
                }
            }
        }
        // Update the timer display
        timerDisplay.textContent = `${timer.hours}h ${timer.minutes}m ${timer.seconds}s`;
    }, 1000);
}

// Add click event listener to the "Set" button
document.getElementById("btn").addEventListener("click", setTimer);

