import React from "react";

function InputArea ({input, change, add}) {

    const changeInput = (e) => {
        change(e);
    };

    const addInputValue = (number, e) => {
        add(number);
        e.preventDefault();
    };

    return (
        <form className={'inlineBlock'} onSubmit={addInputValue.bind(null, input)}>
            <input type='number' placeholder='Enter value' value = {input} onChange={changeInput.bind(null)}/>
            <input type='submit' value='Add'/>
        </form>
    )
}

export default InputArea;