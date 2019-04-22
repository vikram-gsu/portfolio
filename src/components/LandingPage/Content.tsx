import * as React from "react";
import profilePic from "./assets/profile.jpg";
import SpeechBubble from "./assets/speech-bubble.svg";
import styles from "./LandingPage.module.css";

export const Content = () => (
  <React.Fragment>
    <img id="profileImage" src={profilePic} alt="Profile Image" />
    <aside>
      <h2>About me</h2>
      <span>
        Hi, I'm Vikram. Here's a short introduction about me and my work:
      </span>
      <div className={styles.contentGrid}>
        <a className={styles.box} href="#projects">
          <h3>Software Engineer</h3>
          <span>I work primarily as a professional Software Developer.</span>
          <div className={styles.learnMore}>Learn more→</div>
        </a>
        <a className={styles.box} href="#contact">
          <h3>Rock Climber</h3>
          <span>I qualify myself as an amateur rock climber</span>
          <div className={styles.learnMore}>Learn more→</div>
        </a>
        <a className={styles.box} href="#contact">
          <h3>Artist</h3>
          <span>I'm a friends only professional photographer</span>
          <div className={styles.learnMore}>Learn more→</div>
        </a>
        <a className={styles.box} href="#blog">
          <h3>Blogger</h3>
          <span>I blog about life and observational stuff</span>
          <div className={styles.learnMore}>Learn more→</div>
        </a>
      </div>
    </aside>
  </React.Fragment>
);
