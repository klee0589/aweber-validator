import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import PasswordValidator from '../components/PasswordValidator/PasswordValidator';

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
        render(<PasswordValidator />);

        expect(screen.getByTestId('password-input')).toBeInTheDocument();
        expect(screen.getByTestId('confirm-password-input')).toBeInTheDocument();

        expect(screen.getByTestId('submit-button')).toBeInTheDocument();
        expect(screen.getByTestId('see-password-checkbox')).toBeInTheDocument();
    });

    it('toggles password visibility when "see password" checkbox is clicked', () => {
        render(<PasswordValidator />);

        const viewPasswordCheckbox = screen.getByTestId('see-password-checkbox');

        expect(screen.getByTestId('password-input').type).toBe('password');
        expect(screen.getByTestId('confirm-password-input').type).toBe('password');

        fireEvent.click(viewPasswordCheckbox);

        expect(screen.getByTestId('password-input').type).toBe('text');
        expect(screen.getByTestId('confirm-password-input').type).toBe('text');
    });

    it('displays the a successful password match', () => {
        render(<PasswordValidator />);

        expect(screen.getByText('Password is valid')).toBeInTheDocument();
    });

});
