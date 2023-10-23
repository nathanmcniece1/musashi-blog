import styles from '../styles/MenuIcon.module.css';

function MenuIcon({ onMenuClick }) {
  return (
    <div className={styles.circleContainer} onClick={onMenuClick}>
      <div className={styles.iconContainer}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}

  export default MenuIcon;