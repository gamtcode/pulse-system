import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '@/services/auth.service';
import logo from '@/assets/images/pulse.png';
import { Home, Eye, EyeOff } from 'lucide-react';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const [instagramUser, setInstagramUser] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const SESSION_DURATION = 3 * 60 * 60 * 1000;

    // Reuses a valid local session to avoid unnecessary logins while enforcing a fixed TTL.
    useEffect(() => {
        const loggedIn = localStorage.getItem('loggedIn');
        const loginTime = localStorage.getItem('loginTime');

        if (loggedIn === 'true' && loginTime) {
            const now = new Date().getTime();
            const timeElapsed = now - parseInt(loginTime);

            if (timeElapsed < SESSION_DURATION) {
                navigate('/dashboard');
            } else {
                localStorage.removeItem('loggedIn');
                localStorage.removeItem('loginTime');
            }
        }
    }, [navigate, SESSION_DURATION]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg('');

        try {
            const result = await authService.login(instagramUser, password);

            if (result.success) {
                const now = new Date().getTime();
                localStorage.setItem('loggedIn', 'true');
                localStorage.setItem('loginTime', now.toString());
                navigate('/dashboard');
            } else {
                setErrorMsg(result.message || 'Usuário ou senha inválidos.');
            }
        } catch (error) {
            console.error('Login Error:', error);
            setErrorMsg('Falha na comunicação com o servidor. Tente novamente.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-start sm:items-center justify-center px-6 pt-12 sm:pt-0 relative overflow-hidden bg-dark">

            <div className="noise-overlay !z-0"></div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="glass-card !bg-white/5 w-full max-w-[440px] relative z-10 text-center p-6 sm:p-10 md:!p-12 animate-fade-up mx-2 sm:mx-4">

                <div className="flex justify-center mb-6">
                    <div className="animate-brand-glow [will-change:filter]">
                        <img
                            src={logo}
                            alt="PULSE"
                            className="w-20 h-20 md:w-24 md:h-24 object-contain"
                        />
                    </div>
                </div>

                <div className="animate-brand-glow [will-change:filter] inline-block mb-10 md:mb-12">
                    <h1 className="text-4xl sm:text-3xl md:text-[2.5rem] font-bold text-gradient mb-2 whitespace-nowrap">PULSE System</h1>
                    <p className="text-gray-400 text-[10px] md:text-[11px] font-mono uppercase tracking-[0.2em] md:tracking-[0.35em] leading-relaxed">
                        Prospective User & Lead <br /> Strategy Engine
                    </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6 text-left">
                    <div>
                        <label className="block text-[11px] md:text-[12px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-2">
                            Usuário
                        </label>
                        <input
                            type="text"
                            value={instagramUser}
                            onChange={(e) => setInstagramUser(e.target.value)}
                            className="w-full bg-dark/50 border border-border rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:outline-none focus:border-white/30 focus:bg-white/[0.02] focus:ring-1 focus:ring-white/10 transition-all font-sans"
                            placeholder="usuário"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-[11px] md:text-[12px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-2">
                            Senha
                        </label>
                        <div className="relative group/field">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-dark/50 border border-border rounded-xl px-4 py-3 pr-12 text-white placeholder:text-gray-700 focus:outline-none focus:border-white/30 focus:bg-white/[0.02] focus:ring-1 focus:ring-white/10 transition-all font-sans"
                                placeholder="••••••••"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white transition-colors"
                            >
                                {showPassword ? (
                                    <EyeOff className="w-4 h-4" />
                                ) : (
                                    <Eye className="w-4 h-4" />
                                )}
                            </button>
                        </div>
                    </div>

                    {errorMsg && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-[11px] py-3 px-4 rounded-lg text-center font-mono uppercase tracking-wider animate-pulse">
                            {errorMsg}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-white/[0.03] border border-white/10 text-white font-medium py-4 rounded-xl hover:bg-white/[0.08] hover:border-white/20 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden animate-brand-glow [will-change:filter]"
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-white/10 border-t-white rounded-full animate-spin"></div>
                        ) : (
                            <>
                                <span className="uppercase tracking-[0.2em] text-xs">Entrar no Sistema</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[scan-line_3s_infinite] pointer-events-none"></div>
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-8">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center justify-center gap-2 mx-auto text-gray-500 text-[11px] md:text-[12px] hover:text-white transition-colors uppercase tracking-[0.2em] font-mono"
                    >
                        <Home className="w-3 h-3" /> Página principal
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
