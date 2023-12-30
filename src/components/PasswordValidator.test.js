import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PasswordValidator from './PasswordValidator/PasswordValidator';

// Mocking the usePasswordValidator hook
jest.mock('../hooks/usePasswordValidator', () => ({
    usePasswordValidator: () => ({
        passwordStatus: ['Password is valid'],
        handlePassword1Change: jest.fn(),
        handlePassword2Change: jest.fn(),
        handleSubmit: jest.fn(),
        canSubmit: true,
        isValidPassword: true,
    }),
}));

describe('PasswordValidator', () => {
    it('renders PasswordValidator component correctly', () => {
        const { getByTestId } = render(<PasswordValidator />);

        // Check if the password input fields are present
        expect(getByTestId('password-input')).toBeInTheDocument();
        expect(getByTestId('confirm-password-input')).toBeInTheDocument();

        // Check if the "Submit" button is present
        expect(getByTestId('submit-button')).toBeInTheDocument();

        // Check if the "see password" checkbox is present
        expect(getByTestId('see-password-checkbox')).toBeInTheDocument();
    });

    it('toggles password visibility when "see password" checkbox is clicked', () => {
        const { getByTestId } = render(<PasswordValidator />);

        const viewPasswordCheckbox = getByTestId('see-password-checkbox');

        // Initially, password fields should be of type "password"
        expect(getByTestId('password-input').type).toBe('password');
        expect(getByTestId('confirm-password-input').type).toBe('password');

        // Click the "see password" checkbox
        fireEvent.click(viewPasswordCheckbox);

        // After clicking, password fields should be of type "text"
        expect(getByTestId('password-input').type).toBe('text');
        expect(getByTestId('confirm-password-input').type).toBe('text');
    });

    it('displays the correct password status message', () => {
        const { getByText } = render(<PasswordValidator />);

        // Check if the correct password status message is displayed
        expect(getByText('Password is valid')).toBeInTheDocument();
    });

    // Add more test cases as needed for the other functionalities of the component
});
