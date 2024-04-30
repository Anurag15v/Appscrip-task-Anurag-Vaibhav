// Importing necessary dependencies and components
import styles from './style.module.css';
import arrowDown from '../../assets/arrowDown.png';
import Image from 'next/image';
import Line from '../line/index.js';
import { useState } from 'react';

// Functional component named index (consider renaming it to Index to follow convention)
function index(props) {
  // State variable to manage which drop-down is selected
  const [selectDropDown, setSelectDropDown] = useState("");

  // Function to handle the selection of drop-down
  const handleSelect = (type) => {
    // Toggle selection state for the drop-down
    if (selectDropDown === type)
      setSelectDropDown("");
    else
      setSelectDropDown(type);
  }

  // Function to render each filter element with drop-down
  const filterElement = (type) => {
    return (
      <div className={styles['element-container']}>
        <div onClick={() => handleSelect(type)} className={styles['element-sub-container']}>
          <div>
            <p>{type}</p>
            <p>All</p>
          </div>
          <Image alt="down-arrow" className={styles['arrow']} src={arrowDown}/>
        </div>
        {/* Conditional rendering for drop-down based on selection */}
        {selectDropDown === type && (
          <>
            <p className={styles['text1']}>Unselect All</p>
            <div className={styles['dropDown']}>
              <label><input type="checkbox"/> Men</label>
              <label><input type="checkbox"/> Women</label>
              <label><input type="checkbox"/> Baby & Kids</label>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div>
      {/* Conditional rendering based on the showFilter prop */}
      {props.showFilter ? (
        <>
          {/* Checkboxes and lines */}
          <div className={styles['checkbox-element']}> 
            <input type="checkbox" /><p>CUSTOMIZABLE</p>
          </div>
          <Line/>
          {/* Render filter elements with drop-downs */}
          {filterElement("OCCASION")}
          <Line/>
          {filterElement("IDEAL FOR")}
          <Line/>
          {filterElement("WORK")}
          <Line/>
          {filterElement("FABRIC")}
          <Line/>
          {filterElement("SEGMENT")}
          <Line/>
          {filterElement("SUITABLE FOR")}
          <Line/>
          {filterElement("RAW MATERIALS")}
          <Line/>
          {filterElement("PATTERN")}
          <Line/>
        </>
      ) : null}
    </div>
  )
}

// Exporting the index component as the default export
export default index;
