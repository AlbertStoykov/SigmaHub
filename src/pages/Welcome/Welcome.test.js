import { default as Welcome } from '.';
import { render, screen } from '@testing-library/react';

describe('Welcome', () => {

    test('it renders the title', () => {
        render(<Welcome />)
        const heading = screen.getByRole('heading')
        expect(heading.textContent).toContain('Sunrise, Sunset');
    });

});