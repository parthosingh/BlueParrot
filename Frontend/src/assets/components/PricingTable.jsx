import React from 'react';
import PriceImage from '../images/Image4.png';
import styles from './PricingTable.module.css';

function Pricing() {
  return (
    <>
      <h3>Pricing Table</h3>
      <div
        className={styles.container}
        style={{
          backgroundImage: `url(${PriceImage})`,
        }}
      >
        <div>
          <h1>Plan & Pricing</h1>
        </div>

        <div className={styles.description}>
          <pre>Startup Framework is free forever - you only pay for </pre>
          <pre>custom domain hosting or to export your site.</pre>
        </div>

        <div className={styles.grid}>
          {/* Starter Plan */}
          <div className={styles.plan}>
            <h4>Starter</h4>
            <h1>
              9.99 <sup style={{ fontSize: '1rem' }}>$</sup>
            </h1>
            <h5>
              <span style={{ color: 'green', paddingRight: '5px' }}>✓</span>2 GB of space
            </h5>
            <h5>
              <span style={{ color: 'green', paddingRight: '5px' }}>✓</span>14 days of backups
            </h5>
            <h5>
              <span style={{ color: 'green', paddingRight: '5px' }}>✓</span>Social integrations
            </h5>
            <h5>
              <span style={{ color: 'green', paddingRight: '5px' }}>✓</span>Client billing
            </h5>
            <h5 style={{ color: '#81879F' }}>Remote access</h5>
            <h5 style={{ color: '#81879F' }}>Custom domain</h5>
            <h5 style={{ color: '#81879F' }}>24-hour support</h5>
            <h5 style={{ color: '#81879F' }}>Admin tools</h5>
            <h5 style={{ color: '#81879F' }}>Collaboration tools</h5>
            <h5 style={{ color: '#81879F' }}>User management</h5>

            <br />

            <div className={styles.getStartedButton}>
              <p>Get Started</p>
            </div>
          </div>

          {/* Professional Plan */}
          <div className={styles.plan}>
            <h4>Professional</h4>
            <h1>
              9.99 <sup style={{ fontSize: '1rem' }}>$</sup>
            </h1>
            <h5>
              <span style={{ color: 'green' }}>✓</span>2 GB of space
            </h5>
            <h5>
              <span style={{ color: 'green' }}>✓</span>14 days of backups
            </h5>
            <h5>
              <span style={{ color: 'green' }}>✓</span>Social integrations
            </h5>
            <h5>
              <span style={{ color: 'green' }}>✓</span>Client billing
            </h5>
            <h5>
              <span style={{ color: 'green' }}>✓</span>Remote access
            </h5>
            <h5>
              <span style={{ color: 'green' }}>✓</span>Custom domain
            </h5>
            <h5>
              <span style={{ color: 'green' }}>✓</span>24-hour support
            </h5>
            <h5 style={{ color: '#81879F' }}>Admin tools</h5>
            <h5 style={{ color: '#81879F' }}>Collaboration tools</h5>
            <h5 style={{ color: '#81879F' }}>User management</h5>

            <br />

            <div className={`${styles.getStartedButton} ${styles.green}`}>
              <p>Get Started</p>
            </div>
          </div>

          {/* Team Plan */}
          <div className={styles.plan}>
            <h4>Team</h4>
            <h1>
              49.99 <sup style={{ fontSize: '1rem' }}>$</sup>
            </h1>
            <h5>
              <span style={{ color: 'green', paddingRight: '5px' }}>✓</span>2 GB of space
            </h5>
            <h5>
              <span style={{ color: 'green', paddingRight: '5px' }}>✓</span>14 days of backups
            </h5>
            <h5>
              <span style={{ color: 'green', paddingRight: '5px' }}>✓</span>Social integrations
            </h5>
            <h5>
              <span style={{ color: 'green', paddingRight: '5px' }}>✓</span>Client billing
            </h5>
            <h5>
              <span style={{ color: 'green', paddingRight: '5px' }}>✓</span>Remote access
            </h5>
            <h5>
              <span style={{ color: 'green', paddingRight: '5px' }}>✓</span>Custom domain
            </h5>
            <h5>
              <span style={{ color: 'green', paddingRight: '5px' }}>✓</span>24-hour support
            </h5>
            <h5>
              <span style={{ color: 'green', paddingRight: '5px' }}>✓</span>Admin tools
            </h5>
            <h5>
              <span style={{ color: 'green', paddingRight: '5px' }}>✓</span>Collaboration tools
            </h5>
            <h5>
              <span style={{ color: 'green', paddingRight: '5px' }}>✓</span>User management
            </h5>

            <br />

            <div className={styles.getStartedButton}>
              <p>Get Started</p>
            </div>
          </div>
        </div>
      </div>

      <br />
    </>
  );
}

export { Pricing };
