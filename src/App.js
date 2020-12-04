import React from 'react';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
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
      <Link className='nav-link-last'to='contact'>Contact</Link>
    </nav>
  );
}

const NavLite = () => {
	const [NavView, setNav] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setNav(open);
  };

  return (
    <div className='nav-main-lite'>
    <p>Cayetano Biehler</p>
    <Button onClick={toggleDrawer(true)}>MENU</Button>
    <Drawer anchor={'top'} open={NavView} onClose={toggleDrawer(false)}>
      <p>Cayetano Biehler</p>
      <Link className='first-nav-link-l'to='/'>Home</Link>
      <Link className='nav-link-l'to='about'>About</Link>
      <Link className='nav-link-l'to='contact'>Contact</Link>
    </Drawer>
    </div>
  );
}

const App = () => {
  return (
    <>
    <Router>
      <Nav/>
      <NavLite/>
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
