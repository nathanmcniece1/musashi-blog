import styles from '../styles/MenuIcon.module.css';

function MenuIcon({ onMenuClick }) {
    return (
      <div className={styles.circleContainer} onClick={onMenuClick}>
        <div className={styles.iconContainer}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
    );
  }

  export default MenuIcon;