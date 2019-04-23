import * as React from "react";
import styles from "./Projects.module.css";
import LinkButtonBox from "../CommonComponents/LinkButtonBox";

export const Projects = () => (
  <div className={styles.contentGrid}>
    <div className={styles.contentHeader}>
      <h2>Projects</h2>
      <span>I'm currently working on:</span>
    </div>

    <div className={styles.contentData}>
      <LinkButtonBox href="#">
        <h3>Next Train</h3>
      </LinkButtonBox>
      <LinkButtonBox href="#">
        <h3>ECL Documentation</h3>
      </LinkButtonBox>
      <LinkButtonBox href="#">
        <h3>Diversity Calendar</h3>
      </LinkButtonBox>
    </div>
  </div>
);
