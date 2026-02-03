import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SESSION_DURATION = 3 * 60 * 60 * 1000; // 3 hours in milliseconds

interface UseAuthReturn {
    isAuthenticated: boolean;
    logout: () => void;
}

/**
 * Centralizes authentication logic including session validation and logout.
 * Replaces duplicated localStorage checks across App, NavBar, and ProtectedRoute.
 *
 * @returns Authentication state and actions.
 */
export function useAuth(): UseAuthReturn {
    const navigate = useNavigate();
    const location = useLocation();

    const checkAuth = useCallback((): boolean => {
        const loggedIn = localStorage.getItem('loggedIn');
        const loginTime = localStorage.getItem('loginTime');

        if (loggedIn !== 'true' || !loginTime) {
            return false;
        }

        const now = new Date().getTime();
        if (now - parseInt(loginTime) > SESSION_DURATION) {
            // Session expired: clear stored auth state.
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('loginTime');
            return false;
        }

        return true;
    }, []);

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(checkAuth);

    // Re-validate auth state on route changes to catch session expiry.
    useEffect(() => {
        setIsAuthenticated(checkAuth());
    }, [location, checkAuth]);

    const logout = useCallback(() => {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('loginTime');
        setIsAuthenticated(false);
        navigate('/');
    }, [navigate]);

    return { isAuthenticated, logout };
}
