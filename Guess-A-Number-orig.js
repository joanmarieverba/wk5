//and tell them to press a <button> when they are ready to start.
//Use var mybutton = querySelector(...) and
//mybutton.addEventListener('click', function(e) { ... })
//guess a number between 1 and 100
//math.random generates a number between 0 and 1 but not including 1
//var computerChoice = Math.random();

function getRandomInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
targetNumber = getRandomInclusive(1, 100);
console.log(targetNumber);

// var mybutton = document.querySelector("form input[name=number]");
// console.log(mybutton);
var guess = prompt("Input number between 1 and 100");

var numTries = 1;
while (numTries < 11) {
  // put feedback-frame tag in the html, this is where eveything will go
    var outputFrame =  document.querySelector('feedback-frame');

  //declare the inner frame
    var feedbackContainer = document.createElement('feedback-inner');

//formulate the feedback loop
var feedback = "";
var done = false;
 if (targetNumber > guess) {
   feedback = "Guess number " + numTries + ": " + guess + " was too low";
 } else if (targetNumber < guess) {
    feedback = "Guess number " + numTries + ": " + guess + " was too high";
  } else {
    feedback = "Congratulations! " + guess + " was the right number!";
    done = true;
  }
  if (isNaN(guess) || guess < 1 || guess > 100) {
      feedback = "Invalid entry";
      done = true;
      numTries = 100;
  }
//declare the node with the feedback
  var feedbackNodeTag = document.createElement('feedback-node');
  console.log ("feedbackNodeTag " + feedbackNodeTag);
//create a string with the text version of the feedback
  console.log ("feedback " + feedback);
  var descFeedback = document.createTextNode(feedback);
  console.log ("descFeedback " + descFeedback);
//take feedback and place it into the node
  feedbackNodeTag.appendChild(descFeedback);
  //set up the feedback for output
  feedbackContainer.appendChild(feedbackNodeTag);

  // put everything out onto the web page  between the inner frame markers
  outputFrame.appendChild(feedbackContainer);

  if (done)
  {
      var guess = prompt("Want to try again? Enter another number");
  }
  else
  {
      var guess = prompt("Want to guess again? You get 10 guesses.");
      numTries = numTries + 1;
  }
}
