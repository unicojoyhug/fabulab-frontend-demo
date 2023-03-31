import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders quote', () => {
  render(<App />);
  const linkElement = screen.getByText(/Projects/);
  expect(linkElement).toBeInTheDocument();
});
