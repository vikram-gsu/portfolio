import * as React from 'react';
import styles from './LearnMoreBox.module.css';
import {Link} from 'react-router-dom';

interface LearnMoreBoxProps {
  href: string;
  children: React.ReactElement | Array<React.ReactElement>;
}
const LearnMoreBox = (props:LearnMoreBoxProps) => (
  <Link className={styles.box} to={props.href}>
    {props.children}
    <div className={styles.learnMore}>Learn more→</div>
  </Link>
)

export default LearnMoreBox;