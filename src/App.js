import logo from './logo.svg';
import './App.css';
import React from 'react';
import Menu from './components/menu'
import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom';
import Home from "./views/home";
import DetailAnimal from './views/details-animal';
import AnimalType from './views/AnimalType';


const App = () => {
  return (
    <Router>
      <Menu></Menu>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/types/:idType/animaux" element={<AnimalType />} />
          <Route path="/types/5/animaux" element={<Home />} />
          <Route path="/details/:idAnimal" element={<DetailAnimal />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App;
