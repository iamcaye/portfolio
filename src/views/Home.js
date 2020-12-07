import React from 'react'
import '../App.css'
import Caye from '../img/caye.png'

export const Home = () => {
  return (
    <>
    <div className='container'>
      <img src={Caye} alt='caye' className='caye'/>
      <p className='block'>I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it. (Bill Gates)</p>
      <p></p>
    </div>
    <p className='quote'>
      Hi, I'm Cayetano and this is my portfolio.<br></br>Enjoy it!
    </p>
    </>
  );
}
