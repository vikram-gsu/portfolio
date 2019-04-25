import * as React from 'react';
import styles from './LearnMoreBox.module.css';
import {Link} from 'react-router-dom';
import classnames  from 'classnames';

interface LearnMoreBoxProps {
  href: string;
  disabled?:boolean;
  
  children: React.ReactElement | Array<React.ReactElement>;
}
const LearnMoreBox = (props:LearnMoreBoxProps) => (
  <Link className={classnames(styles.box, props.disabled && styles.disabled)} to={props.href}>
    {props.children}
    {!props.disabled && <div className={styles.learnMore}>Learn more→</div>}
  </Link>
)

export default LearnMoreBox;