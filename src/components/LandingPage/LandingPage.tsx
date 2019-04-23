import React from "react";
import { Navigation } from "../Nav/Navigation";
import styles from "./LandingPage.module.css";
import { About } from "../About/About";
import { Projects } from "../Projects/Projects";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const LandingPage = () => (
  <Router>
    <div className={styles.container}>
      <Navigation />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
      <Route exact path="/" component={About} />
    </div>
  </Router>
);
