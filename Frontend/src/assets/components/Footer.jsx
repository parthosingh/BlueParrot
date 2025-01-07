import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.logo}><h3>Startup 3</h3></div>
        <div className={styles.linkContainer}>
          <h3>Privacy policy</h3>
          <h3>Terms</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpCZEvTmBLh0xuUk19qLq0PRUO4QaDCugt2Q&s"
            alt="Social Icon 1"
            className={styles.icon}
          />
          <img
            src="https://store-images.s-microsoft.com/image/apps.30645.9007199266245907.cb06f1f9-9154-408e-b4ef-d19f2325893b.ac3b465e-4384-42a8-9142-901c0405e1bc"
            alt="Social Icon 2"
            className={styles.icon}
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8t2_NMA2R3ZSGwq87T15zI4I4K0cbd_3bwQ&s"
            alt="Social Icon 3"
            className={styles.icon}
          />
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.linkList}>
          <h4>Tour</h4>
          <h4>Features</h4>
          <h4>Pricing Plans</h4>
          <h4>Our Works</h4>
          <h4>Brands</h4>
          <h4>Contacts</h4>
        </div>
        <div>
          <p>©2017 Designmode. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export { Footer };
