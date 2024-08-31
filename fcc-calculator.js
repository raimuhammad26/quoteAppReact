import React, { useState, useEffect } from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

function App() {

    //State
    const [expression, setExpression] = useState("");

    //Handlers
    function handleClear() {
        setExpression("0")
    }

    //Button Click Handler
    function handleClick(e) {
        console.log("Hadnle click called")
        const value = event.target.innerText;

        if (expression === "0")
            setExpression(value)
        else {
            setExpression((prevExpression) => {
                if (/[\+\−\×\÷]/.test(prevExpression.slice(-1)) && /[\+\−\×\÷]/.test(value)) {
                    // Replace the last operator with the new one
                    return prevExpression.slice(0, -1) + value;
                }
                // Append the value to the current expression
                return prevExpression + value;
            });
        }

    }

    //Equal Handler
    function handleEqualClick() {
        const result = eval(expression.replace(/×/g, "*").replace(/÷/g, "/"));
        setExpression(result.toString());
    }

    //UseEffect For Changing Display As We Type
    useEffect(() => {

    }, [expression])


    //JSX
    return (
        <>
            <div>Calculator by Huda Noor</div>

            <div id="zero" onClick={handleClick}>0</div>
            <div id="one" onClick={handleClick}>1</div>
            <div id="two" onClick={handleClick}>2</div>
            <div id="three" onClick={handleClick}>3</div>
            <div id="four" onClick={handleClick}>4</div>
            <div id="five" onClick={handleClick}>5</div>
            <div id="six" onClick={handleClick}>6</div>
            <div id="seven" onClick={handleClick}>7</div>
            <div id="eight" onClick={handleClick}>8</div>
            <div id="nine" onClick={handleClick}>9</div>

            <div id="add" onClick={handleClick}>+</div>
            <div id="subtract" onClick={handleClick}>−</div>
            <div id="multiply" onClick={handleClick}>×</div>
            <div id="divide" onClick={handleClick}>÷</div>

            <div id="decimal" onClick={handleClick}>.</div>

            <div id="equals" onClick={handleEqualClick}>=</div>

            {/*  <div id="display">{expression}</div> */}

            <input type="text" value={expression} id="display" onChange={e => setExpression(e.target.value)} />


            <div id="clear" onClick={handleClear}>Clear</div>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))