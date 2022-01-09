const Angles = document.querySelectorAll(".angle")
const checkBtn = document.querySelector("#check-btn")
const resultDiv = document.querySelector("#result-div")


const sumOfAngles = (angle1, angle2, angle3) => angle1 + angle2 + angle3

const clickHandler = () => {
    var angle1Value = Angles[0].value, angle2Value = Angles[1].value, angle3Value = Angles[2].value

    if (angle1Value > 0 && angle2Value > 0 && angle3Value > 0) {
        var Sum = sumOfAngles(Number(angle1Value), Number(angle2Value), Number(angle3Value))
        if (Sum === 180)
            resultDiv.innerText = "These angle form a valid Triangle"
        else {
            resultDiv.innerText = "Not Formation of a valid Triangle"
        }
    }
    else {
        resultDiv.innerText = "Please Enter a valid angle"
    }
}



checkBtn.addEventListener("click", clickHandler)