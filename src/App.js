import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import {
  Welcome,
  Search,
  NotFound,
  Result,
  Explore,
  Marketplace,
  PullRequests,
  Issues,
} from "./pages";
function App() {
  return (
    <div id="app">
      <NavBar />
      <main>
        <Routes>
          <Route path="/">
            <Route path="/" element={<Welcome />} />
            <Route path=":username" element={<Result />} />
          </Route>
          <Route path="/search" element={<Search />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/pull-requests" element={<PullRequests />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}