import * as React from 'react';
import styles from './Contact.module.css';
import Instagram from '../SocialMedia/Instagram';
import Twitter from '../SocialMedia/Twitter';
import LinkedIn from '../SocialMedia/LinkedIn';
import Mail from '../SocialMedia/Mail';
import { Link } from 'react-router-dom';

const Contact = () => (
  <div className={styles.contentGrid}>
    <div className={styles.contact_list}>
      <Mail />
      <Link to="https://www.linkedin.com/in/vikram-pareddy-87a1a017/"><LinkedIn /></Link>
      <Link to="https://www.instagram.com/vikram.reddy/"> <Instagram /> </Link>
      <Twitter />
    </div>
  </div>
)

export default Contact;