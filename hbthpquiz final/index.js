let currentQuestion = 0;
let score = 0;
  
  
//document ready, add listeners to this first function
$(function() {
  $('.quizIntro').css("display", "flex");
  setListenersForQuizIntro();
  setListenersForQuizContent();
});

//start with everything hidden so it doesn't have to rerender or display things then hide them
function hideAllSections () {
  $('.quizSection').hide();
}

//display the questions when the start button is clicked
function setListenersForQuizIntro () {
  $('.startButton').click(function() {
    // alert(2);
    hideAllSections();
    $('.quizContent').css("display", "flex");
    startQuestions();
    userSelectAnswer();
  });
}

//redisplay first page when quiz ends and user wants to try again
function setListenersForQuizContent () {
$('.quizEndButton').click(function() {
    // alert(2);
    hideAllSections();
    currentQuestion = 0;
    score = 0;
    $('.scorebox').html(`SCORE ${score}/10`);
    $('.questionNumber').html(`Q ${currentQuestion+1}`);
    $('.quizContent').css("display", "flex");
    startQuestions();
    userSelectAnswer();
  });
}

//tell the code to display the questions (added to start button listener function)
function startQuestions () {
  let htmlForTheQuestion= createQuestions(currentQuestion);
  $('.questionsContainer').html(htmlForTheQuestion);
}

//teach the code how to create the questions
function createQuestions (index) {
  // index=position, so that's why it's pulling the properties from the first object
    return `
    <form class="questionForm">
    <fieldset>
    <legend> ${STORE[index].question} </legend>
      <label class="answerButton2 answerButton ${STORE[index].answers[0]===STORE[index].correctAnswer ? 'correct' : 'incorrect'}">
        <input type="radio" value="${STORE[index].answers[0]}" name="answer" required>
        <span>${STORE[index].answers[0]}</span>
      </label>
      <label class="answerButton2 answerButton ${STORE[index].answers[1]===STORE[index].correctAnswer ? 'correct' : 'incorrect'}">
        <input type="radio" value="${STORE[index].answers[1]}" name="answer" required>
        <span>${STORE[index].answers[1]}</span>
      </label>
      <label class="answerButton2 answerButton ${STORE[index].answers[2]===STORE[index].correctAnswer ? 'correct' : 'incorrect'}">
        <input type="radio" value="${STORE[index].answers[2]}" name="answer" required>
        <span>${STORE[index].answers[2]}</span>
      </label>
      <label class="answerButton2 answerButton ${STORE[index].answers[3]===STORE[index].correctAnswer ? 'correct' : 'incorrect'}">
        <input type="radio" value="${STORE[index].answers[3]}" name="answer" required>
        <span>${STORE[index].answers[3]}</span>
      </label>
      <button type="submit" class="nextButton"> ${ index < 9 ? 'Submit Answer' : 'Finish Quiz' }
            </button>
    </fieldset>
    </form>`;
}


function userSelectAnswer () {
  $('form').on('submit', function (event) {
    event.preventDefault();
    
    let selected = $('input:checked');
    let userActiveAnswer = selected.val();
    
    // step 1: check user's response and update score
    let correctAnswer = `${STORE[currentQuestion].correctAnswer}`;
  
    if (userActiveAnswer === correctAnswer) {
      score ++;
    }

    //remove hover css
    $( "input[name=answer]" ).parent().removeClass( "answerButton" );
    
    // hide radio buttons
    $( "input[name=answer]" ).hide();
    
    // disable radio buttons
    $( "input[name=answer]" ).prop( "disabled", true );
    
    // update score display
    $('.scorebox').html(`SCORE ${score}/10`);
  
    //change submit button to next question and make it more prominent
    if (currentQuestion < STORE.length-1){
     $('.nextButton').html('Next Question').css("border", "solid 10px white"); 
    }
    
    // selected answers get borders
    $('input:checked').parent().css("border", "3px dashed white");
    
    //display what the correct answer is
    $('legend').html(`THE CORRECT ANSWER IS: ${STORE[currentQuestion].correctAnswer}.`);
  
    //wait for another click in order to go to step 2 
    // need to remove the current event listener for the button and set a new event listener for the click that's going to use the function completeQuestionFlow
    $('.nextButton').off().click(completeQuestionFlow);
  });
}

function completeQuestionFlow () {
  // step 2: check if there's another question after this current question, else take to results page, show final score
    currentQuestion ++;
    // console.log(currentQuestion);
    if (currentQuestion >= STORE.length) {
      hideAllSections();
      $('.quizEnd').css("display", "flex");
    } else {
      // step 3: remove current question and answers
      // step 4: replace with next object of question and answers
      startQuestions();
      userSelectAnswer();
      // step 5: update question number 
      $('.questionNumber').html(`Q${currentQuestion+1}`);
    }
}
