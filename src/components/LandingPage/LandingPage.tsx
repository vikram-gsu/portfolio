import React from 'react';
import { Navigation } from '../Nav/Navigation';
import styles from './LandingPage.module.css';
import { Content } from './Content';
import { Projects } from '../Projects/Projects';
export const LandingPage = () => (
  <div className={styles.container}>
    <Navigation />
    <Projects />
  </div>
)