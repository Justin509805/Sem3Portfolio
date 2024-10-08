// Open and close hamburger icon for small devices
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  // Progressbars
  window.onload = function() {
    const scoresOutOfTen = [7, 8.5, 9, 5, 7, 8.5]; // Scores out of 10 for each bar

    scoresOutOfTen.forEach((score, index) => {
        const progressBar = document.getElementById(`progress-bar-${index + 1}`);
        const progressText = document.getElementById(`progress-text-${index + 1}`);

        // Makes filled in amount convert to percentage on the progressbar
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
  
    // open modal on click
  openLearningOutcomesBtn.onclick = function() {
      learningOutcomesModal.style.display = "block";
  }
    // also close when click outside of modal
  closeLearningOutcomesBtn.onclick = function() {
      learningOutcomesModal.style.display = "none";
  }


  // PROJECTS MODAL
  // Close modal if clicking outside of the container
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








