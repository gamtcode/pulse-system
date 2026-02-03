import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import LoginPage from '@/pages/LoginPage';
import DashboardPage from '@/pages/DashboardPage';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/hooks/useAuth';

interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    const location = useLocation();
    const { isAuthenticated } = useAuth();

    const isLoginPage = location.pathname === '/login';
    const isDashboard = location.pathname === '/dashboard';

    // Hides global chrome on login and during unauthorized dashboard access to avoid misleading UI.
    const shouldHideLayout = isLoginPage || (isDashboard && !isAuthenticated);

    // Supports hash navigation with a short delay to ensure the target section is mounted.
    // Cleanup cancels the timer if the component unmounts before the delay completes.
    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;

        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                timeoutId = setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [location]);

    return (
        <div className="bg-dark min-h-screen text-white selection:bg-white selection:text-dark font-sans">
            {!shouldHideLayout && <NavBar />}
            {children}
            {!shouldHideLayout && <Footer />}
        </div>
    );
};

function App() {
    return (
        <Router>
            <AppLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <DashboardPage />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </AppLayout>
        </Router>
    );
}

export default App;
