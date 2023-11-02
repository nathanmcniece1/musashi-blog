 // Import the styles
import Image from 'next/image';
import styles from './layout.module.css';

const LightDarkToggle = ({ isDarkMode, onToggle }) => {
    return (
      <div className={styles.toggle} onClick={onToggle}>
        {isDarkMode ? 
          <Image src="/images/moon.png" alt="Moon" width={30} height={30} /> : 
          <Image src="/images/sun.png" alt="Sun" width={30} height={30} />
        }
      </div>
    );
  };
  
  export default LightDarkToggle;

  