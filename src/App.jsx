import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import TimeAttackPage from './components/TimeAttackPage';
import ForzaPage from './components/ForzaPage';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className='page'>
          <Routes>
            <Route path='/ra-router-menu' exact Component={HomePage}/>
            <Route path='/drift' Component={DriftPage}/>
            <Route path='/timeattack' Component={TimeAttackPage}/>
            <Route path='/forza' Component={ForzaPage}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
