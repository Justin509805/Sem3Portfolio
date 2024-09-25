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
    const scoresOutOfTen = [7, 8.5, 9, 3, 6, 8.5]; // Scores out of 10 for each bar

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
  // modal
  const modal = document.getElementById('learningOutcomesModal');
  // button on the modal
  const openModalBtn = document.getElementById('learning-outcomes-link');
  // x to close the modal
  const closeModalBtn = document.querySelector('.close');
  // open modal on click
  openModalBtn.onclick = function() {
      modal.style.display = "block";
  }
  // close the modal onclick x
  closeModalBtn.onclick = function() {
      modal.style.display = "none";
  }
  // also close when click outside of modal
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
});







