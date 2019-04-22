import * as React from 'react';
import styles from './Projects.module.css';

export const Projects = () => (
  <div>
    <span>Here are some of the projects that I'm currently working on:</span>

    <div className={styles.contentGrid}>
      <div className={styles.box}>
        <h3>Next Train</h3>
      </div>
      <div className={styles.box}>
        <h3>ECL Documentation</h3>
      </div>
      <div className={styles.box}>
        <h3>DiversityCalendar</h3>
      </div>
    </div>
  </div>
)