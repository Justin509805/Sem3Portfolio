// Open and close hamburger icon (for phones)
function myFunction() {
  // Selects element with the Id: myTopnav and stores it in a variable x
    var x = document.getElementById("myTopnav");

    // Cheks if the element's class is set to topnav
    // If it is, it adds the responsive class to the element
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      // If the responsive class is already set then it revert back to only topnav
      x.className = "topnav";
    }
  }
  
  // Progressbars
  window.onload = function() {
    // List of scores
    const scoresOutOfTen = [7, 8.5, 9, 5, 7, 8.5];

    // Get the progress bar/text element by the Id: progress-bar/progress-text
    scoresOutOfTen.forEach((score, index) => {
        const progressBar = document.getElementById(`progress-bar-${index + 1}`);
        const progressText = document.getElementById(`progress-text-${index + 1}`);

        // Makes the score into a percentage, adds a "%" icon or "out of 10"
        const percentage = score * 10;
        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `${score}/10`;
    });
};


// Learning outcomes popup
// Makes the code run dom is loaded
document.addEventListener("DOMContentLoaded", function() {
  // Learning Outcomes Modal
  const learningOutcomesModal = document.getElementById('learningOutcomesModal');
  const openLearningOutcomesBtn = document.getElementById('learning-outcomes-link');
  const closeLearningOutcomesBtn = learningOutcomesModal.querySelector('.close');
  
    // Opens modal on click
  openLearningOutcomesBtn.onclick = function() {
      learningOutcomesModal.style.display = "block";
  }
    // Also closes when clicked outside of modal
  closeLearningOutcomesBtn.onclick = function() {
      learningOutcomesModal.style.display = "none";
  }


  // Project popup
  // Closes modal if clicked outside of the container
  window.onclick = function(event) {
      if (event.target == learningOutcomesModal) {
          learningOutcomesModal.style.display = "none";
      } else if (event.target == projectsModal) {
          projectsModal.style.display = "none";
      }
  }
});

var modal = document.getElementById("projectsModal");
var btn = document.getElementById("projects-link");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}








