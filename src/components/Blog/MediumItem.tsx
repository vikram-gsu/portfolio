import React from 'react'
import moment from 'moment'
import styles from './MediumItem.module.css';

export interface MediumItemProps {
  title: string;
  createdAt: string;
  subtitle: string;
  image: string;
  url: string;
}

const MediumItem = ({title, createdAt, subtitle, image, url}: MediumItemProps) => (
  <a className={styles.box} target="_blank" href={url}>
    <div className={styles.cardContent}>
      <div className={styles.mediaContent} style={{ overflow: 'inherit' }}>
      <h3 className={styles.title}>{title}</h3>
    </div>
    <div className={styles.content}>
      { subtitle }
    </div>
    <nav className={styles.level}>
      <div className={styles.levelLeft}>
          <span>{moment(createdAt).format('MMM Do')} </span>
          <span>{moment(createdAt).format('YYYY')}</span>
        </div>
      <div className={styles.levelRight}>
        <a className={styles.button} target="_blank" href={url}>
          Read on Medium
        </a>
      </div>
    </nav>
  </div>
  </a>
)

export default MediumItem