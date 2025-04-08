document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.querySelector(".progress-bar");
    const progressText = document.querySelector(".progress-text");
    const loadingText = document.querySelector(".loading-text");
    const restartBtn = document.getElementById("restart-btn");
  
    let progress = 0;
    let interval = null;
  
    // Function to update the progress bar UI and change color based on progress
    function updateProgressBar() {
      progressBar.style.width = `${progress}%`;                          // Set bar width
      progressText.textContent = `${progress}%`;                         // Update text inside the bar
      loadingText.textContent = `Loading... ${progress}%`;               // Update text below the bar
  
       // Update color based on progress value
       if (progress >= 0 && progress < 33) {
        progressBar.style.backgroundColor = "#FF8000"; // Orange
    } else if (progress >= 33 && progress < 66) {
        progressBar.style.backgroundColor = "#8A2BE2"; // Purple (Violet)
    } else if (progress >= 66 && progress <= 100) {
        progressBar.style.backgroundColor = "#4CAF50"; // Green
    }
  
      if (progress === 100) {
        clearInterval(interval);
        interval = null;
        loadingText.textContent = "Loading complete!";
        restartBtn.style.display = "inline-block";
      }
    }
  
    // Function to start the loading animation
    function startLoading() {
      if (interval) return; // Prevent multiple intervals
  
      interval = setInterval(() => {
        progress++;
        updateProgressBar();
      }, 50);
    }
  
    // Handle restart button click
    restartBtn.addEventListener("click", function() {
      progress = 0;
      loadingText.style.display = "block";
      restartBtn.style.display = "none";
      startLoading();
    });
  
    startLoading();
  });
  