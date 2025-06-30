import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} NewCo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
