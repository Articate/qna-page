import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <a className={styles.logo} href="/">
          <span>NewCo.</span>
        </a>
        <button className={styles.menuButton}>
          <span className={styles.menuLabel}>Meny</span>
          <span className={styles.hamburgerIcon}>☰</span>
        </button>
      </div>
      
    </header>
  );
}
