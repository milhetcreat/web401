import logo from './logo.svg';
import './App.css';
import React from 'react';
import Menu from './components/menu'
import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom';
import Home from "./views/home";


const App = () => {
  return (
    <Router>
      <Menu></Menu>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<Home />} />
          {/* Define other routes that you need*/}
        </Routes>
      </main>
    </Router>
  )
}

export default App;
