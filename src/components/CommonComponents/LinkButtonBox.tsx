import * as React from 'react';
import styles from './LearnMoreBox.module.css';
import {Link} from 'react-router-dom';

interface LinkButtonBoxProps {
  href: string;
  children: React.ReactElement | Array<React.ReactElement>;
}
const LinkButtonBox = (props:LinkButtonBoxProps) => (
  <Link className={styles.box} to={props.href}>
    {props.children}
    <div className={styles.learnMore}>Learn more→</div>
  </Link>
)

export default LinkButtonBox;