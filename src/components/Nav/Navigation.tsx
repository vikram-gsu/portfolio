import React, {Fragment} from 'react';
import './NavbarWithFlex.css';
import {NavLink} from 'react-router-dom';

export const Navigation = () => (
  <nav>
    <ul className="Nav">
      <li className='title'><NavLink to="/about">Vikram Pareddy</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/projects">Projects</NavLink></li>
      <li><NavLink to="/blog">Blog</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
  </nav>
)