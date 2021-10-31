var sideInput = document.querySelectorAll(".side-input")
var resultBtn = document.querySelector("#result-btn")
var outputDiv = document.querySelector("#output-div")


function sumOfSquare(a, b) {
    return a * a + b * b
}

function clickHandler() {
    var squareSum = 0, hypotenuse = 0;
    squareSum = sumOfSquare(Number(sideInput[0].value), Number(sideInput[1].value))
    hypotenuse = Math.sqrt(squareSum)
    hypotenuse = Number(hypotenuse.toFixed(2))

    outputDiv.innerText = `Hypotenuse calculated is ${hypotenuse} cm`
}


resultBtn.addEventListener("click", clickHandler)