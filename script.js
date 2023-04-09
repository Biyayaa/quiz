let displayQuestion = document.getElementById("displayQuestion");
let displayOptions = document.getElementById("displayOptions");
let prevButton = document.getElementById("prevButton");
let nextButton = document.getElementById("nextButton");
let submitButton = document.getElementById("submitButton");

let modal = document.getElementById("modal");
let modalText = document.getElementById("modal-text");
let modalYes = document.getElementById("modal-yes");
let modalNo = document.getElementById("modal-no");

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
  displayQuestion.innerHTML = currentQuestionIndex +1 +"."+ quiz[currentQuestionIndex].question;
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

function showModal() {
  let answeredQuestions = responses.filter((response) => response !== undefined).length;
  let totalQuestions = quiz.length;
  modalText.innerHTML = `You have answered ${answeredQuestions} out of ${totalQuestions} questions. Are you sure you want to submit?`;
  modal.style.display = "block";
}

function hideModal() {
  modal.style.display = "none";
}

function submitQuiz() {
  showModal();
}

modalYes.onclick = function () {
  let score = 0;
  responses.forEach((response, index) => {
    if (response === quiz[index].answer) {
      score++;
    }
  });
  alert("You scored " + score + " out of " + quiz.length);
  hideModal();
};

modalNo.onclick = function () {
  hideModal();
};

displayQuiz();
