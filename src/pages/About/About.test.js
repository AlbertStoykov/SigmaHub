import { default as About } from '.';
import { screen, render } from '@testing-library/react';

describe('About', () => {

    test('it renders', () => {
        render(<About />)
        const heading = screen.getByRole('heading');
        expect(heading.textContent).toMatch(/about/i);
    });

});