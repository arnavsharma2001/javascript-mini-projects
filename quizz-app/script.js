const quizData = [
    {
        question: 'How old is Arnav?',
        a: '17',
        b: '20',
        c: '21',
        d: '15',
        correct: 'b'
    },
    {question: 'What is most used programming language in 2020?',
    a: 'java',
    b: 'c',
    c: 'python',
    d: 'javascript',
    correct: 'a'

    },{
    question: 'What is meant by hyper text markup language?',
    a: 'html',
    b: 'https',
    c: 'http',
    d: 'sql',
    correct: 'a'
    },
    {
        question: 'What is not a programing language?',
        a: 'java',
        b: 'html',
        c: 'c',
        d: 'c++',
        correct: 'b'
        },
        {
            question: 'Which year was java script launched?',
            a: '2019',
            b: '2018',
            c: '2020',
            d: '1995',
            correct: 'd'
            }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});