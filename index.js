
// Put your JavaScript in this file.

'use strict';   // Enable "strict mode".  Note: This *must* be the first statement in the script.
                // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

function myFunction() {
  location.reload();
}
// create global variables for the buttons so that you can assign a listener
 var myMusicButton2 = document.getElementById("myMusicButton2");
 var myMusicButton = document.getElementById("myMusicButton");
 var myAudio;

var questions = [
["What is the capital of Equador?",["Quito","Puyo","Cuenca"],0],
["What is the capital of Bolivia?",["La Guardia","Sucre","El Alto"],1],
["What is the capital of Peru?",["Callao","Arequipa","Lima"],2],
["What is the capital of Chile?",["La Serena","Santiago","Temuco"],1],
["What is the capital of Venezuela?",["Caracas","Valencia","Maracaibo"],0],
["What is the capital of Brazil?",["Rio de Janeiro","Salvador","Brazillia"],2],
["What is the capital of Guyana?",["Parika","New Amsterdam","Georgetown"],2],
["What is the capital of Suriname?",["Paramaribo","Moengo","Lelydorp"],0],
["What is the capital of Argentina?",["Rosario","Buenos Aires","Mendoza"],1],
["What is the capital of Paraguay?",["Asuncion","San Lorenzo","Ciudad del Este"],0],
["What is the capital of Columbia?",["Cartagena","Cali","Bogota"],2],
["What is the capital of Uruguay?",["Salto","Montevideo","Rivera"],1]
];

 //------------------------------------------------
 myMusicButton.addEventListener('click', function(e)
 {
   myAudio = new Audio("Song3.mp3");

   myAudio.play();

   myMusicButton.style.visibility="hidden"

   myMusicButton2.style.visibility="visible"

 });

  myMusicButton2.addEventListener('click', function(e)
 {
   myAudio.pause();

   myMusicButton.style.visibility="visible"

   myMusicButton2.style.visibility="hidden"

 });

// create global variables for the buttons so that you can assign a listener

// global array of questions and answers.  In my example below, I include an extra field at the end storing the index of the correct answer

var currentQuestion = 0;
var numCorrect = 0;

var myQuestion = document.getElementById("Question");
myQuestion.innerHTML = questions[0][0];

var myForm = document.getElementById("myAnswers");
var i;

// Populate the answers from our array for the initial time.
for (i=0; i< myForm.answer.length; i++)
{
    // first, I grab the right label.  Notice I append the value of i to the text "label" in order to get the right label.  The labels are named label0, label1, label2, etc...
    var myLabel = document.getElementById("label"+i);
    myLabel.innerHTML = questions[0][1][i];
} // end for loop

// -----------------------------------------------
// Button listener
myButton.addEventListener('click', function(e)
{
    // get a local copy of the form and last message text
    var myForm = document.getElementById("myAnswers");
    var lastMessage = document.getElementById("lastMessage");

    // local helper variables
    var i=0;  // iterate through the array of answers
    var radioCheck = false;  // boolean to denote whether or not the user clicked on any of the radio buttons

    // loop through all answers
    for (i=0; i<myForm.answer.length; i++)
    {
      if (myForm.answer[i].checked == true)
      {
        radioCheck = true;
      }
    } // end for loop

    if (radioCheck == false)
      lastMessage.innerHTML = "You must choose an answer";
    else
      {   // increment next question, answers
          currentQuestion++;

          lastMessage.innerHTML = "";

          if (currentQuestion == questions.length)
          {
            myButton3.style.visibility="visible"
            myButton.style.visibility="hidden"

            alert ("You got " + numCorrect + "/12 correct!");
            return;
          }

          myQuestion.innerHTML = questions[currentQuestion][0];

          // Populate the answers from our array.
          for (i=0; i< myForm.answer.length; i++)
          {
              // first, I grab the right label.  Notice I append the value of i to the text "label" in order to get the right label.  The labels are named label0, label1, label2, etc...
              var myLabel = document.getElementById("label"+i);
              myLabel.innerHTML = questions[currentQuestion][1][i];
          } // end for loop
          myButton2.style.visibility="visible"
          myButton.style.visibility="hidden"
      }
});

myButton2.addEventListener('click',function(e)
{
  // get a local copy of the form and last message text
  var myForm = document.getElementById("myAnswers");
  var lastMessage = document.getElementById("lastMessage");

  // local helper variables
  var i=0;  // iterate through the array of answers
  var radioCheck = false;  // boolean to denote whether or not the user clicked on any of the radio buttons

  // loop through all answers
  for (i=0; i<myForm.answer.length; i++)
  {
    if (myForm.answer[i].checked == true)
    {
      radioCheck = true;
      if (i == questions[currentQuestion][2])
        {
          console.log("You got it right");
          numCorrect++
          lastMessage.innerHTML = "Correct! :)";
        }
        else
        {
          lastMessage.innerHTML = "Incorrect! :(";
        }
    }
  } // end for loop

  if (radioCheck == false)
    lastMessage.innerHTML = "You must choose an answer";
  else
    {
      myButton.style.visibility="visible"
      myButton2.style.visibility="hidden"
    }
});
