import React, {useState} from 'react';
import './TableTodoStyle.css';

function TableTodo(){

    const [currentInput, setCurrentInput] = useState("");
    const [inputArr, setInputArr] = useState([]);
    const [doneValue, setDoneValue] = useState([]);

    const handleKeyPress = (event) =>{
        if (event.key === 'Enter') {
            setInputArr(prevArray => [...prevArray, currentInput]);
            setCurrentInput("");
          }
    }

    const handleCheckboxClick = index => {
        setInputArr(inputArr.filter((_, i) => i !== index));
        setDoneValue(prevValue=> [...prevValue, inputArr[index]])
      };

    const handleInput = (input) => {
        setCurrentInput(input.target.value)
    }

    return(
        <div className='wrapper'>
            <div className='inputTable'>
                <h3>TODO</h3>
                <input value={currentInput} onChange={handleInput} onKeyDown={handleKeyPress} type="text" />
                <ul>
                    {inputArr.map((item, index) => (
                      <li key={index}><input onClick={() => handleCheckboxClick(index)} type="checkbox"/> {item}</li>
                    ))}
                </ul>
            </div>
            <div className="doneTable">
                <h3>DONE</h3>
                <ul>
                    {doneValue.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TableTodo;