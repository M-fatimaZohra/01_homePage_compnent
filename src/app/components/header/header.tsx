import React from "react";
import styles from "./header.module.css";
import Image from "next/image";

function Header() {
  return (
    <div className="fixed">

<div className={styles.div}>
<Image className={styles.b} src="/image.jpg" width={200} height={200} alt="hi" />

<h1 className={styles.h1}>FATIMA ZOHRA</h1>
<p className={styles.p}>BY: Fatima Zohra <br></br>
Assignment no: 01<br></br>
13/10/2024</p>
</div>

</div>
  );
}

export default Header;
