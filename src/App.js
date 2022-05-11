import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components';
import { Welcome, About, Search, BROKE as Broke } from './pages'
function App() {
    return (
        <div id="app">
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/about" element={<About />}/>
                    <Route path="/search" element={<Search />}/>
                    <Route path="*" element={<Broke />} />
                </Routes>
            </main>
        </div>
    )
}

export default App;