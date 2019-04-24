import * as React from "react";
import styles from "./LinkButtonsBox.module.css";
import { Link } from "react-router-dom";

interface LinkButtonBoxProps {
  id:string;
  applicationUrl: string;
  gitlabUrl: string;
  disabled?: boolean;
  children: React.ReactElement | Array<React.ReactElement>;
}
const LinkButtonBox = (props: LinkButtonBoxProps) => (
  <Link className={styles.box} to={props.applicationUrl} id={props.id}>
    {props.children}
    {!props.disabled && (
      <div className={styles.links}>
        <a href="#">{"<VIEW SOURCE />"}</a>
      </div>
    )}
  </Link>
);

export default LinkButtonBox;
