import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import PortfolioPage from './components/views/PortfolioPage/PortfolioPage';
import Nav from './components/views/NavBar/NavBar';
import Footer from './components/views/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/portfolio" component={PortfolioPage}/>
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
