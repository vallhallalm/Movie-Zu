import React, {useState} from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import './App.css';
import './bootstrap-3.3.7-dist/css/bootstrap.css';
import {Navbar} from './composant/navbar';
import {Footer} from './composant/footer';
import {PageAccueil} from './Page/PageAccueil';
import {PageTop} from './Page/PageTop';
import {PageSortie} from './Page/PageSortie';
import {PageRecherche} from './Page/PageRecherche';



function App() {
  const [recherche,setRecherche] = useState('')

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar recherche={setRecherche} />
          <Routes>
            <Route path="/" element={<PageAccueil/>}></Route>
            <Route path="/Top" element={<PageTop/>}></Route>
            <Route path="/Sortie" element={<PageSortie/>}></Route>
            <Route path="/Recherche" element={<PageRecherche recherche={recherche}/>}></Route>
          </Routes>
        </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;


