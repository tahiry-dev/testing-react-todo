import React from 'react';
import { render, fireEvent, getByTitle, getByText } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import TableTodo from '../components/tableTodo';

describe('TableTodo', ()=>{
    
    it('renders the title DONE and TODO', () => {
        const { getByText } = render(<TableTodo />);
        const todoTitle = getByText('TODO')
        const doneTitle = getByText('DONE');
    
        expect(todoTitle).toBeInTheDocument();
        expect(doneTitle).toBeInTheDocument();
    });
      
    it('adds todo to the done list when enter is pressed', async () => {
        const { getByPlaceholderText, getByText, getByRole } = render(<TableTodo />);
      
        const input = getByPlaceholderText('Enter your todo');
        fireEvent.change(input, { target: { value: 'Learn Jest' } });
      
        fireEvent.keyDown(input, { key: 'Enter', code: 13 });
      
        const checkbox = await waitFor(() => getByRole('checkbox'));
        fireEvent.click(checkbox);
      
        const doneList = getByText('Learn Jest');
        expect(doneList).toBeInTheDocument();
      });
})