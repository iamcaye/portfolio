import React from 'react'
import '../App.css'
import Caye from '../img/caye-hi.png'

export const Contact = () => {
  return (
    <>
    <img src={Caye} alt='caye' className='caye'/>
    <h1>Contact</h1>
    <a className='iglink' target='_blank' href='https://www.instagram.com/cayetanobiehler/'>Instagram : @cayetanobiehler</a>
    <p>Gmail : cayetano.biehler@gmail.com</p>
    </>
  );
}

