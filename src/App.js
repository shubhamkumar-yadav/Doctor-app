import './App.css';
import React from 'react';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { Body } from './components/Body.jsx';
import { Login } from './components/Login.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DRegister } from './components/DRegister.jsx';
import {PRegister} from "./components/PRegister.jsx";
import { Dashboard } from './components/Dashboard.jsx';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path='/' element={<Body />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/docregister' element={<DRegister />} />
          <Route exact path='/patregister' element={<PRegister />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
