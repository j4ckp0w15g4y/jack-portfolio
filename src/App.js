import React from 'react';
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
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
        <Route render={({location}) => (
          <TransitionGroup>
          <CSSTransition 
          key={location.key}         
            timeout={300}
            classNames="fade"
          >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/portfolio" component={Portfolio} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        )}/>
        
      </main>

    </div>
  );
}

export default App;
