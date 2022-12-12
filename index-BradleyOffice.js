$(document).ready(function(){

    let resultClear = true
    let clearLevel = 0

    // Monitor Keys
    $(document).keydown(function(event){
        // Debug
        // alert(event.keyCode + " " + event.which);
        const accpetedKeyCode = {
            "48" : 0,
            "49" : 1,
            "50" : 2,
            "51" : 3,
            "52" : 4,
            "53" : 5,
            "54" : 6,
            "55" : 7,
            "56" : 8,
            "57" : 9,
            "69" : "e",
            "8" : "BACK",
            "187" : "ADD",
            "13" : "ENTER",
            "189" : "MINUS",
            "100" : "ENTER",
            "222" : "*",
        }

        let currentKey = (event.keyCode)
        console.log(currentKey, event.which)

        if (accpetedKeyCode[currentKey] === "BACK") {
            const changedText = $("#result").text().slice(0, -1)

            if (changedText) {
                $("#result").text(changedText)
            } else {
                $("#result").text("0")
                resultClear = true
            }

        } else if (accpetedKeyCode[currentKey] === "ADD") {
            const previousValue = $("#result").text() + " + "
            $("#previous_action").text(previousValue)
            resultClear = true
        } else if (accpetedKeyCode[currentKey] === "ENTER") {
            const currentInput = $("#previous_action").text() + $("#result").text()
            $("#previous_action").text(currentInput + " = ")
            const result = eval(currentInput)
            $("#result").text(result)
            resultClear = true
        } else if (accpetedKeyCode[currentKey] === "MINUS") {
            const previousValue = $("#result").text() + " - "
            $("#previous_action").text(previousValue)
            resultClear = true
        } else if (accpetedKeyCode[currentKey] === "TIMES") {
            const previousValue = $("#result").text() + " * "
            $("#previous_action").text(previousValue)
            resultClear = true
        } else if (accpetedKeyCode[currentKey] !== undefined) {
            if (resultClear) {
                $("#result").text(accpetedKeyCode[currentKey])
                resultClear = false
            } else {
                const originalText = $("#result").text();
                $("#result").text(originalText + accpetedKeyCode[currentKey])
            }
        }

    })

    // $(document).keypress(function(event){
    //     console.log(event.keyCode)
    // })

    $("#clear").click(function () {
        $("#result").text("0")
        $("#previous_action").text("0")
        resultClear = true
    })

})