import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Login from '../Login';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

vi.mock('@/services/queries/auth.query', async () => {
  const mod = await vi.importActual('@/services/queries/auth.query');
  const response = vi.fn().mockReturnValue({
    loading: false,
    login: () => {
      return true;
    },
    isError: false,
    error: null,
  });
  return {
    ...mod,
    response,
  };
});

describe('Login component', () => {
  it('should render the login form with inputs and login button', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>
    );

    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByRole('button', { name: /login/i });

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });
});
