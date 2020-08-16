import React from 'react';
import '../App.css';
import Caye from '../img/caye-pc.png'

export const About = () => {
  return (
    <>
    <div className='container'>
      <img src={Caye} alt='caye' className='caye'/>
      <span>
        <h1>About</h1>
        <p className='quote'>
          Currently studying Electronic Engineering (3rd year)<br></br> and self-taught software developer.
        </p>
      </span>
    </div>
    <div className='container'>
      <span>
        <h2>Electronics</h2>
        <ul>
          <li>
            <p>Advanced level on circuit analysis</p>
          </li>
          <li>
            <p>Circuit design using protoboard, resistors, O.A, diodes... and working with Deeds, PSPICE</p>
          </li>
          <li>
            <p>Advanced knowledge on the MSP430G2ET microcontroller and its library</p>
          </li>
        </ul>
      </span>
      <span>
        <h2>Coding</h2>
        <ul>
          <li>
            <p>Advanced level C programming, used for communication between processes and multi-processing</p>
          </li>
          <li>
            <p>C++11 programming (OOP)</p>
          </li>
          <li>
            <p>Self-taught Python programming</p>
          </li>
          <li>
            <p>Self-taught Javascript porgramming, currently learning ReactJS for Wev Development</p>
          </li>
        </ul>
      </span>
    </div>
    </>
  );
}
