import * as React from "react";
import styles from "./LearnMoreBox.module.css";
import { Link } from "react-router-dom";
import classnames from "classnames";

interface LearnMoreBoxProps {
  href: string;
  disabled?: boolean;

  children: React.ReactElement | Array<React.ReactElement>;
}

const LearnMoreBox = (props: LearnMoreBoxProps) => (
  <Link
    className={classnames(styles.box, props.disabled && styles.disabled)}
    to={props.href}
    style={{backgroundColor: '#ffffff',
      border: '0.1em solid #cccccc',
      color: 'black'}}
  >
    {props.children}
    <div className={classnames(styles.learnMore, props.disabled && styles.invisible)}>Learn more→</div>
  </Link>
);

export default LearnMoreBox;
