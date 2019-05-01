import * as React from "react";
import styles from "./Projects.module.css";
import LinkButtonBox from "../CommonComponents/LinkButtonBox";
import InfoBox from "../CommonComponents/InfoBox";

const Projects = () => (
  <div className={styles.contentGrid}>
    <div className={styles.contentHeader}>
      <h2>Current Projects</h2>
    </div>

    <div className={styles.contentData}>
      <LinkButtonBox
        applicationUrl="https://master.d2vxe6j27764p8.amplifyapp.com/"
        gitlabUrl="https://github.com/vikram-gsu/metro_lines"
        id="project1"
      >
        <h3>Next Train</h3>
        <div>
          Next Train is a web application, currently focussed on Hyderabad
          metro. It displays the stations, train timings, fares, parking options
          etc. While I am currently developing the application by myself, I
          intend to include more developers as required.
        </div>
      </LinkButtonBox>
      <LinkButtonBox applicationUrl="#" gitlabUrl="#" id="project2">
        <h3>ECL Documentation</h3>
        <div>
          This is an open source application, aimed at improving the existing
          pdf based documentation for Enterprise Control Language(ECL). ECL is a
          LexisNexis developed language used to work on HPCC Systems(High
          Performance Computing Clusters).
        </div>
      </LinkButtonBox>
      <InfoBox>
        <h3>At LN:</h3>
        <ul>
          <li>Writing Python packages/module distributions</li>
          <li>Working on React(Reports)</li>
          <li>Building Flask APIs</li>
          <li>Consuming REST/SOAP services in Python</li>
          <li>Programming in ECL on HPCC Systems</li>
          <li>Working on Agile workflow using Gitlab CI, Jira, Zephyr etc.</li>
        </ul>
      </InfoBox>

      <div className={styles.previousWork}>
        <h3>Previously:</h3>
        <ul>
          <li>Worked on ASP.NET for Infosys Technologies</li>
          <li>
            Graduated with Masters in Computer Science at Georgia State
            University
          </li>
          <li>
            Open Source contributions include recent type definitions for
            react-leaflet-sidebarv2 on DefinitelyTyped, work on ECL
            documentation etc.
          </li>
          <li>
            I'm part of a team that won a 24 hour healthcare hackathon organized
            by Pitney Bowes and RCB
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Projects;