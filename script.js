let displayQuestion = document.getElementById("displayQuestion");
let displayOptions = document.getElementById("displayOptions");
let prevButton = document.getElementById("prevButton");
let nextButton = document.getElementById("nextButton");
let submitButton = document.getElementById("submitButton");

let quiz = [
  {
    question: "What is my first name?",
    options: ["Baba", "Biyaya", "Abiola", "Paul"],
    answer: "Abiola",
    selected: null,
  },
  {
    question: "What is my favorite color?",
    options: ["Red", "Green", "Black", "Yellow"],
    answer: "Black",
    selected: null,
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
    answer: "Paris",
    selected: null,
  },
  {
    question: "What is the capital of Nigeria?",
    options: ["Africa", "Lagos", "Togo", "Abuja"],
    answer: "Abuja",
    selected: null,
  },
  {
    question: "Who is the President of Nigeria?",
    options: ["Bulaba", "Muhammadu Buhari", "Ellu-p", "Atiku Abubakar"],
    answer: "Muhammadu Buhari",
    selected: null,
  },
];

let currentQuestionIndex = 0;

let responses = [];
console.log(responses);

function displayQuiz() {
  displayQuestion.innerHTML = quiz[currentQuestionIndex].question;
  displayOptions.innerHTML = "";

  quiz[currentQuestionIndex].options.forEach((option) => {
    let radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.name = "question" + currentQuestionIndex;
    radioButton.value = option;
    radioButton.onclick = function () {
      quiz[currentQuestionIndex].selected = this.value;
      responses[currentQuestionIndex] = this.value;
    };

    let label = document.createElement("label");
    label.innerHTML = option;

    let br = document.createElement("br");

    displayOptions.appendChild(radioButton);
    displayOptions.appendChild(label);
    displayOptions.appendChild(br);
  });

  prevButton.style.display =
    currentQuestionIndex === 0 ? "none" : "inline-block";
  nextButton.style.display =
    currentQuestionIndex === quiz.length - 1 ? "none" : "inline-block";
  submitButton.style.display =
    currentQuestionIndex === quiz.length - 1 ? "inline-block" : "none";
}

function saveChoice() {
  let selectedValue = quiz[currentQuestionIndex].selected;
  if (selectedValue !== null) {
    let radioButtons = document.getElementsByName(
      "question" + currentQuestionIndex
    );
    for (let i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].value === selectedValue) {
        radioButtons[i].checked = true;
      }
    }
  }
}

function prevQuestion() {
  displayOptions.innerHTML = "";
  currentQuestionIndex--;
  displayQuiz();
  saveChoice();
}

function nextQuestion() {
  displayOptions.innerHTML = "";
  currentQuestionIndex++;
  displayQuiz();
  saveChoice();
}

function submitQuiz() {
  let score = 0;
  for (let i = 0; i < responses.length; i++) {
    if (responses[i] === quiz[i].answer) {
      score++;
    }
  }
  alert("You scored " + score + " out of " + quiz.length);
}

displayQuiz();

// let displayQuestion = document.getElementById("displayQuestion");
// let displayOptions = document.getElementById("displayOptions");
// let prevButton = document.getElementById("prevButton");
// let nextButton = document.getElementById("nextButton");
// let submitButton = document.getElementById("submitButton");

// let quiz = [
//   {
//     question: "What is my first name?",
//     options: ["Baba", "Biyaya", "Abiola", "Paul"],
//     answer: "Abiola",
//     selected: null,
//   },
//   {
//     question: "What is my favorite color?",
//     options: ["Red", "Green", "Black", "Yellow"],
//     answer: "Black",
//     selected: null,
//   },
//   {
//     question: "What is the capital of France?",
//     options: ["Paris", "Berlin", "Madrid", "Rome"],
//     answer: "Paris",
//     selected: null,
//   },
//   {
//     question: "What is the capital of Nigeria?",
//     options: ["Africa", "Lagos", "Togo", "Abuja"],
//     answer: "Abuja",
//     selected: null,
//   },
//   {
//     question: "Who is the President of Nigeria?",
//     options: ["Bulaba", "Muhammadu Buhari", "Ellu-p", "Atiku Abubakar"],
//     answer: "Muhammadu Buhari",
//     selected: null,
//   },
// ];

// let currentQuestionIndex = 0;

// function displayQuiz() {
//   displayQuestion.innerHTML = quiz[currentQuestionIndex].question;

//   for (let j = 0; j < quiz[currentQuestionIndex].options.length; j++) {
//     let option = document.createElement("input");
//     option.type = "radio";
//     option.name = "question" + currentQuestionIndex;
//     option.value = quiz[currentQuestionIndex].options[j];
//     option.onclick = function () {
//       quiz[currentQuestionIndex].selected = this.value;
//     };

//     let label = document.createElement("label");
//     label.innerHTML = quiz[currentQuestionIndex].options[j];

//     let br = document.createElement("br");

//     displayOptions.appendChild(option);
//     displayOptions.appendChild(label);
//     displayOptions.appendChild(br);
//   }

//   if (currentQuestionIndex === 0) {
//     prevButton.style.display = "none";
//   } else {
//     prevButton.style.display = "block";
//   }

//   if (currentQuestionIndex === quiz.length - 1) {
//     nextButton.style.display = "none";
//     submitButton.style.display = "block";
//   } else {
//     nextButton.style.display = "block";
//     submitButton.style.display = "none";
//   }
// }

// function prevQuestion() {
//   displayOptions.innerHTML = "";
//   currentQuestionIndex--;
//   displayQuiz();

//   let selectedValue = quiz[currentQuestionIndex].selected;
//   if (selectedValue !== null) {
//     let radioButtons = document.getElementsByName(
//       "question" + currentQuestionIndex
//     );
//     for (let i = 0; i < radioButtons.length; i++) {
//       if (radioButtons[i].value === selectedValue) {
//         radioButtons[i].checked = true;
//       }
//     }
//   }
// }

// function nextQuestion() {
//   displayOptions.innerHTML = "";
//   currentQuestionIndex++;
//   displayQuiz();

//   let selectedValue = quiz[currentQuestionIndex].selected;
//   if (selectedValue !== null) {
//     let radioButtons = document.getElementsByName(
//       "question" + currentQuestionIndex
//     );
//     for (let i = 0; i < radioButtons.length; i++) {
//       if (radioButtons[i].value === selectedValue) {
//         radioButtons[i].checked = true;
//       }
//     }
//   }
// }

// function submitQuiz() {
//   let radios = document.querySelectorAll('input[type="radio"]:checked');
//   let score = 0;
//   let responses = [];
//   console.log(responses);

//   for (let i = 0; i < radios.length; i++) {
//     responses.push(radios[i].value);
//   }

//   for (let i = 0; i < responses.length; i++) {
//     if (responses[i] === quiz[i].answer) {
//       score++;
//     }
//   }

//   alert("You scored " + score + " out of " + quiz.length);
// }

// displayQuiz();
