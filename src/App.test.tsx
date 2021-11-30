import React from 'react';
import { render, screen } from '@testing-library/react';
import Trivia from './Trivia';

test('renders learn react link', () => {
   render(<Trivia />);
   const linkElement = screen.getByText(/learn react/i);
   expect(linkElement).toBeInTheDocument();
});
