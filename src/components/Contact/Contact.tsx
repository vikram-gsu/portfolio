import * as React from 'react';
import styles from './Contact.module.css';
import Instagram from '../SocialMedia/Instagram';
import Twitter from '../SocialMedia/Twitter';
import LinkedIn from '../SocialMedia/LinkedIn';
import Mail from '../SocialMedia/Mail';

const Contact = () => (
  <div className={styles.contentGrid}>
    <div className={styles.contact_list}>
      <Mail />
      <LinkedIn />
      <Instagram />
      <Twitter />
    </div>
  </div>
)

export default Contact;