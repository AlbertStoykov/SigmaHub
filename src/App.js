import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import { Welcome, About, Search, NotFound, Result } from "./pages";
function App() {

    return (
        <div id="app">
            <NavBar />
            <main>
                <Routes>
                <Route path="/">
                        <Route path="/" element={<Search />} />
                        <Route path=":username" element={<Result />} />
                    </Route>
                    <Route path="/about" element={<About />}/>
                    <Route path="*" element={<NotFound />} />

                </Routes>
            </main>
        </div>
    )