import React from 'react';
import { render } from '@testing-library/react';
import DoneTable from '../components/DoneTable';

describe('DoneTable component', () => {
  it('renders the DONE header', () => {
    const { getByText } = render(<DoneTable doneValue={[]} />);
    expect(getByText('DONE')).toBeInTheDocument();
  });

  it('renders the items passed in doneValue prop', () => {
    const doneValue = ['item 1', 'item 2', 'item 3'];
    const { getByText } = render(<DoneTable doneValue={doneValue} />);
    doneValue.forEach(item => {
      expect(getByText(item)).toBeInTheDocument();
    });
  });
});