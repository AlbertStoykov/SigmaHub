import { default as Search } from '.';
import { screen } from '@testing-library/react';

describe('Search', () => {

    test('it renders the current location', () => {
        let initState = { location: "New York City", result: { sunrise: "", sunset: "" } };
        renderWithReduxProvider(<Search />, { initState });
        let content = screen.getByText(/New York City/i)
        expect(content).toBeInTheDocument();
    });

    test('it renders a message if receiving an error', () => {
        let initState = { error: true }
        renderWithReduxProvider(<Search />, { initState });
        let error = screen.getByRole('alert')
        expect(error.textContent).toContain("Oops there's been an error!");
    });

    test('it renders a loading message when loading', () => {
        let initState = { loading: true }
        renderWithReduxProvider(<Search />, { initState });
        let content = screen.getByText(/Loading/i)
        expect(content).toBeInTheDocument();
    });
});
