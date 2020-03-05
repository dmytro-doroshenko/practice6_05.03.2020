import React, {Fragment, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter/Counter";
import Buttons from "./components/buttons/Buttons";
import InputArea from "./components/input/InputArea";

function App() {

    const[counter, setCounter] = useState(0);
    const[inputValue, setInput] = useState('');

    const changeCounter = (number) => {
        if (counter + +number >= 0) {
            setCounter(counter + +number)
        }
    };

    const resetCounter = () => {
        setCounter(0);
        setInput('');
    };

    const changeInput = (e) => {
        setInput(e.target.value);
    };

  return (
    <div className="App">
      <Counter count={counter}/>

      <Buttons change={changeCounter} reset={resetCounter}/>

      <InputArea input={inputValue} change={changeInput} add={changeCounter}/>
    </div>
  );
}

export default App;
