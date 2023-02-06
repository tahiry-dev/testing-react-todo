import React from 'react';

function TodoTable({ currentInput, handleInput, handleKeyPress, inputArr, handleCheckboxClick }) {
  return (
    <div className='inputTable'>
      <h3>TODO</h3>
      <input value={currentInput} onChange={handleInput} onKeyDown={handleKeyPress} type="text" />
      <ul>
        {inputArr.map((item, index) => (
          <li key={index}><input onClick={() => handleCheckboxClick(index)} type="checkbox"/> {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoTable;