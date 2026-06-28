import React from 'react';
import reactDOM from 'react-dom/client';
import '.index.css';
import HomePage from './landing_Page/home/HomePage';

const root = reactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    
        <HomePage />
    
    </React.StrictMode>
);