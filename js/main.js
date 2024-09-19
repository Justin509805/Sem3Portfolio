function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  

  window.onload = function() {
    const percentages = [75, 50, 90, 30, 60, 85]; // Percentages for each bar

    percentages.forEach((percentage, index) => {
        const progressBar = document.getElementById(`progress-bar-${index + 1}`);
        const progressText = document.getElementById(`progress-text-${index + 1}`);

        // Set the width and update the text next to each bar
        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `${percentage}%`;
    });
};
