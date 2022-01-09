const sideInput = document.querySelectorAll(".side-input")
const resultBtn = document.querySelector("#result-btn")
const outputDiv = document.querySelector("#output-div")

const area_of_triangle = (a, b) => 1 / 2 * a * b

const clickHandler = () => {
    var base = 0, height = 0, area = 0;
    base = Number(sideInput[0].value)
    height = Number(sideInput[1].value)
    area = area_of_triangle(base, height)
    area = area.toFixed(2)

    outputDiv.innerText = `Area of the triangle is ${area} cm`
}


resultBtn.addEventListener("click", clickHandler)