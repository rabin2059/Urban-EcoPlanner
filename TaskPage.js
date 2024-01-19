// Function to handle button clicks and color changes
function handleButtonClick(leftButtonId, doneButtonId) {
    var leftButton = document.getElementById(leftButtonId);
    var doneButton = document.getElementById(doneButtonId);
  
    // Add a click event listener to the "Done" button
    doneButton.addEventListener('click', function() {
      // Toggle the 'clicked' class on the left button
      leftButton.classList.toggle('clicked');
    });
  }
  
  // Call the function for the first set of buttons
  handleButtonClick('leftButton1', 'doneButton1');
  
  // Call the function for the second set of buttons
  handleButtonClick('leftButton2', 'doneButton2');

  // Call the function for the second set of buttons
  handleButtonClick('leftButton3', 'doneButton3');

    // Call the function for the second set of buttons
    handleButtonClick('leftButton4', 'doneButton4');
  