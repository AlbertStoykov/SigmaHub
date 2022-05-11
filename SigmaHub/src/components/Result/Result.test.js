import { default as Result } from '.';
import { screen, render } from '@testing-library/react';

describe('Result', () => {
    beforeEach(() => {
        const resultStub = { sunrise: "2:21:09 AM", sunset: "2:24:50 PM" };
        render(<Result result={resultStub}/>);
    });

    test('it shows the sunrise results', async () => {
        const sunrise = await screen.findByText("2:21:09 AM");
        expect(sunrise).toBeInTheDocument();
    });

    test('it shows the sunset results', async () => {
        const sunset = await screen.findByText("2:24:50 PM");
        expect(sunset).toBeInTheDocument();
    });
});