import React from 'react';
import { MyContextProvider } from './Context/Context';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Router';

export default function App() {
    return (
        <MyContextProvider>
            <RouterProvider router={router} />
        </MyContextProvider>
    );
}