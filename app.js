var Angle1 = document.querySelector("#angle1")
var Angle2 = document.querySelector("#angle2")
var Angle3 = document.querySelector("#angle3")
var checkBtn = document.querySelector("#check-btn")
var resultDiv = document.querySelector("#result-div")

function clickHandler() {
    var angle1Value = Angle1.value, angle2Value = Angle2.value, angle3Value = Angle3.value

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