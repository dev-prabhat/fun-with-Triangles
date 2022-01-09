const sideInput = document.querySelectorAll(".side-input")
const resultBtn = document.querySelector("#result-btn")
const outputDiv = document.querySelector("#output-div")


const sumOfSquare = (a, b) => a * a + b * b

const clickHandler = () => {
    var squareSum = 0, hypotenuse = 0;
    squareSum = sumOfSquare(Number(sideInput[0].value), Number(sideInput[1].value))
    hypotenuse = Math.sqrt(squareSum)
    hypotenuse = Number(hypotenuse.toFixed(2))

    outputDiv.innerText = `Hypotenuse calculated is ${hypotenuse} cm`
}


resultBtn.addEventListener("click", clickHandler)