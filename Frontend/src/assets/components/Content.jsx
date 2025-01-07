
import styles from './Content.module.css';  // Import the CSS module
import Contentimage from '../images/Image2.png';

function Content() {
  return (
    <section>
      <h3>Content</h3>
      <div className={styles.container}>
        <br /><br /><br />
        <h4 className={styles.sampleText}>FREE SAMPLE</h4>

        <div className={styles.sampleText}>
          <div className={styles.lineHeight}>
            <h1 className={styles.heading}>
              Powerful Generator and Free
            </h1>
            <h1 className={styles.heading}>Figma Sources</h1>
          </div>
        </div>

        <br />
        <div className={styles.textContainer}>
          <p>
            Startup Framework contains components and complex blocks
            which can easily be integrated into almost any design.
            All of the components are made in the same style and can
            easily be integrated into projects, allowing you to
            create hundreds of solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export { Content };
