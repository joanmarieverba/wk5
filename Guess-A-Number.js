//start by getting a random number
function getRandomInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
targetNumber = getRandomInclusive(1, 100);

var numTries = 1;

function GuessNumber (){
  if (numTries < 11) {

    //get the input value, change into an integer
    var mybutton = document.querySelector("input").value
    var guess = parseInt(mybutton, 10);

    // put feedback-frame tag in the html, this is where eveything will go
    var outputFrame =  document.querySelector('feedback-frame');

    //declare the inner frame
    var feedbackContainer = document.createElement('feedback-inner');

    //formulate the feedback to the screen
    var feedback = "";
    var done = false;

    if (targetNumber > guess) {
      feedback = "Guess number " + numTries + ": " + guess + " was too low. Enter another number to try again.";
    } else if (targetNumber < guess) {
      feedback = "Guess number " + numTries + ": " + guess + " was too high. Enter another number to try again.";
    } else if (targetNumber === guess) {
      feedback = "Congratulations! " + guess + " was the right number! \n Enter another number to play again.";
      done = true;
    }
    if (isNaN(guess) || guess < 1 || guess > 100) {
      feedback = "Invalid entry";
      done = true;
      numTries = 100;
    }
  //if numTries is over 10, feedback is that the limit was exceeded
  } else {
  feedback = "10 guess limit exceeded";
  }

  //output the feedback

  //declare the node with the feedback
  var feedbackNodeTag = document.createElement('feedback-node');
  //create a string with the text version of the feedback
  var descFeedback = document.createTextNode(feedback);
  //take feedback and place it into the node
  feedbackNodeTag.appendChild(descFeedback);
  //set up the feedback for output
  feedbackContainer.appendChild(feedbackNodeTag);

  // put everything out onto the web page  between the inner frame markers
  outputFrame.appendChild(feedbackContainer);

  if (done)
  {
    //user can start over
      numTries = 1;
      targetNumber = getRandomInclusive(1, 100);
  }
  else {
    //user can try again
      numTries = numTries + 1;
  }
}
