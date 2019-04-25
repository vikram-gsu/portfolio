import * as React from "react";
import profilePic from "../../assets/profile.jpg";
import styles from "./About.module.css";
import LearnMoreBox from '../CommonComponents/LearnMoreBox';

export const About = () => (
    <aside className={styles.contentGrid}>
      <div className="basicProfile">
      <img id="profileImage" src={profilePic} alt="Profile Image" />
      <div> Home is in Hyderabad, India</div>
      <div> Current location: Atlanta</div>
      </div>
      <div className={styles.contentHeader}>
        <h2>About me</h2>
      </div>
      <div className={styles.contentData}>
        <LearnMoreBox href="/projects">
          <h3>Software Engineer</h3>
          <span>I work primarily as a professional Software Developer</span>
        </LearnMoreBox>
        <LearnMoreBox href="/climb" disabled={true}>
          <h3>Rock Climber</h3>
          <span>I qualify myself as an amateur rock climber</span>
        </LearnMoreBox>
        <LearnMoreBox href="/contact" disabled={true}>
          <h3>Artist</h3>
          <span>I work in the visual medium, using a variety of tools</span>
        </LearnMoreBox>
        <LearnMoreBox href="/blog">
          <h3>Storyteller</h3>
          <span>I blog about life and observational stuff</span>
        </LearnMoreBox>
      </div>
    </aside>
);
