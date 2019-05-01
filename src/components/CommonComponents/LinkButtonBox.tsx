import * as React from "react";
import styles from "./LinkButtonBox.module.css";
import { Link } from "react-router-dom";

interface LinkButtonBoxProps {
  id:string;
  applicationUrl: string;
  gitlabUrl: string;
  disabled?: boolean;
  children: React.ReactElement | Array<React.ReactElement>;
}
const LinkButtonBox = (props: LinkButtonBoxProps) => (
  <a className={styles.box} href={props.applicationUrl} target="_blank" id={props.id}>
    {props.children}
    {!props.disabled && (
      <div className={styles.links}>
        <a href={props.gitlabUrl} target="_blank">{"< VIEW SOURCE />"}</a>
      </div>
    )}
  </a>
);

export default LinkButtonBox;
