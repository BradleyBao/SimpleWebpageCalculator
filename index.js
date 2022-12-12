$(document).ready(function(){

    // Init
    const history_saved = Initialization()

    let resultClear = true
    let normalKeyPressed = false
    let OperativeKeyPressed = false
    let OperativeKeyPressedBefore = false
    let alreadyEqual = true

    let switchHistory = false

    let secondLevel = false

    let missingRightBracket = 0
    let rightBracketEnd = false

    let specialKey = false

    // History
    let history = history_saved

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
            case "(":
                bracketLeft()
                break
            case ")":
                bracketRight()
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
                UndisableInfinityFunction()
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
        UndisableInfinityFunction()
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
        if (normalKeyPressed && !OperativeKeyPressedBefore) {
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
        if (normalKeyPressed && !OperativeKeyPressedBefore) {
            $("#previous_action").text("0")
        }
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

    // mod
    $("#mod").click(function () {
        modFunction()
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
        UndisableInfinityFunction()
        $("#result").text("0")
        resultClear = true
    })

    // clear_C
    $("#clear_C").click(function () {
        UndisableInfinityFunction()
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
        $(".main_function").css("grid-template-rows", "16.66% 16.66% 16.66% 16.66% 16.66% 16.66%")

        $("#calculator_title").text("Standard")

    //    Local Storage
        window.localStorage.setItem("mode", "standard")
    })

    // scientific_calculator_op
    $("#scientific_calculator_op").click(function () {
        $("#scientific_calculator_op").addClass("selected")
        $("#standard_calculator_op").removeClass("selected")
        $(".standard").css("display", "none")
        $(".sci").css("display", "block")
        $(".main_function").css("grid-template-columns", "20% 20% 20% 20% 20%")
        $(".main_function").css("grid-template-rows", "14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%")

        $("#calculator_title").text("Scientific")

        // Local Storage
        window.localStorage.setItem("mode", "scientific")
    })

    // Percent
    $("#percent").click(function () {
        // $("#previous_action").text(`PercentFunction(${$("#result").text()})`)
        $("#previous_action").text($("#previous_action").text() + `PercentFunction(${$("#result").text()})`)

        $("#result").text(PercentFunction($("#result").text()))
        resultClear = true
        OperativeKeyPressed = false
        OperativeKeyPressedBefore = true
        alreadyEqual = false
        normalKeyPressed = true
        specialKey = true
    })

    // Pow 2
    $("#x_pow").click(function () {
        // $("#previous_action").text(`Pow2Function(${$("#result").text()})`
        $("#previous_action").text($("#previous_action").text() + `Pow2Function(${$("#result").text()})`)

        $("#result").text(Pow2Function($("#result").text()))
        resultClear = true
        OperativeKeyPressed = false
        OperativeKeyPressedBefore = true
        alreadyEqual = false
        normalKeyPressed = true
        specialKey = true
    })

    // ln function
    $("#ln").click(function () {
        // $("#previous_action").text(`lnFunction(${$("#result").text()})`)
        $("#previous_action").text($("#previous_action").text() + `lnFunction(${$("#result").text()})`)

        $("#result").text(lnFunction($("#result").text()))
        resultClear = true
        OperativeKeyPressed = false
        OperativeKeyPressedBefore = true
        alreadyEqual = false
        normalKeyPressed = true
        specialKey = true
    })

    // log function
    $("#log").click(function () {
        // $("#previous_action").text(`logFunction(${$("#result").text()})`)
        $("#previous_action").text($("#previous_action").text() + `logFunction(${$("#result").text()})`)

        $("#result").text(logFunction($("#result").text()))
        resultClear = true
        OperativeKeyPressed = false
        OperativeKeyPressedBefore = true
        alreadyEqual = false
        normalKeyPressed = true
        specialKey = true
    })

    // Absolute Value
    $("#absolute_value").click(function () {
        // $("#previous_action").text(`absoluteValue(${$("#result").text()})`)
        $("#previous_action").text($("#previous_action").text() + `absoluteValue(${$("#result").text()})`)
        $("#result").text(absoluteValue($("#result").text()))
        resultClear = true
        OperativeKeyPressed = false
        OperativeKeyPressedBefore = true
        alreadyEqual = false
        normalKeyPressed = true
        specialKey = true
    })

    // Root 2
    $("#root_2").click(function () {

        if ($("#previous_action").text($("#previous_action").text() === "0")) {
            $("#previous_action").text($("#previous_action").text() + `Root2Function(${$("#result").text()})`)
        } else {
            $("#previous_action").text(`Root2Function(${$("#result").text()})`)
        }

        // $("#previous_action").text(`Root2Function(${$("#result").text()})`)
        $("#result").text(Root2Function($("#result").text()))
        resultClear = true
        OperativeKeyPressed = false
        OperativeKeyPressedBefore = true
        alreadyEqual = false
        normalKeyPressed = true
        specialKey = true
    })

    // Positive Negative Reverse
    $("#addORsubtract").click(function () {
        $("#result").text(PositiveNegativeReverse($("#result").text()))
    })

    // 1_over_value
    $("#1_over_value").click(function () {

        if ($("#previous_action").text($("#previous_action").text() === "0")) {
            $("#previous_action").text(`OneOverFunction(${$("#result").text()})`)
        } else {
            $("#previous_action").text($("#previous_action").text() + `OneOverFunction(${$("#result").text()})`)
        }


        $("#result").text(OneOverFunction($("#result").text()))
        resultClear = true
        OperativeKeyPressed = false
        OperativeKeyPressedBefore = true
        alreadyEqual = false
        normalKeyPressed = true
        specialKey = true
    })

    // Custom Pow
    $("#x_pow_y").click(function () {
        CustomPow()
    })

    $("#10_power_x").click(function () {
        $("#previous_action").text($("#previous_action").text() + `Over10Function(${$("#result").text()})`)
        // $("#previous_action").text(`Over10Function(${$("#result").text()})`)
        $("#result").text(Over10Function($("#result").text()))
        resultClear = true
        OperativeKeyPressed = false
        OperativeKeyPressedBefore = true
        alreadyEqual = false
        normalKeyPressed = true
        specialKey = true
    })

    // Num1
    $("#num_1").click(function () {
        checkEmpty ()
        UndisableInfinityFunction()
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
        UndisableInfinityFunction()
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
        UndisableInfinityFunction()
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
        UndisableInfinityFunction()
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
        UndisableInfinityFunction()
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
        UndisableInfinityFunction()
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
        UndisableInfinityFunction()
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
        UndisableInfinityFunction()
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
        UndisableInfinityFunction()
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
        UndisableInfinityFunction()
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

    // Bin
    $("#bin").click(function () {
        $("#history_list_main").empty()
        window.localStorage.removeItem('history');
        history = []
    })

    // History Click
    $(".history_list").click(function () {
        let value = $(this).text().split("=")
        // console.log(value)
        $("#previous_action").text(value[0] + " = ")
        $("#result").text(value[1])
        resultClear = true
    })

    $("#history").click(function () {
        console.log("Triggered")
        $("#calculator").css("filter", "blur(5px)")
        $("#history_content").css("visibility", "visible")
        $("#history_content").css("height", "30%")

        switchHistory = true
    })

    $("#result_area").click(function () {
        if (switchHistory) {
            switchHistory = false
            $("#history_content").css("visibility", "hidden")
            $("#history_content").css("height", "0")
            $("#calculator").css("filter", "blur(0)")
        }
    })

    $("#mode").click(function () {
        if (switchHistory) {
            switchHistory = false
            $("#history_content").css("visibility", "hidden")
            $("#history_content").css("height", "0")
            $("#calculator").css("filter", "blur(0)")
        }

    })

    function checkEmpty () {
        if (!resultClear) {
            $("#clear").text("CE")
        } else {
            $("#clear").text("C")
        }
    }

    function EnterFunction() {
        console.log(normalKeyPressed, OperativeKeyPressedBefore, !OperativeKeyPressed)
        if (normalKeyPressed && OperativeKeyPressedBefore && !OperativeKeyPressed) {
            let currentInput = $("#previous_action").text() + $("#result").text()

            if (rightBracketEnd || specialKey) {
                currentInput = $("#previous_action").text()
            }

            if (missingRightBracket) {
                for (let i = 0; i < missingRightBracket; i++) {
                    currentInput += " ) "
                }
                missingRightBracket = 0
            }

            $("#previous_action").text(currentInput + " = ")
            let result = eval(currentInput)
            console.log(result)

            if (result === Infinity) {
                DisableInfinityFunction()
            } else {
                console.log(history, typeof(history))
                history.unshift([currentInput + " = ", result])
                window.localStorage.setItem("history", JSON.stringify(history))

                AssignHistory()
            }

            $("#result").text(result)
            resultClear = true
            normalKeyPressed = true
            OperativeKeyPressed = false
            OperativeKeyPressedBefore = false
            alreadyEqual = true
            rightBracketEnd = false
            specialKey = false
        }
    }

    // Assign histories
    function AssignHistory() {
        $("#history_list_main").empty()

        for (let i = 0; i < history.length; i++) {
            $("#history_list_main").append(
                "<div id= " + i + " class='history_list'><div class='previous_list_result'> " + history[i][0] + "</div><div class='current_list_result'> " + history[i][1] +  "</div></div>"
            )
        }

        // $("#history_list_main").append()
    }

    function AddFunction() {

        if (alreadyEqual) {
            let previousValue = $("#result").text() + " + "
            $("#previous_action").text(previousValue)
        } else {
            if (rightBracketEnd || specialKey) {
                let previousValue = $("#previous_action").text() + " + "
                $("#previous_action").text(previousValue)

            } else {
                let previousValue = $("#previous_action").text() + $("#result").text() + " + "
                $("#previous_action").text(previousValue)
            }

        }
        resultClear = true
        OperativeKeyPressed = true
        OperativeKeyPressedBefore = true
        alreadyEqual = false
        rightBracketEnd = false
        specialKey = false
    }

    function MinusFunction() {
        if (alreadyEqual) {
            let previousValue = $("#result").text() + " - "
            $("#previous_action").text(previousValue)
        } else {
            if (rightBracketEnd || specialKey) {
                let previousValue = $("#previous_action").text() + " - "
                $("#previous_action").text(previousValue)
                rightBracketEnd = false
            } else {
                let previousValue = $("#previous_action").text() + $("#result").text() + " - "
                $("#previous_action").text(previousValue)
            }
        }
        resultClear = true
        OperativeKeyPressed = true
        OperativeKeyPressedBefore = true
        alreadyEqual = false
        rightBracketEnd = false
        specialKey = false
    }

    function MultiplyFunction() {
        if (alreadyEqual) {
            let previousValue = $("#result").text() + " * "
            $("#previous_action").text(previousValue)
        } else {
            if (rightBracketEnd || specialKey) {
                let previousValue = $("#previous_action").text() + " * "
                $("#previous_action").text(previousValue)
                rightBracketEnd = false
            } else {
                let previousValue = $("#previous_action").text() + $("#result").text() + " * "
                $("#previous_action").text(previousValue)
            }
        }
        resultClear = true
        OperativeKeyPressed = true
        OperativeKeyPressedBefore = true
        alreadyEqual = false
        rightBracketEnd = false
        specialKey = false
    }

    function DivideFunction() {
        if (alreadyEqual) {
            let previousValue = $("#result").text() + " / "
            $("#previous_action").text(previousValue)
        } else {
            if (rightBracketEnd || specialKey) {
                let previousValue = $("#previous_action").text() + " / "
                $("#previous_action").text(previousValue)
                rightBracketEnd = false
            } else {
                let previousValue = $("#previous_action").text() + $("#result").text() + " / "
                $("#previous_action").text(previousValue)
            }
        }
        resultClear = true
        OperativeKeyPressed = true
        OperativeKeyPressedBefore = true
        alreadyEqual = false
        rightBracketEnd = false
        specialKey = false
    }

    function modFunction() {
        if (alreadyEqual) {
            let previousValue = $("#result").text() + " % "
            $("#previous_action").text(previousValue)
        } else {
            if (rightBracketEnd || specialKey) {
                let previousValue = $("#previous_action").text() + " % "
                $("#previous_action").text(previousValue)
                rightBracketEnd = false
            } else {
                let previousValue = $("#previous_action").text() + $("#result").text() + " % "
                $("#previous_action").text(previousValue)
            }
        }
        resultClear = true
        OperativeKeyPressed = true
        OperativeKeyPressedBefore = true
        alreadyEqual = false
        rightBracketEnd = false
        specialKey = false
    }

    function bracketLeft() {
        alreadyEqual = false
        normalKeyPressed = false
        if ($("#result").text() == 0) {
            let previousValue = "("
            missingRightBracket++
            $("#previous_action").text(previousValue)
        } else if ($("#result").text() != 0 && OperativeKeyPressedBefore === false) {
            let previousValue = $("#result").text() + " * ( "
            OperativeKeyPressedBefore = true
            $("#previous_action").text(previousValue)

            resultClear = true
            missingRightBracket++
        } else if ($("#result").text() != 0 && OperativeKeyPressedBefore) {
            let previousValue = $("#previous_action").text() + " ( "
            $("#previous_action").text(previousValue)
            // $("#result").text("0")
            resultClear = true
            missingRightBracket++
        } else {
            let previousValue = $("#previous_action").text() + " * ( "
            OperativeKeyPressedBefore = true
            $("#previous_action").text(previousValue)
        }
    }

    function bracketRight() {
        if (missingRightBracket) {
            alreadyEqual = false
            rightBracketEnd = true

            if (specialKey) {
                let previousValue = $("#previous_action").text() + " ) "
                $("#previous_action").text(previousValue)
            } else {
                let previousValue = $("#previous_action").text() + $("#result").text() + " ) "
                $("#previous_action").text(previousValue)
            }

            missingRightBracket--

        }
    }

    function CustomPow() {
        if (alreadyEqual) {
            let previousValue = $("#result").text() + " ** "
            $("#previous_action").text(previousValue)
        } else {
            let previousValue = $("#previous_action").text() + $("#result").text() + " ** "
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
            $("#previous_action").text($("#previous_action").text() + `factorial(${$("#result").text()})`)

            // $("#previous_action").text(`factorial(${originalText})`)
            $("#result").text(factorial(originalText))
            resultClear = true
            OperativeKeyPressed = false
            OperativeKeyPressedBefore = true
            alreadyEqual = false
            normalKeyPressed = true
            specialKey = true
        }
    }

    function factorial(n) {
        n = parseInt(n)
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

    function lnFunction(n) {
        return Math.log(n);
    }

    function logFunction(n) {
        return lnFunction(n) / Math.log(10);
    }

    function absoluteValue(n) {
        return Math.abs(n);
    }

    function PositiveNegativeReverse(n) {
        return n * -1
    }

    function Over10Function(n) {
        return Math.pow(10, n)
    }

    function OneOverFunction(n) {
        if (1/n == "Infinity") {
            DisableInfinityFunction()
        }
        return 1/n
    }

    function DisableInfinityFunction() {
        $("#percent").prop("disabled",true)
        $("#1_over_value").prop("disabled",true)
        $("#x_pow").prop("disabled",true)
        $("#root_2").prop("disabled",true)
        $("#divide").prop("disabled",true)
        $("#multiply").prop("disabled",true)
        $("#add").prop("disabled",true)
        $("#subtract").prop("disabled",true)
        $("#dot").prop("disabled",true)
        $("#equal").prop("disabled",true)
        $("#addORsubtract").prop("disabled",true)
    }

    function UndisableInfinityFunction() {
        $("#percent").prop("disabled",false)
        $("#1_over_value").prop("disabled",false)
        $("#x_pow").prop("disabled",false)
        $("#root_2").prop("disabled",false)
        $("#divide").prop("disabled",false)
        $("#multiply").prop("disabled",false)
        $("#add").prop("disabled",false)
        $("#subtract").prop("disabled",false)
        $("#dot").prop("disabled",false)
        $("#equal").prop("disabled",false)
        $("#addORsubtract").prop("disabled",false)
    }

    function Initialization() {
    //    Basic UI
        const mode = window.localStorage.getItem("mode")
        if (mode === "standard") {
            $("#standard_calculator_op").addClass("selected")
            $("#scientific_calculator_op").removeClass("selected")
            $(".sci").css("display", "none")
            $(".standard").css("display", "block")
            $(".main_function").css("grid-template-columns", "25% 25% 25% 25%")
            $(".main_function").css("grid-template-rows", "16.66% 16.66% 16.66% 16.66% 16.66% 16.66%")
            $("#calculator_title").text("Standard")
        } else if (mode === "scientific") {
            $("#scientific_calculator_op").addClass("selected")
            $("#standard_calculator_op").removeClass("selected")
            $(".standard").css("display", "none")
            $(".sci").css("display", "block")
            $(".main_function").css("grid-template-columns", "20% 20% 20% 20% 20%")
            $(".main_function").css("grid-template-rows", "14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%")

            $("#calculator_title").text("Scientific")
        }

    //    History Save
        try {
            let history = JSON.parse(window.localStorage.getItem("history"))
            // Debug
            console.log(history)

            if (history) {
                $("#history_list_main").empty()

                for (let i = 0; i < history.length; i++) {
                    $("#history_list_main").append(
                        "<div id= " + i + " class='history_list'><div class='previous_list_result'> " + history[i][0] + "</div><div class='current_list_result'> " + history[i][1] +  "</div></div>"
                    )
                }
                return history
            } else {
                history = []
                return history
            }
        } catch (e) {
            let history = []
            console.log("Warning! Your website does not support history! ")
            console.log(e)
            return history
        }
    }
})