import React from 'react'
import  styles  from './hero.module.css'
function Hero() {
  return (
    <div className={styles.d1}>
  <h1  className={styles.h1}>Want To Know About Me?</h1>
  <h2 className={styles.h2}>you find the right place!</h2>
  <div className={styles.d2}>
    <h4 className={styles.h4}>Hi! I am Fatima zohra </h4>
    <p className={styles.p}>I&apos;m Fatima Zohra, a 16-year-old passionate about front-end programming<br></br>
    </p>
    <h4 id="hobby" className={styles.h4}>My Hobbies</h4>
    <ul className={styles.u1}>
      <li className={styles.li}>Coding👩🏻‍💻</li>
      <li className={styles.li}>Reading📖</li>
      <li className={styles.li}>Knotting🧶</li>
      <li className={styles.li}>Translating Songs🎵</li>
      <li className={styles.li}>Anime / Comic🍡🫖</li>
      <li className={styles.li}>Short Story writting📖🖊️</li>
    </ul>

    <h4 id="ilike"className={styles.h4}>What I Like?</h4>
    <ul className={styles.u1}>
      <li className={styles.li}>sweets food 🍰</li>
      <li className={styles.li}>Black 🖤</li>
      <li className={styles.li}>Glasses 👓</li>
      <li className={styles.li}>Italian, Japanese, Arabic📚</li>
      <li className={styles.li}>Anime / Comic 🍡🫖</li>
      <li className={styles.li}>Monarchy Era 👑</li>
    </ul>

    <h4 id="skill" className={styles.h4}>My Skills</h4>
    <ul className={styles.u1}>
      <li className={styles.li}>&lt;HTML&gt;</li>
      <li className={styles.li}>&#123;CSS&#125;</li>
      <li className={styles.li}>Javascript⚙️/Typescript🛡️</li>
      <li className={styles.li}>Node.js🌿</li>
      <li className={styles.li}>Next.js⚡</li>
      <li className={styles.li}>Git Hub😺</li>
      <li className={styles.li}>▲Vercel</li>
      
    </ul>
    </div>
  
    </div>
  )
}

export default Hero
