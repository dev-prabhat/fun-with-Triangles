var sideInput = document.querySelectorAll(".side-input")
var resultBtn = document.querySelector("#result-btn")
var outputDiv = document.querySelector("#output-div")

function area_of_triangle(a, b) {
    return (1 / 2 * a * b)
}

function clickHandler() {
    var base = 0, height = 0, area = 0;
    base = Number(sideInput[0].value)
    height = Number(sideInput[1].value)
    area = area_of_triangle(base, height)
    area = area.toFixed(2)

    outputDiv.innerText = `Area of the triangle is ${area} cm`
}


resultBtn.addEventListener("click", clickHandler)