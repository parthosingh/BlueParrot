

import React from 'react';
import styles from './LandingPage.module.css';  

function LandingPage() {
  return (
    <>
      <h3>Landing Page</h3>
      <div className={styles.container}>
        <div className={styles.nav}>
          <h3>Home</h3>
          <h3>Features</h3>
          <h3>Pricing</h3>
          <h3>Blog</h3>
        </div>

        <h2 style={{ textAlign: "center", marginTop: "100px" }}>startup 3</h2>
        <h1 className={styles.heading}>Forget About Code</h1>
        <p className={styles.description}>
          Startup Framework gives you complete freedom over your creative process - 
          you don't have to think about any technical aspects. There are no limits and absolutely no coding.
        </p>
        <br />
        <div className={styles.smallContainer}>
          <div className={`${styles.dot} ${styles.activeDot}`}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>

        <button className={styles.button}>
          Create an Account
        </button>
      </div>
    </>
  );
}

export { LandingPage };



