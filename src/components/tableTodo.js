import React, { useState } from 'react';
import './TableTodoStyle.css';
import TodoTable from './TodoTable';
import DoneTable from './DoneTable';

function TableTodo() {
  const [currentInput, setCurrentInput] = useState("");
  const [inputArr, setInputArr] = useState([]);
  const [doneValue, setDoneValue] = useState([]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setInputArr(prevArray => [...prevArray, currentInput]);
      setCurrentInput("");
    }
  };

  const handleCheckboxClick = index => {
    setInputArr(inputArr.filter((_, i) => i !== index));
    setDoneValue(prevValue=> [...prevValue, inputArr[index]])
  };

  const handleInput = (input) => {
    setCurrentInput(input.target.value)
  };

  return (
    <div className='wrapper'>
      <TodoTable 
        currentInput={currentInput} 
        handleInput={handleInput} 
        handleKeyPress={handleKeyPress} 
        inputArr={inputArr} 
        handleCheckboxClick={handleCheckboxClick} 
      />
      <DoneTable doneValue={doneValue} />
    </div>
  );
}

export default TableTodo;