import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Home} from './views/Home';
import {Contact} from './views/Contact';
import {About} from './views/About';

const Nav = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='about'>About</Link>
      <Link to='contact'>Contact</Link>
    </div>
  );
}

const App = () => {
  // HOOKS
  return (
    <>
    <Router>
      <Nav/>
      <div>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
