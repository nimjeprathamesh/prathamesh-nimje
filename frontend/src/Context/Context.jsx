"use client"

import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'light';
        }
        return 'light';
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (field) => (value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/addFeedback`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                toast.error(data.message);
            } else {
                toast.success(data.message);
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    const values = { theme, toggleTheme, formData, handleChange, handleSubmit };

    return (
        <MyContext.Provider value={values}>
            {children}
        </MyContext.Provider>
    );
};