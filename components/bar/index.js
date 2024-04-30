// Importing necessary dependencies and components
import styles from './style.module.css'; // Import CSS module styles
import arrowLeft from '../../assets/arrowLeft.png';
import arrowDown from '../../assets/arrowDown.png';
import tick from '../../assets/tick.png';
import Image from 'next/image';
import Line from '../line/index.js';
import { useState } from 'react';
import arrowRight from '../../assets/arrowRight.png';
import useWindowWidth from '../../hooks/useWindowWidth.js';

// Functional component named index (consider renaming it to Index to follow convention)
function index(props) {
  // State variables to manage component behavior
  const [showDropDown, setShowDropDown] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [type, setType] = useState('RECOMMENDED');
  const windowWidth = useWindowWidth();

  // Function to handle the selection of type
  const handleType = (typ) => {
    setType(typ);
  }

  // Function to render the tick mark based on the type
  const check = (typ) => {
    if (typ === type)
      return (
        <>
          <Image alt="tick" className={styles['tick']} src={tick} />
          <p className={styles['type']}>{typ}</p>
        </>
      );
    else
      return <p>{typ}</p>;
  }

  return (
    <div className={styles['bar-container']}>
      {/* Conditional rendering based on window width */}
      {windowWidth > 578 ? (
        <div className={styles['bar-sub-container']}>
          <Line />
          <div className={styles['btns']}>
            <div className={styles['no-items']}>
              <p className={styles['text']}>3425 ITEMS</p>
            </div>
            <div className={styles['btn-container']}>
              {!showFilter ? (
                <Image alt="right-arrow" className={styles['left-arrow']} src={arrowRight} />
              ) : (
                <Image alt="left-arrow" className={styles['left-arrow']} src={arrowLeft} />
              )}
              <p
                onClick={() => {
                  setShowFilter(!showFilter);
                  props.toggleFilter();
                }}
                className={styles['filter-btn']}
              >
                {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
              </p>
            </div>
            <div className={styles['btn-container']}>
              <p onClick={() => setShowDropDown(!showDropDown)} className={styles['text']}>{type}</p>
              <Image alt="down-arrow" className={styles['down-arrow']} src={arrowDown} />
            </div>
          </div>
          {/* Drop-down menu */}
          {showDropDown && (
            <div className={styles['drop-down']}>
              <div onClick={() => handleType("RECOMMENDED")}>{check("RECOMMENDED")}</div>
              <div onClick={() => handleType("NEWEST FIRST")}>{check("NEWEST FIRST")}</div>
              <div onClick={() => handleType("POPULAR")}>{check("POPULAR")}</div>
              <div onClick={() => handleType("PRICE: HIGH TO LOW")}>{check("PRICE: HIGH TO LOW")}</div>
              <div onClick={() => handleType("PRICE: LOW TO HIGH")}>{check("PRICE: LOW TO HIGH")}</div>
            </div>
          )}
          <Line />
        </div>
      ) : (
        <div className={styles['bar-sub-container']}>
          <Line />
          <div className={styles['btns']}>
            <div className={styles['btn-container']}>
              <p
                onClick={() => {
                  setShowFilter(!showFilter);
                  props.toggleFilter();
                }}
                className={styles['filter-btn']}
              >
                FILTER
              </p>
            </div>
            <div className={styles['vertical-line']}></div>
            <div className={styles['btn-container']}>
              <p onClick={() => setShowDropDown(!showDropDown)} className={styles['text']}>{type}</p>
              <Image alt="down-arrow" className={styles['down-arrow']} src={arrowDown} />
            </div>
          </div>
          {/* Drop-down menu */}
          {showDropDown && (
            <div className={styles['drop-down']}>
              <div onClick={() => handleType("RECOMMENDED")}>{check("RECOMMENDED")}</div>
              <div onClick={() => handleType("NEWEST FIRST")}>{check("NEWEST FIRST")}</div>
              <div onClick={() => handleType("POPULAR")}>{check("POPULAR")}</div>
              <div onClick={() => handleType("PRICE: HIGH TO LOW")}>{check("PRICE: HIGH TO LOW")}</div>
              <div onClick={() => handleType("PRICE: LOW TO HIGH")}>{check("PRICE: LOW TO HIGH")}</div>
            </div>
          )}
          <Line />
        </div>
      )}
    </div>
  )
}

// Exporting the index component as the default export
export default index;
