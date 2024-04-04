import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskForm from '@/components/taskForm';

describe('TaskForm', () => {
  it('renders input fields for Title, Type, Status, and Assignee', () => {
    const { getByLabelText } = render(<TaskForm />);
    
    expect(getByLabelText('Title:')).toBeInTheDocument();
    expect(getByLabelText('Type:')).toBeInTheDocument();
    expect(getByLabelText('Status:')).toBeInTheDocument();
    expect(getByLabelText('Assignee:')).toBeInTheDocument();
  });

  it('submits form with valid data', async () => {
    const handleSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<TaskForm handleSubmit={handleSubmit} />);

    fireEvent.change(getByLabelText('Title:'), { target: { value: 'Test Title' } });
    fireEvent.change(getByLabelText('Type:'), { target: { value: 'T' } });
    fireEvent.change(getByLabelText('Status:'), { target: { value: 'T' } });
    fireEvent.change(getByLabelText('Assignee:'), { target: { value: 'Test Assignee' } });

    fireEvent.click(getByText('Submit'));

    await waitFor(() => expect(handleSubmit).toHaveBeenCalled());
  });
  
});
