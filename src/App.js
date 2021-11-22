import React from 'react';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import './App.css';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Home} from './views/Home';
import {Contact} from './views/Contact';
import {About} from './views/About';

const Nav = () => {
  return (
    <nav className='nav-main'>
      <p className='nav-title'>Cayetano Biehler</p>
      <Link className='nav-link' to='/'>Home</Link>
      <Link className='nav-link' to='about'>About</Link>
      <Link className='nav-link' to='contact'>Contact</Link>
      <a className='nav-link-last' href='https://iamcaye.github.io/blog/' target="noopener">Blog</a>
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
      <Link onClick={toggleDrawer(false)} className='first-nav-link-l' to='/'>Home</Link>
      <Link onClick={toggleDrawer(false)} className='nav-link-l' to='about'>About</Link>
      <Link onClick={toggleDrawer(false)} className='nav-link-l' to='contact'>Contact</Link>
      <a onClick={toggleDrawer(false)} className='nav-link-l' target="noopener" href='https://iamcaye.github.io/blog/'>Blog</a>
    </Drawer>
    </div>
  );
}

const App = () => {
  return (
    <>
    <Router>
      <Nav />
      <NavLite />
      <div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
