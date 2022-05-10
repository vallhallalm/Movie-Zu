import React from 'react';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './bootstrap-3.3.7-dist/css/bootstrap.css';
import {Navbar} from './composant/navbar';
import {Footer} from './composant/footer';
import {PageAccueil} from './Page/PageAccueil';
import {PageTop} from './Page/PageTop';
import {PageSortie} from './Page/PageSortie';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route  path="/" element={<PageAccueil/>}></Route>
            <Route path="/Top" element={<PageTop/>}></Route>
            <Route path="/Sortie" element={<PageSortie/>}></Route>
          </Routes>
        </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
