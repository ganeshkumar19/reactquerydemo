
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';  // ✅ Import this for additional matchers
import LoginComponent from '../LoginComponent';

test("login text loaded", () => {
    render(<LoginComponent />);
    expect(screen.queryByText('Login', { exact: true })).toBeInTheDocument();
});


test ("input feilds are empty when component gets loaded", ()=>{
    render(<LoginComponent/>)
    expect(screen.queryByPlaceholderText('enter email')).toHaveValue("")
    expect(screen.queryByPlaceholderText('enter password')).toHaveValue("")
})