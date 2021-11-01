var Angles = document.querySelectorAll(".angle")
var checkBtn = document.querySelector("#check-btn")
var resultDiv = document.querySelector("#result-div")

function clickHandler() {
    var angle1Value = Angles[0].value, angle2Value = Angles[1].value, angle3Value = Angles[2].value

    if (angle1Value >= 0 && angle2Value >= 0 && angle3Value >= 0) {
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

function sumOfAngles(angle1, angle2, angle3) {
    var sum = angle1 + angle2 + angle3
    return sum;
}

checkBtn.addEventListener("click", clickHandler)