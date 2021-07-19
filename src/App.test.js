import { render, screen } from '@testing-library/react';
import Authentication from './App';
 
test('renders learn react link', () => {
  render(<Authentication />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
