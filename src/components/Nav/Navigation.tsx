import React, {Fragment} from 'react';
import './NavbarWithFlex.css';
import {NavLink} from 'react-router-dom';

export const Navigation = () => (
  <nav>
    <ul className="Nav">
      <li className='title'><NavLink to="/" activeClassName="active">Vikram Pareddy</NavLink></li>
      <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
      <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
      <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
      <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
    </ul>
  </nav>
)