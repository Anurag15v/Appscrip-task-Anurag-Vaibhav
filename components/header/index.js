import styles from './style.module.css'; // Import CSS module styles
import Link from 'next/link';
import Image from 'next/image';
import Line from '../line/index.js';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';
import heart from '../../assets/heart.png';
import shoppingBag from '../../assets/shopping-bag.png';
import profile from '../../assets/profile.png';
import arrowDown from '../../assets/arrowDown.png';
import useWindowWidth from '../../hooks/useWindowWidth.js';
import Navbar from '../navbar/index.js';
import hamBurger from '../../assets/hamBurger.png';
import { useState } from 'react';
import Banner from '../banner/index.js';

export default function index() {
  const windowWidth = useWindowWidth();
  const [showMenu, setShowMenu] = useState(false);
  
  const closeMenu = () => {
    setShowMenu(false);
  }
  
  return (
    <div className={styles['header-container']}>
      <Banner/>
      <div className={styles['logo-container']}>
        <div className={styles['logo-sub-container']}>
          {showMenu && <Navbar closeMenu={closeMenu}/>}
          {windowWidth < 578 && <Image onClick={() => setShowMenu(!showMenu)} alt="menu" className={styles['logo']} src={hamBurger} />}
          <Image alt="company-logo" className={styles['logo']} src={logo} />
        </div>
        <div className={styles['name-container']}>
          <p className={styles['name']}>LOGO</p>
        </div>
        <div className={styles['icons-container']}>
          <Image alt="search" className={styles['icons']} src={search} />
          <Image alt="fav" className={styles['icons']} src={heart} />
          <Image alt="cart" className={styles['icons']} src={shoppingBag} />
          {windowWidth > 1020 && 
            <>
              <Image alt="profile" className={styles['icons']} src={profile} />
              <div className={styles['language']}>
                <p className={styles['lang-text']}>ENG</p>
                <Image alt="down-arrow" className={styles['icons']} src={arrowDown} />
              </div>
            </>
          }
        </div>
      </div>
      {windowWidth > 578 && 
        <div className={styles['link-container']}>
          <div>
            <Link className={styles['link']} href='#'>SHOP</Link>
          </div>
          <div>
            <Link className={styles['link']} href='#'>SKILLS</Link>
          </div>
          <div>
            <Link className={styles['link']} href='#'>STORIES</Link>
          </div>
          <div>
            <Link className={styles['link']} href='#'>ABOUT</Link>
          </div>
          <div>
            <Link className={styles['link']} href='#'>CONTACT US</Link>
          </div>
        </div>
      }
      <Line/>
    </div>
  );
}
