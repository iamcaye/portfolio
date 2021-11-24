import React from 'react'
import '../App.css'
import Caye from '../img/caye-hi.png'

export const Contact = () => {
  return (
    <div className='contactDiv'>
      <img src={Caye} alt='caye' className='caye'/>
      <h1>Contact</h1>
      <a className='iglink' target='noopener' href='https://github.com/iamcaye'>Github : @iamcaye</a>
      <br/>
      <br/>
      <a className='iglink' target='noopener' href='https://www.instagram.com/cayetanobiehler/'>Instagram : @cayetanobiehler</a>
      <br/>
      <br/>
      <a className='iglink' target='noopener' href='mailto:cayetano.biehler@gmail.com'>Gmail : cayetano.biehler@gmail.com</a>
      <br/>
      <br/>
      <a className='iglink' target='noopener' href='https://www.linkedin.com/in/cayetano-biehler-pollaci-0074091b0/'>LinkedIn: Cayetano Biehler</a>
    </div>
  );
}

