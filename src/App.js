import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Home} from './views/Home';
import {Contact} from './views/Contact';
import {About} from './views/About';

const Nav = () => {
  return (
    <nav className='nav-main'>
      <p className='nav-title'>Cayetano Biehler</p>
      <Link className='nav-link'to='/'>Home</Link>
      <Link className='nav-link'to='about'>About</Link>
      <Link className='nav-link'to='contact'>Contact</Link>
    </nav>
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
