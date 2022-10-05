import { Main } from 'pages/MainPage';
import { Pokemon } from 'pages/Pokemon';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="pokemon/:id" element={<Pokemon />} />
                <Route path="home" element={<Main />} />
                <Route path="*" element={<Navigate to={'home?page=1'} replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
