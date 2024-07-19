import { vi, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form.tsx';

describe('FORM', () => {
  test('renders TextareaComponent correctly', () => {
    render(<Form loading={false} onSubmit={() => {}} />);
    const textArea = screen.getByRole('textbox');
    expect(textArea).toBeInTheDocument();
  });
  test('updates state on text input', () => {
    render(<Form loading={false} onSubmit={() => {}} />);
    const textArea = screen.getByRole('textbox');
    fireEvent.change(textArea, { target: { value: 'Test text' } });
    expect(textArea.value).toBe('Test text');
  });
  test('renders cConvert button correctly', () => {
    render(<Form loading={false} onSubmit={() => {}} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  test('calls conversion function on click', () => {
    const mock = vi.fn();
    render(<Form loading={false} onSubmit={mock} />);
    const button = screen.getByRole('button');
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Test text' } });
    fireEvent.click(button);
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
