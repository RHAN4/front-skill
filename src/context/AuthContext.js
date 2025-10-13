import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as api from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogin = async (email, senha) => {
        try {
            const data = await api.login(email, senha);
            
            const userData = {
                email: data.username,
                roles: data.roles || []
            };

            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));

            navigate('/dashboard');
        } catch (error) {
            console.error("Erro no login:", error);
            localStorage.removeItem('authToken');
            localStorage.removeItem('user');
            throw error;
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login');
    };

    const value = {
        user,
        isAuthenticated: !!user,
        login: handleLogin,
        logout: handleLogout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};