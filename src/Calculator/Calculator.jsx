import React, { useState } from 'react';
import './Calculator.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft , faXmark } from '@fortawesome/free-solid-svg-icons';

function Calculator() {
  const [inputValue, setInputValue] = useState('');

  const appendValue = (value) => {
    setInputValue((prevValue) => prevValue + value);
  };

  const performOperation = (operator) => {
    setInputValue((prevValue) => prevValue + operator);
  };

  const calculate = () => {
    let result = Function('"use strict"; return (' + inputValue + ')')();
    setInputValue(result.toString());
  };

  const clearInput = () => {
    setInputValue('');
  };

  const handleUndo = () => {
    setInputValue((prevValue) => prevValue.slice(0, -1));
  };

  return (
    <div className="calculator">
      <input type="text" id="input-field" value={inputValue} readOnly />
      <div className="buttons">
        <div className="row the-first">
          <button onClick={clearInput}>C</button>
          <button onClick={handleUndo}>
          <FontAwesomeIcon icon={faDeleteLeft} />
          </button>
          <button onClick={() => performOperation('/')}>/</button>
          <button onClick={() => performOperation('*')}>
          <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="row">
          <button onClick={() => appendValue('7')}>7</button>
          <button onClick={() => appendValue('8')}>8</button>
          <button onClick={() => appendValue('9')}>9</button>
          <button onClick={() => performOperation('-')} className="end">-</button>
        </div>
        <div className="row">
          <button onClick={() => appendValue('4')}>4</button>
          <button onClick={() => appendValue('5')}>5</button>
          <button onClick={() => appendValue('6')}>6</button>
          <button onClick={() => performOperation('+')} className="end">+</button>
        </div>
        <div className="row">
          <button onClick={() => appendValue('1')}>1</button>
          <button onClick={() => appendValue('2')}>2</button>
          <button onClick={() => appendValue('3')}>3</button>
          <button onClick={calculate} className="equal">=</button>
        </div>
        <div className="row the-end">
          <button onClick={() => appendValue('0')}>0</button>
          <button onClick={() => appendValue('.')}>.</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;