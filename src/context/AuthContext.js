import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as api from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('authToken'));
    const navigate = useNavigate();

    const handleLogin = async (email, senha) => {
        try {
            await api.login(email, senha);
            setIsAuthenticated(true);
            navigate('/dashboard');
        } catch (error) {
            console.error("Erro no login:", error);
            throw error;
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
        navigate('/login');
    };

    const value = {
        isAuthenticated,
        login: handleLogin,
        logout: handleLogout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};