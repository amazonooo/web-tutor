let answers = [],
    questions = [
        'Как ваше имя?',
        'Как ваша фамилия?',
        'Сколько вам лет?'
    ];

// for (let i = 0; i < questions.length; i++) {
//     answers[i] = prompt(questions[i]);
// }

let i = 0;
do {
    answers[i] = prompt(questions[i])
    i++
} while (i < questions.length);

console.log(answers);