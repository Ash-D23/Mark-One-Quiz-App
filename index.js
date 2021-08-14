var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
	{
		name: 'Ashutosh',
		score: 3
	},

	{
		name: 'Akash',
		score: 2
	}
];

// array of objects with questions and answers
var questions = [
	{
		question: 'Where do I live? ',
		answer: 'Chennai'
	},
	{
		question: 'My favorite Food would be? ',
		answer: 'Pizza'
	},
	{
		question: 'My favourite Movie? ',
		answer: 'Avengers'
	},
  {
		question: 'My favourite super hero? ',
		answer: 'iron man'
	},
  {
		question: 'My age? ',
		answer: '23'
	}
];

// into function to get name
function intro(){
  console.log("Welcome to My Quiz App")
  var userName = readlineSync.question('Enter your name? ');
console.log('Hi ' + userName + '! Let\'s Start\n');
}

// game function to ask questions from array and check answers and update score
function game(){
  for (var i=0; i < questions.length; i++){
    var current_question = questions[i];

    // check answers and update score
    play(current_question.question, current_question.answer)
  }
}

// get input from user for the question and compare
function play(question, answer){
  var user_answer = readlineSync.question(question)

  if(user_answer.toLowerCase() === answer.toLowerCase()){
    console.log('Correct Answer!');
		score = score + 1;
  }else{
    console.log('Wrong Answer!');
  }

  //Display score
  console.log('Current score: ', score);
	console.log('-------------');
}

// Display Final Score and Previous results and rank
function showResults(){
  console.log('Final Score: ', score);
  console.log('Thanks for Playing!');

  calculateRank();
}

function calculateRank(){
  user_score = score
  rank=1

  // check all high scores and calculate how many scores are above user's score
  for (var j=0; j<highScores.length; j++){
    current_score=highScores[j].score;
    if(current_score > score){
      rank+=1
    }
  }

  console.log("Your Rank: ", rank)
}

intro()

game()

showResults()
