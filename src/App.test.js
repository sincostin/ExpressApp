// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ExpressApp title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ExpressApp/i);
    expect(titleElement).toBeInTheDocument();
});
