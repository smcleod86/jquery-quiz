//Variables
const NEXTBTN = $('#next')
const PROMPT = $('#prompt')
const QUIZCONTAINER = $('#quiz')
const RESULTSCONTAINER = $('#results')
const START = $('#start')
const ANSWERCHOICEONE = $('#a1')
const ANSWERCHOICETWO = $('#a2')
const ANSWERCHOICETHREE = $('#a3')
const ANSWERCHOICEFOUR = $('#a4')
const RADIOTRUE = $('.guess')
let userAns = []
let score = 0
let questionNumber = 0
​
const questions = [{
    prompt: "How many feet should you remain from another individaul during our current covid-19 outbreak?",
    answers: ["10 inches", "2 feet", "6 feet", "25 feet"],
    correctAnswerIndex: 2
  },
  {
    prompt: "What weights more, 3 tons of gravel, or 3 tons of feathers?",
    answers: ["They weigh the same", "Feathers", "Gravel", "Dancing Banana"],
    correctAnswerIndex: 0
  },
  {
    prompt: "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
    answers: ["All of the trees", "Roughly 12 tons", "Canada", "Around 35 cubic feet of dirt in the course of digging a burrow"],
    correctAnswerIndex: 3
  },
  {
    prompt: "What charactersitic is relatively constant in mitochondrial genomes across species?",
    answers: ["Content, type of genes", "Organization", "Size", "Joe"],
    correctAnswerIndex: 0
  },
  {
    prompt: " If Peter Piper picked a peck of pickled peppers, how many pickled peppers would Peter Piper pick??",
    answers: ["3 quarts", "8 quarts", "A large handful", "10"],
    correctAnswerIndex: 1
  }];
​
  //Functions
  const startQuiz = () => {
    PROMPT.text(questions[0].prompt)
​
    ANSWERCHOICEONE.next().text(questions[0].answers[0])
    ANSWERCHOICETWO.next().text(questions[0].answers[1])
    ANSWERCHOICETHREE.next().text(questions[0].answers[2])
    ANSWERCHOICEFOUR.next().text(questions[0].answers[3])
​
    NEXTBTN.click(nextQuestion)
  }
​
  const nextQuestion = () => {
    if (questionNumber < questions.length - 1) {
      userAns.push(Number($('input[name=radio]:checked')[0].id[1]))
      if ($('input[name=radio]:checked').length) {
        questionNumber++
        PROMPT.text(questions[questionNumber].prompt)
        ANSWERCHOICEONE.next().text(questions[questionNumber].answers[0])
        ANSWERCHOICETWO.next().text(questions[questionNumber].answers[1])
        ANSWERCHOICETHREE.next().text(questions[questionNumber].answers[2])
        ANSWERCHOICEFOUR.next().text(questions[questionNumber].answers[3])
​
        radioClear()
      }
      else {
        RESULTSCONTAINER.text("Make a selection")
      }
    }
    else {
      submission()
    }
  }
​
  const radioClear = () => {
    for (let i = 0; i < RADIOTRUE.length; i++) {
      if(RADIOTRUE[i] == questions[i].correctAnswerIndex) {
        score++
        console.log('score', score)
      }
      RADIOTRUE[i].checked = false
    }
  }
​
 const submission = () => {
    for (let i = 0; i < userAns.length; i++) {
      if (userAns[i] == (questions[i].correctAnswerIndex + 1)) {
        score++
      }
    }
    console.log("Your score was " + score + " of " + questions.length)
    //  TODO: display the score in the DOM
  }
​
START.click(startQuiz)
​
