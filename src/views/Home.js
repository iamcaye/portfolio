import React from 'react'
import '../App.css'
import Caye from '../img/caye.png'

export const Home = () => {
  return (
    <>
    <div className='container'>
      <img src={Caye} alt='caye' className='caye'/>
      <p className='block'>If people are doubting how far you can go, go so far that you can't hear them anymore</p>
    </div>
    <p className='quote'>
      Hi, i'm Cayetano and this is my portfolio.<br></br>Enjoy it!
    </p>
    </>
  );
}
