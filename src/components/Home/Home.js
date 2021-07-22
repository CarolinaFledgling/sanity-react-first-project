import React from "react";
import styles from "./Home.module.scss";
/* import image from '../img/study-img.jpg' */
export default function Home() {
  return (
    <main className={styles.main}>
{/*       <img
        src={image}
        alt="laptop and book to study code"
        className={styles.imgHero}
      /> */}
      <section className="styles.mainSection">
        <h1 className={styles.title}>HI!🙋‍♀️ I'm Karolina!</h1>
      </section>
    </main>
  );
}
