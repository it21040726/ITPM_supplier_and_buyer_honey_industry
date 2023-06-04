import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import Posts from './containers/Posts';
import "./App.css";

const App = () => {
    return (
        <div className='app'>
            <Routes>
                <Route path="/" element={<Posts />} />
            </Routes>
        </div>
    );
}

export default App;
