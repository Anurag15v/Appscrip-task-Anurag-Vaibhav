import styles from './style.module.css'; // Import CSS module styles
import Image from 'next/image';
import heart from '../../assets/heart.png';
import liked from '../../assets/liked.png';
import { useState } from 'react';
import useWindowWidth from '../../hooks/useWindowWidth.js';

// Component for displaying a product card
function index(props) {
  const [isLiked, setIsLiked] = useState(false); // State for tracking whether the product is liked
  const windowWidth = useWindowWidth(); // Hook for getting the window width

  // Truncate title if longer than 25 characters
  const truncatedTitle = props.data.title.length > 25 ? props.data.title.slice(0, 25) + '...' : props.data.title;

  return (
    <div className={styles['product-container']}>
      {/* Render different image sizes based on window width */}
      {windowWidth > 1130 && <Image alt="product-image" priority={true} width={300} height={350} src={props.data.image} />}
      {windowWidth >= 965 && windowWidth < 1130 && <Image priority={true} alt="product-image" width={250} height={300} src={props.data.image} />}
      {windowWidth >= 552 && windowWidth < 965 && <Image priority={true} alt="product-image" width={200} height={200} src={props.data.image} />}
      {windowWidth >= 416 && windowWidth < 552 && <Image priority={true} alt="product-image" width={150} height={150} src={props.data.image} />}
      {windowWidth < 416 && <Image priority={true} alt="product-image" width={130} height={130} src={props.data.image} />}
      
      {/* Display truncated title */}
      <p className={styles['title']}>{truncatedTitle}</p>

      {/* Render like button */}
      <div className={styles['text-icon-container']}>
        {/* Display different text based on user login status */}
        <p className={styles['signup-text']}><span className={styles['text-decor']}>Sign in</span> or Create an account to see pricing</p>

        {/* Render heart icon based on like status */}
        {!isLiked ? <Image alt="fav" onClick={() => setIsLiked(!isLiked)} className={styles['fav-icon']} src={heart} /> : <Image alt="fav" onClick={() => setIsLiked(!isLiked)} className={styles['fav-icon']} src={liked} />}
      </div>
    </div>
  );
}

export default index;
