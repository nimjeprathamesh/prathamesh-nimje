import React, { useContext, useEffect } from 'react';
import { MyContext, MyContextProvider } from './Context/Context';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Router';
import { StatusBar, Style } from '@capacitor/status-bar';

export default function App() {
    const { theme } = useContext(MyContext);

    useEffect(() => {
        const setStatusBarStyle = async () => {
            const isNative = window.Capacitor && window.Capacitor.isNative;

            if (isNative) {
                if (theme === 'dark') {
                    await StatusBar.setBackgroundColor({ color: '#0f172a' });
                    await StatusBar.setStyle({ style: Style.Dark });
                } else {
                    await StatusBar.setBackgroundColor({ color: '#f8fafc' });
                    await StatusBar.setStyle({ style: Style.Light });
                }
            } else {
                return null
            }
        };

        setStatusBarStyle();
    }, []);

    return (
        <RouterProvider router={router} />
    );
}