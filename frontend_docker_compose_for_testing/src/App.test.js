import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders developer name Yadanar', () => {
  render(<App />);
  const nameElement = screen.getByText(/Yadanar/i);
  expect(nameElement).toBeInTheDocument();
});

test('renders container environment status', () => {
  render(<App />);
  const envElement = screen.getByText(/Docker Development Setup/i);
  expect(envElement).toBeInTheDocument();
});

test('button increments click counter on user click', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /Click to Test Interactivity/i });
  expect(button).toHaveTextContent('0');
  fireEvent.click(button);
  expect(button).toHaveTextContent('1');
});