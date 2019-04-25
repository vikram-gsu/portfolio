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
      <a href="mailto:vikram.pareddy@gmail.com" target="_blank"><Mail /></a>
      <a href="https://www.linkedin.com/in/vikram-pareddy-87a1a017/" target="_blank"><LinkedIn /></a>
      <a href="https://www.instagram.com/vikram.reddy/" target="_blank"> <Instagram /> </a>
      <a href="https://twitter.com/vikrampareddy" target="_blank"> <Twitter /> </a>
      
    </div>
  </div>
)

export default Contact;