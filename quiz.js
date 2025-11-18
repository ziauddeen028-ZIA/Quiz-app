  let questions = [{
                question: "1.What is JS?",
                options: ["Jumping Script", "Java Script", "Java String", "Just Script"],
                answer: 1
            },


            {
                question: "2.What does HTML stand for?",
                options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks and Text Mark Language", "Home Tool Markup Language"],
                answer: 0
            },
            {
                question: "3.Which symbol is used for comments in JavaScript?",
                options: [ "/* */", "#", "<!-- -->","//"],
                answer: 3
            },
            {
                question: "4.Which of the following is NOT a programming language?",
                options: ["Python", "Java", "HTML", "C++"],
                answer: 2
            },
            {
                question: "5.Which keyword is used to declare a constant in JavaScript?",
                options: [ "const","var", "let", "static"],
                answer: 0
            },
            {
                question: "6.What does CSS stand for?",
                options: ["Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets","Cascading Style Sheets"],
                answer: 3
            },

            ];




            let currentQuestion = 0;
            let score = 0;

            let question = document.getElementById("question");
            let answers = document.querySelectorAll(".option");
            let restart = document.getElementById("reset-btn");



            function showQuestion() {
                //restart.style.display = "none";

                let q = questions[currentQuestion];
                question.innerText = q.question;

                for (let i = 0; i < answers.length; i++) {

                    answers[i].textContent = q.options[i];
                    answers[i].classList.remove("correct", "incorrect");
                    answers[i].disabled = false;

                }

            }



            //        let option = document.querySelector(".ans-btn");


            let answered = false;
            function checkAnswer(index) {

                answers.forEach(btn => btn.disabled = true);
                let answerIndex = questions[currentQuestion].answer;

                if (index == answerIndex) {
                    score++;
                    answers[index].classList.add("correct");

                } else {

                    answers[index].classList.add("incorrect");
                    answers[answerIndex].classList.add("correct");
                }

                answered = true;


            }


            let nextbtn = document.getElementById("nxt-btn")
            nextbtn.addEventListener("click", nextQuestion);


            function nextQuestion() {
                if (!answered) {
                    alert("Choose any one the options!");
                    return;
                }

                currentQuestion++;
                answered = false;

                if (currentQuestion < questions.length) {

                    showQuestion();
                }
                else {
                    finalScore();
                }

            }


            let ans = document.getElementById("answer");

            function finalScore() {
                ans.style.display = "none";
                question.innerText = `You Scored ${score} out of ${questions.length} `;
                nextbtn.style.display = "none";
                restart.style.display = "block";

            }

            restart.addEventListener("click", restartGame);

            function restartGame() {

                currentQuestion = 0;
                score = 0;
                ans.style.display = "block";
                nextbtn.style.display = "block";
                restart.style.display = "none";
                showQuestion();

            }


            showQuestion();

