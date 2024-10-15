import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.a}>
      <footer>
        <p className={styles.p}>© 2024 Fatima Zohra. All rights reserved.</p>
        <p className={styles.p}>Follow me on:</p>
        <ul>
          <li className={styles.a1}>
            <a href="https://www.linkedin.com/in/fatima-zohra-4a1b712b4/" target="_blank">Linkedin </a>
          </li>
          <li className={styles.a1}>
            <a href="https://github.com/M-fatimaZohra" target="_blank">Github</a>
          </li>
          </ul>
          <p className={styles.p}>About My:</p>
          <ul>
            <li className={styles.a2}>
              <a href="#hobby">Hobbies</a>
            </li>
            <li className={styles.a2}>
              <a href="#ilike">Likes</a>
            </li>
            <li className={styles.a2}>
              <a href="#skill">Skills</a>
            </li>
          </ul>
      
        <p>
          <a className={styles.a1} href="#top">
            Back to Top
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
