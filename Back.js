$(document).ready(function(){

    let resultClear = true
    let normalKeyPressed = false
    let OperativeKeyPressed = false
    let OperativeKeyPressedBefore = false
    let alreadyEqual = true

    // Lose Focus
    $("button").focus(function () {
        $(this).blur()
    })

    // Monitor Keys
    $(document).keydown(function(event){

        checkEmpty()

        const currentKey = (event.key)
        // DEBUG
        console.log(currentKey)

        switch (currentKey) {
            case "Backspace":
                BackFunction()
                break
            case "+":
                AddFunction()
                break
            case "Enter":
                EnterFunction()
                break
            case "=":
                EnterFunction()
                break
            case "-":
                MinusFunction()
                break
            case "*":
                MultiplyFunction()
                break
            case "/":
                DivideFunction()
                break
            case ".":
                DotFunction()
                break
            case "!":
                FactFunction()
                break
            case "p":
                if (normalKeyPressed) {
                    $("#previous_action").text("0")
                }
                $("#result").text(Math.PI)
                resultClear = true
                $("#clear").text("CE")
                break
            default:
                if (resultClear && !isNaN(currentKey)) {
                    $("#result").text(currentKey)
                    resultClear = false
                    normalKeyPressed = true
                    OperativeKeyPressed = false
                } else if (!isNaN(currentKey)) {
                    const originalText = $("#result").text();
                    $("#result").text(originalText + currentKey)
                    normalKeyPressed = true
                    OperativeKeyPressed = false
                }
        }
    })

    // $(document).keypress(function(event){
    //     console.log(event.keyCode)
    // })

    // Clear Function
    $("#clear").click(function () {
        if ($("#clear").text() === "CE") {
            $("#result").text("0")
        } else {
            $("#previous_action").text("0")
            $("#result").text("0")
        }

        $("#clear").text("C")

        resultClear = true
    })

    // Pi Function
    $("#PI").click(function () {
        if (normalKeyPressed) {
            $("#previous_action").text("0")
        }
        $("#result").text(Math.PI)
        resultClear = true
        OperativeKeyPressed = false
        normalKeyPressed = true
        $("#clear").text("CE")
    })

    // e Function
    $("#e_value").click(function () {
        $("#result").text(Math.E)
        resultClear = true
        OperativeKeyPressed = false
        normalKeyPressed = true
        $("#clear").text("CE")
    })

    // Equal Function: Enter
    $("#equal").click(function () {
        EnterFunction()
    })

    // Add Function
    $("#add").click(function () {
        AddFunction()
    })

    // Minus Function
    $("#subtract").click(function () {
        MinusFunction()
    })

    // Multiply Function
    $("#multiply").click(function () {
        MultiplyFunction()
    })

    // Divide Function
    $("#divide").click(function () {
        DivideFunction()
    })

    // Dot Function
    $("#dot").click(function () {
        DotFunction()
    })

    // Back Function
    $("#Back").click(function () {
        BackFunction()
    })

    // clear_CE
    $("#clear_CE").click(function () {
        $("#result").text("0")
        resultClear = true
    })

    // clear_C
    $("#clear_C").click(function () {
        $("#result").text("0")
        $("#previous_action").text("0")
        resultClear = true
    })

    // standard_calculator_op
    $("#standard_calculator_op").click(function () {
        $("#standard_calculator_op").addClass("selected")
        $("#scientific_calculator_op").removeClass("selected")
        $(".sci").css("display", "none")
        $(".standard").css("display", "block")
        $(".main_function").css("grid-template-columns", "25% 25% 25% 25%")
        $("#calculator_title").text("Standard")
    })

    // scientific_calculator_op
    $("#scientific_calculator_op").click(function () {
        $("#scientific_calculator_op").addClass("selected")
        $("#standard_calculator_op").removeClass("selected")
        $(".standard").css("display", "none")
        $(".sci").css("display", "block")
        $(".main_function").css("grid-template-columns", "20% 20% 20% 20% 20%")
        $("#calculator_title").text("Scientific")
    })

    // Percent
    $("#percent").click(function () {
        $("#result").text(PercentFunction($("#result").text()))
        resultClear = true
    })

    // Pow 2
    $("#x_pow").click(function () {
        $("#result").text(Pow2Function($("#result").text()))
        resultClear = true
    })

    // Root 2
    $("#root_2").click(function () {
        $("#result").text(Root2Function($("#result").text()))
        resultClear = true
    })

    // Positive Negative Reverse
    $("#addORsubtract").click(function () {
        $("#result").text(PositiveNegativeReverse($("#result").text()))
    })

    // 1_over_value
    $("#1_over_value").click(function () {
        $("#result").text(OneOverFunction($("#result").text()))
        resultClear = true
    })

    // Num1
    $("#num_1").click(function () {
        checkEmpty ()
        if (resultClear) {
            $("#result").text("1")
            resultClear = false
            normalKeyPressed = true
            OperativeKeyPressed = false
        } else {
            const originalText = $("#result").text();
            $("#result").text(originalText + "1")
            normalKeyPressed = true
            OperativeKeyPressed = false
        }
    })

    // Num2
    $("#num_2").click(function () {
        checkEmpty ()
        if (resultClear) {
            $("#result").text("2")
            resultClear = false
            normalKeyPressed = true
            OperativeKeyPressed = false
        } else {
            const originalText = $("#result").text();
            $("#result").text(originalText + "2")
            normalKeyPressed = true
            OperativeKeyPressed = false
        }
    })

    // Num3
    $("#num_3").click(function () {
        checkEmpty ()
        if (resultClear) {
            $("#result").text("3")
            resultClear = false
            normalKeyPressed = true
            OperativeKeyPressed = false
        } else {
            const originalText = $("#result").text();
            $("#result").text(originalText + "3")
            normalKeyPressed = true
            OperativeKeyPressed = false
        }
    })

    // Num4
    $("#num_4").click(function () {
        checkEmpty ()
        if (resultClear) {
            $("#result").text("4")
            resultClear = false
            normalKeyPressed = true
            OperativeKeyPressed = false
        } else {
            const originalText = $("#result").text();
            $("#result").text(originalText + "4")
            normalKeyPressed = true
            OperativeKeyPressed = false
        }
    })

    // Num5
    $("#num_5").click(function () {
        checkEmpty ()
        if (resultClear) {
            $("#result").text("5")
            resultClear = false
            normalKeyPressed = true
            OperativeKeyPressed = false
        } else {
            const originalText = $("#result").text();
            $("#result").text(originalText + "5")
            normalKeyPressed = true
            OperativeKeyPressed = false
        }
    })

    // Num6
    $("#num_6").click(function () {
        checkEmpty ()
        if (resultClear) {
            $("#result").text("6")
            resultClear = false
            normalKeyPressed = true
            OperativeKeyPressed = false
        } else {
            const originalText = $("#result").text();
            $("#result").text(originalText + "6")
            normalKeyPressed = true
            OperativeKeyPressed = false
        }
    })

    // Num7
    $("#num_7").click(function () {
        checkEmpty ()
        if (resultClear) {
            $("#result").text("7")
            resultClear = false
            normalKeyPressed = true
            OperativeKeyPressed = false
        } else {
            const originalText = $("#result").text();
            $("#result").text(originalText + "7")
            normalKeyPressed = true
            OperativeKeyPressed = false
        }
    })

    // Num8
    $("#num_8").click(function () {
        checkEmpty ()
        if (resultClear) {
            $("#result").text("8")
            resultClear = false
            normalKeyPressed = true
            OperativeKeyPressed = false
        } else {
            const originalText = $("#result").text();
            $("#result").text(originalText + "8")
            normalKeyPressed = true
            OperativeKeyPressed = false
        }
    })

    // Num9
    $("#num_9").click(function () {
        checkEmpty ()
        if (resultClear) {
            $("#result").text("9")
            resultClear = false
            normalKeyPressed = true
            OperativeKeyPressed = false
        } else {
            const originalText = $("#result").text();
            $("#result").text(originalText + "9")
            normalKeyPressed = true
            OperativeKeyPressed = false
        }
    })

    // Num0
    $("#num_0").click(function () {
        checkEmpty ()
        if (resultClear) {
            $("#result").text("0")
            resultClear = false
            normalKeyPressed = true
            OperativeKeyPressed = false
        } else {
            const originalText = $("#result").text();
            $("#result").text(originalText + "0")
            normalKeyPressed = true
            OperativeKeyPressed = false
        }
    })

    // Factorial Function
    $("#factorial").click(function () {
        FactFunction()
    })

    function checkEmpty () {
        if (!resultClear) {
            $("#clear").text("CE")
        } else {
            $("#clear").text("C")
        }
    }

    function EnterFunction() {
        if (normalKeyPressed && OperativeKeyPressedBefore && !OperativeKeyPressed) {
            let currentInput = $("#previous_action").text() + $("#result").text()
            $("#previous_action").text(currentInput + " = ")
            let result = eval(currentInput)
            $("#result").text(result)
            resultClear = true
            normalKeyPressed = true
            OperativeKeyPressed = false
            OperativeKeyPressedBefore = false
            alreadyEqual = true
        }
    }

    function AddFunction() {

        if (alreadyEqual) {
            let previousValue = $("#result").text() + " + "
            $("#previous_action").text(previousValue)
        } else {
            let previousValue = $("#previous_action").text() + $("#result").text() + " + "
            $("#previous_action").text(previousValue)
        }
        resultClear = true
        OperativeKeyPressed = true
        OperativeKeyPressedBefore = true
        alreadyEqual = false
    }

    function MinusFunction() {
        if (alreadyEqual) {
            let previousValue = $("#result").text() + " - "
            $("#previous_action").text(previousValue)
        } else {
            let previousValue = $("#previous_action").text() + $("#result").text() + " - "
            $("#previous_action").text(previousValue)
        }
        resultClear = true
        OperativeKeyPressed = true
        OperativeKeyPressedBefore = true
        alreadyEqual = false
    }

    function MultiplyFunction() {
        if (alreadyEqual) {
            let previousValue = $("#result").text() + " * "
            $("#previous_action").text(previousValue)
        } else {
            let previousValue = $("#previous_action").text() + $("#result").text() + " * "
            $("#previous_action").text(previousValue)
        }
        resultClear = true
        OperativeKeyPressed = true
        OperativeKeyPressedBefore = true
        alreadyEqual = false
    }

    function DivideFunction() {
        if (alreadyEqual) {
            let previousValue = $("#result").text() + " / "
            $("#previous_action").text(previousValue)
        } else {
            let previousValue = $("#previous_action").text() + $("#result").text() + " / "
            $("#previous_action").text(previousValue)
        }
        resultClear = true
        OperativeKeyPressed = true
        OperativeKeyPressedBefore = true
        alreadyEqual = false
    }

    function DotFunction() {
        const originalText = $("#result").text();
        $("#result").text(originalText + ".")
        normalKeyPressed = false
        OperativeKeyPressed = false
    }

    function FactFunction() {
        const originalText = $("#result").text();
        if (!isNaN(originalText)) {
            $("#result").text(factorial(originalText))
            resultClear = true
        }
    }

    function factorial(n) {
        let result = 1
        while (n > 0) {
            // console.log(n)
            result *= n
            n --
        }

        return result
    }

    function BackFunction() {
        const changedText = $("#result").text().slice(0, -1);
        if (changedText) {
            $("#result").text(changedText)
        } else {
            $("#result").text("0")
            resultClear = true
        }
    }

    function PercentFunction(n) {
        return n/100
    }

    function Pow2Function(n) {
        return Math.pow(n, 2)
    }

    function Root2Function(n) {
        return Math.pow(n, 1/2)
    }

    function PositiveNegativeReverse(n) {
        return n * -1
    }

    function OneOverFunction(n) {
        return 1/n
    }
})