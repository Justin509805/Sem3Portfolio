/**
 * Toggles the hamburger icon menu's visibility (for phones).
 */
function myFunction() {
  // Selects the element with the Id: myTopnav and stores it in a variable x
  var x = document.getElementById("myTopnav");

  // Checks if the element's class is set to topnav
  // If it is, it adds the responsive class to the element
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    // If the responsive class is already set, then it reverts back to only topnav
    x.className = "topnav";
  }
}

/**
 * Initializes progress bars on page load.
 */
window.onload = function () {
  // List of scores
  const scoresOutOfTen = [7, 8.5, 9, 5, 7, 8.5];

  // Updates each progress bar and its text
  scoresOutOfTen.forEach((score, index) => {
    /**
     * @type {HTMLElement} progressBar - The progress bar element.
     * @type {HTMLElement} progressText - The text element showing the score.
     */
    const progressBar = document.getElementById(`progress-bar-${index + 1}`);
    const progressText = document.getElementById(`progress-text-${index + 1}`);

    // Converts the score into a percentage and updates the bar and text
    const percentage = score * 10;
    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `${score}/10`;
  });
};

/**
 * Initializes the learning outcomes popup and project modal functionality.
 * Ensures the DOM is loaded before attaching event listeners.
 */
document.addEventListener("DOMContentLoaded", function () {
  // Learning Outcomes Modal
  const learningOutcomesModal = document.getElementById('learningOutcomesModal');
  const openLearningOutcomesBtn = document.getElementById('learning-outcomes-link');
  const closeLearningOutcomesBtn = learningOutcomesModal.querySelector('.close');

  /**
   * Opens the learning outcomes modal on click.
   */
  openLearningOutcomesBtn.onclick = function () {
    learningOutcomesModal.style.display = "block";
  };

  /**
   * Closes the learning outcomes modal when the close button is clicked.
   */
  closeLearningOutcomesBtn.onclick = function () {
    learningOutcomesModal.style.display = "none";
  };

  // Closes modal if clicked outside the container
  window.onclick = function (event) {
    if (event.target == learningOutcomesModal) {
      learningOutcomesModal.style.display = "none";
    } else if (event.target == projectsModal) {
      projectsModal.style.display = "none";
    }
  };
});

// Project Modal
/**
 * @type {HTMLElement} modal - The modal element for projects.
 * @type {HTMLElement} btn - The button that opens the projects modal.
 * @type {HTMLElement} span - The close button for the projects modal.
 */
var modal = document.getElementById("projectsModal");
var btn = document.getElementById("projects-link");
var span = document.getElementsByClassName("close")[0];

/**
 * Opens the projects modal on button click.
 */
btn.onclick = function () {
  modal.style.display = "block";
};

/**
 * Closes the projects modal on close button click.
 */
span.onclick = function () {
  modal.style.display = "none";
};

/**
 * Closes the projects modal if clicked outside the modal.
 */
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
