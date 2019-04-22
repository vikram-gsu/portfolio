import React, {Fragment} from 'react';
import './NavbarWithFlex.css';

export const Navigation = () => (
  <nav>
    <ul className="Nav">
      <li className='title'><a href="#home">Vikram Pareddy</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#blog">Blog</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
)