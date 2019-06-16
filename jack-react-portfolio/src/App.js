import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'



function App() {
  return (
    <div className="App">
      <header>
    <Header />
        </header>     

        <main>

        <Route exact path="/" render={ () => <Home />}/>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />


        </main>
       
    </div>
  );
}

export default App;
