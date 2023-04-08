let displayQuestion = document.getElementById('displayQuestion');
        let displayOptions = document.getElementById('displayOptions');
        let prevButton = document.getElementById('prevButton');
        let nextButton = document.getElementById('nextButton');
        let submitButton = document.getElementById('submitButton');

        let quiz = [
            {
                question: "What is my first name?",
                options: ["Baba", "Biyaya", "Abiola", "Paul"],
                answer: "Abiola"
            },
            {
                question: "What is my favorite color?",
                options: ["Red", "Green", "Blue", "Yellow"],
                answer: "Blue"
            },
            {
                question: "What is the capital of France?",
                options: ["Paris", "Berlin", "Madrid", "Rome"],
                answer: "Paris"
            },
        ];

        let currentQuestionIndex = 0;

        function displayQuiz() {
            displayQuestion.innerHTML = quiz[currentQuestionIndex].question;

            for (let j = 0; j < quiz[currentQuestionIndex].options.length; j++) {
                let option = document.createElement("input");
                option.type = "radio";
                option.name = "question" + currentQuestionIndex;
                option.value = quiz[currentQuestionIndex].options[j];

                let label = document.createElement("label");
                label.innerHTML = quiz[currentQuestionIndex].options[j];

                let br = document.createElement("br");

                displayOptions.appendChild(option);
                displayOptions.appendChild(label);
                displayOptions.appendChild(br);
            }

            if (currentQuestionIndex === 0) {
                prevButton.style.display = "none";
            } else {
                prevButton.style.display = "inline-block";
            }

            if (currentQuestionIndex === quiz.length - 1) {
                nextButton.style.display = "none";
                submitButton.style.display = "inline-block";
            } else {
                nextButton.style.display = "inline-block";
                submitButton.style.display = "none";
            }
        }

        function prevQuestion() {
            displayOptions.innerHTML = "";
            currentQuestionIndex--;
            displayQuiz();
        }

        function nextQuestion() {
            displayOptions.innerHTML = "";
            currentQuestionIndex++;
            displayQuiz();
        }

        function submitQuiz() {
            let radios = document.querySelectorAll('input[type="radio"]:checked');
            let responses = [];
            let score = 0;

            for (let i = 0; i < radios.length; i++) {
                responses.push(radios[i].value);
            }

            for (let i = 0; i < quiz.length; i++) {
                if (responses[i] === quiz[i].answer) {
                    score++;
                }
            }

            alert("You scored " + score + " out of " + quiz.length);
        }

        displayQuiz();