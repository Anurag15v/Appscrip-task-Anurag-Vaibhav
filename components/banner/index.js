// Importing CSS module styles
import styles from './style.module.css';
// Importing custom hook to get window width
import useWindowWidth from '../../hooks/useWindowWidth.js';
// Importing images for different screen sizes
import laptopBanner from '../../assets/laptopBanner.png';
import mobileBanner from '../../assets/mobileBanner.png';
// Importing the Image component from Next.js
import Image from 'next/image';

// Functional component named index (consider renaming it to Index to follow convention)
function index() {
  // Using custom hook to get the window width
  const windowWidth = useWindowWidth();

  return (
    // Container div with a class from the imported CSS module
    <div className={styles['banner-container']}>
      {/* Conditionally rendering Image component based on window width */}
      {windowWidth > 768 && <Image className={styles['banner']} src={laptopBanner} />}
      {windowWidth <= 768 && <Image className={styles['banner']} src={mobileBanner} />}
    </div>
  )
}

// Exporting the index component as the default export
export default index;
