import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap-3.3.7-dist/css/bootstrap.css';
import {Navbar} from './navbar';
import {Footer} from './footer';
import {Jumbotron} from './jumbotron';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container-fluid" id="accpage">
        <Jumbotron/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
