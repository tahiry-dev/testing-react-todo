import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoTable from '../components/TodoTable';


describe('TodoTable', () => {

  const currentInput = '';
  const handleInput = jest.fn();
  const handleKeyPress = jest.fn();
  const inputArr = [];
  const handleCheckboxClick = jest.fn();

  it("renders the component correctly", () => {
    const { asFragment } = render(
      <TodoTable 
        currentInput={currentInput} 
        handleInput={handleInput} 
        handleKeyPress={handleKeyPress} 
        inputArr={inputArr} 
        handleCheckboxClick={handleCheckboxClick} 
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the correct input value when it changes', () => {
    const inputArr = ['item1', 'item2'];
    const handleInput = jest.fn();
    const handleKeyPress = jest.fn();
    const handleCheckboxClick = jest.fn();
    const { getByPlaceholderText } = render(
      <TodoTable 
        currentInput="initial value" 
        handleInput={handleInput} 
        handleKeyPress={handleKeyPress} 
        inputArr={inputArr} 
        handleCheckboxClick={handleCheckboxClick}
      />
    );

    const input = getByPlaceholderText('Enter your todo');
    expect(input).toHaveValue('initial value');
  });

  it('should call handleKeyPress when the user presses Enter', () => {
    const handleKeyPress = jest.fn();
    const { getByPlaceholderText } = render(
      <TodoTable 
        currentInput="" 
        handleInput={() => {}} 
        handleKeyPress={handleKeyPress} 
        inputArr={[]} 
        handleCheckboxClick={() => {}} 
      />
    );
    const input = getByPlaceholderText('Enter your todo');
    fireEvent.keyDown(input, { key: 'Enter', code: 13 });
    expect(handleKeyPress).toHaveBeenCalled();
  });


  it('tests onClick event handler', () => {
    const handleCheckboxClick = jest.fn();
    const inputArr = ['Todo 1', 'Todo 2'];
    const { getAllByRole } = render(
      <TodoTable
        inputArr={inputArr}
        handleCheckboxClick={handleCheckboxClick}
      />
    );
    const checkboxes = getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);
    expect(handleCheckboxClick).toHaveBeenCalledWith(0);
  });

});
