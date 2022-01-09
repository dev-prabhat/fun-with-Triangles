const quizForm = document.querySelector(".quiz-form")
const submitBtn = document.querySelector("#submit-btn")
const outPut = document.querySelector("#output")

const correctAnswer = ["80", "Right Angled Triangle", "Isoselese Triangle", "3", "Scalene Triangle", "180", "50 and 50", "60", "40", "Congruent"]

const calculateScore = () => {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm)
    for (let value of formResults.values()) {
        if (value === correctAnswer[index++]) {
            score++
        }
    }
    //console.log(score)
    outPut.innerText = `Your Score is ${score}`
}

submitBtn.addEventListener("click", calculateScore)