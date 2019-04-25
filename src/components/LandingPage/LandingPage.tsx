import React from "react";
import { Navigation } from "../Nav/Navigation";
import styles from "./LandingPage.module.css";
import { About } from "../About/About";
import { Projects } from "../Projects/Projects";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contact from '../Contact/Contact';
import Blog from '../Blog/Blog';

export const LandingPage = () => (
  <Router>
    <div className={styles.container}>
      <Navigation />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component = {Blog} />
      <Route exact path="/" component={About} />
    </div>
  </Router>
);
