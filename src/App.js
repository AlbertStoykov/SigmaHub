import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components';
import { Welcome, About, Search, NotFound, Result } from './pages'
function App() {
    return (
        <div id="app">
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/about" element={<About />}/>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/search">
                        <Route path="/search" element={<Search />} />
                        <Route path=":name" element={<Result />} />
                    </Route>
                </Routes>
            </main>
        </div>
    )
}

export default App;