/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('<App />', () => {
    it('contains correct text', () => {
        render(<App />);
        const text = screen.getByText('This is a test app');
        expect(text).toBeInTheDocument();
      });
});

