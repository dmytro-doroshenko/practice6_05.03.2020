import React, {Fragment} from "react";

function Buttons ({change, reset}) {

    const changeCounter = (num) => {
        change(num);
    };

    const resetCounter = () => {
        reset();
    };

    return (
        <Fragment>
            <div className={'inlineBlock'}>
                <button onClick={changeCounter.bind(null, 1)}>+1</button>
                <button onClick={changeCounter.bind(null, -1)}>-1</button>
                <button onClick={changeCounter.bind(null, 100)}>+100</button>
                <button onClick={changeCounter.bind(null, -100)}>-100</button>
                <button onClick={resetCounter.bind(null)}>Reset</button>
            </div>
        </Fragment>
    )
}

export default Buttons;