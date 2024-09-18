const questions = [
    {
        question: "Quantos anos tem o Julius?",
        answers: ["59", "90", "55", "60"],
        correctAnswer: 0
    },
    {
        question: "Em que ano foi lançado a primeira temporada da série?",
        answers: ["2000", "2003", "2005", "2006"],
        correctAnswer: 2
    },
    {
        question: "Quantas vezes os empregos de Julius foram citados?", 
        answers: [
            "987",
            "4200",
            "3390",
            "1594"
        ],
        correctAnswer: 3
    },
    {
        question: "Qual o terceiro emprego de Julius?",
        answers: ["Vendedor", "Sorveteiro", "Taxista", "Batman"],
        correctAnswer: 3
    },
    {
        question: "Em que ano se passa a primeira temporada?",
        answers: ["1970", "1980", "1975", "1978"],
        correctAnswer: 1
    }
];

// Carrega perguntas na página
function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

// Avalia as respostas fornecidas pelo usuário
function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}`;
}
// Recarrega a página
location.reload();
window.onload = loadQuestions;