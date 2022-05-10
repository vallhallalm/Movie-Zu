import React from 'react';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './bootstrap-3.3.7-dist/css/bootstrap.css';
import {Navbar} from './composant/navbar';
import {Footer} from './composant/footer';
import {Jumbotron} from './composant/jumbotron';
import {PageAccueil} from './Page/PageAccueil'

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route  path="/" element={<PageAccueil/>}></Route>
            <Route path="/Top"></Route>
            <Route path="/Sortie"></Route>
          </Routes>
        </BrowserRouter>
        
      
      <Footer/>
    </div>
  );
}

export default App;
