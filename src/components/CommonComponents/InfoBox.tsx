import * as React from "react";
import styles from "./LinkButtonsBox.module.css";
import { Link } from "react-router-dom";

interface InfoBoxProps {
  children: React.ReactElement | Array<React.ReactElement>;
}
const InfoBox = (props: InfoBoxProps) => (
  <div className={styles.box}>
    {props.children}
  </div>
);

export default InfoBox;
