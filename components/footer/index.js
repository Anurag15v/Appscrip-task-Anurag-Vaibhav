// Importing necessary dependencies and assets
import styles from './style.module.css'; // Import CSS module styles
import Image from 'next/image';
import insta from '../../assets/insta.png';
import linkedin from '../../assets/linkedin.png';
import gPay from '../../assets/gPay.png';
import oPay from '../../assets/oPay.png';
import payPal from '../../assets/payPal.png';
import applePay from '../../assets/applePay.png';
import masterCard from '../../assets/mastercard.png';
import amex from '../../assets/amex.png';
import usa from '../../assets/usa.png';
import useWindowWidth from '../../hooks/useWindowWidth.js';
import arrowDownWhite from '../../assets/arrowDownWhite.png';
import { useState } from 'react';

// Functional component named index (consider renaming it to Index to follow convention)
function index() {
  // State variables to manage dropdown visibility
  const [dropDown, setDropDown] = useState({ follow: false, muse: false, links: false });
  const windowWidth = useWindowWidth();

  // Function to handle dropdown visibility
  const handleDropDown = (dropDownType) => {
    if (dropDownType === "follow")
      setDropDown((prev) => ({ ...prev, follow: !dropDown[dropDownType] }));
    else if (dropDownType === "muse")
      setDropDown((prev) => ({ ...prev, muse: !dropDown[dropDownType] }));
    else
      setDropDown((prev) => ({ ...prev, links: !dropDown[dropDownType] }));
  }

  return (
    <div className={styles['footer-container']}>
      {/* Conditional rendering based on window width */}
      {windowWidth > 1020 ? (
        // Desktop view
        <div className={styles['footer-sub-container']}>
          <div className={styles['footer1']}>
            {/* Newsletter subscription */}
            <div>
              <p className={styles['bold-text']} >BE THE FIRST TO KNOW</p>
              <p className={styles['text1']}> Sign up for updates from mettā muse.</p>
              <input className={styles['input-box']} placeholder="Enter your e-mail..." />
              <button>SUBSCRIBE</button>
            </div>
            {/* Contact information */}
            <div className={styles['footer-12']}>
              <p className={styles['bold-text']} >CONTACT US</p>
              <p className={styles['text1']}>+44 221 133 5360</p>
              <p className={styles['text1']}>customercare@mettamuse.com</p>
              <p className={styles['bold-text']}>Currency</p>
              <div className={styles['currency-container']}>
                <Image alt="usd" className={styles['footer-image3']} src={usa} /><p className={styles['text1']}>USD</p>
              </div>
              <p className={styles['text2']}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
          </div>
          <hr />
          <div className={styles['footer2']}>
            {/* Links to different sections */}
            <div className={styles['footer-21']}>
              <div className={styles['footer-212']}>
                <p className={styles['bold-text']} >mettā muse</p>
                <p className={styles['text3']}>About Us</p>
                <p className={styles['text3']}>Stories</p>
                <p className={styles['text3']}>Artisans</p>
                <p className={styles['text3']}>Boutiques</p>
                <p className={styles['text3']}>Contact Us</p>
                <p className={styles['text3']}>EU Compliances Docs</p>
              </div>
              <div>
                <p className={styles['bold-text']} >QUICK LINKS</p>
                <p className={styles['text3']}>Orders & Shipping</p>
                <p className={styles['text3']}>Join/Login as a Seller</p>
                <p className={styles['text3']}>Payment & Pricing</p>
                <p className={styles['text3']}>Return & Refunds</p>
                <p className={styles['text3']}>FAQs</p>
                <p className={styles['text3']}>Privacy Policy</p>
                <p className={styles['text3']}>Terms & Conditions</p>
              </div>
            </div>
            {/* Social media icons and payment methods */}
            <div className={styles['footer-22']}>
              <p className={styles['bold-text']}>FOLLOW US</p>
              <div className={styles['follow-container']}>
                <Image alt="instagram" className={styles['footer-image1']} src={insta} />
                <Image alt="linkedin" className={styles['footer-image1']} src={linkedin} />
              </div>
              <p className={styles['bold-text']}>mettā muse ACCEPTS</p>
              <div className={styles['payment-container']}>
                <Image alt="gpay" className={styles['footer-image2']} src={gPay} />
                <Image alt="mastercard" className={styles['footer-image2']} src={masterCard} />
                <Image alt="paypal" className={styles['footer-image2']} src={payPal} />
                <Image alt="amex" className={styles['footer-image2']} src={amex} />
                <Image alt="applepay" className={styles['footer-image2']} src={applePay} />
                <Image alt="opay" className={styles['footer-image2']} src={oPay} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Mobile view
        <div className={styles['footer-sub-container']}>
          {/* Newsletter subscription */}
          <div className={styles['footer-mobile1']}>
            <div>
              <p className={styles['bold-text']} >BE THE FIRST TO KNOW</p>
              <p className={styles['text1']}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</p>
              <input className={styles['input-box']} placeholder="Enter your e-mail..." />
              <button>SUBSCRIBE</button>
            </div>
          </div>
          <hr />
          {/* Contact information */}
          <div className={styles['footer-mobile2']}>
            <div>
              <p className={styles['bold-text']} >CALL US</p>
              <p className={styles['text1']}> +44 221 133 5360 &nbsp; &nbsp; customercare@mettamuse.com</p>
            </div>
          </div>
          <hr />
          {/* Currency selection */}
          <div className={styles['footer-mobile3']}>
            <div>
              <p className={styles['bold-text']} >CURRENCY</p>
              <div className={styles['currency-container']}>
                <Image alt="usd" className={styles['footer-image3']} src={usa} /><p className={styles['text1']}>USD</p>
              </div>
            </div>
          </div>
          <hr />
          {/* Dropdowns for muse and links */}
          <div className={styles['footer-mobile4']}>
            <div onClick={() => handleDropDown("muse")} className={styles['footer-mobile-sub-container']}>
              <p className={styles['bold-text']} >mettā muse</p>
              <Image alt="down-arrow" className={styles['arrow-down']} src={arrowDownWhite} />
            </div>
            {dropDown["muse"] && (
              <div className={styles['footer-212']}>
                <p className={styles['text3']}>About Us</p>
                <p className={styles['text3']}>Stories</p>
                <p className={styles['text3']}>Artisans</p>
                <p className={styles['text3']}>Boutiques</p>
                <p className={styles['text3']}>Contact Us</p>
                <p className={styles['text3']}>EU Compliances Docs</p>
              </div>
            )}
          </div>
          <hr />
          <div className={styles['footer-mobile5']}>
            <div onClick={() => handleDropDown("links")} className={styles['footer-mobile-sub-container']}>
              <p className={styles['bold-text']} >QUICK LINKS</p>
              <Image alt="down-arrow" className={styles['arrow-down']} src={arrowDownWhite} />
            </div>
            {dropDown["links"] && (
              <div>
                <p className={styles['text3']}>Orders & Shipping</p>
                <p className={styles['text3']}>Join/Login as a Seller</p>
                <p className={styles['text3']}>Payment & Pricing</p>
                <p className={styles['text3']}>Return & Refunds</p>
                <p className={styles['text3']}>FAQs</p>
                <p className={styles['text3']}>Privacy Policy</p>
                <p className={styles['text3']}>Terms & Conditions</p>
              </div>
            )}
          </div>
          <hr />
          {/* Dropdown for follow */}
          <div className={styles['footer-mobile6']}>
            <div onClick={() => handleDropDown("follow")} className={styles['footer-mobile-sub-container']}>
              <p className={styles['bold-text']} >FOLLOW US</p>
              <Image alt="down-arrow" className={styles['arrow-down']} src={arrowDownWhite} />
            </div>
            {dropDown["follow"] && (
              <div className={styles['follow-container']}>
                <Image alt="instagram" className={styles['footer-image1']} src={insta} />
                <Image alt="linkedin" className={styles['footer-image1']} src={linkedin} />
              </div>
            )}
          </div>
          <hr />
          {/* Payment methods */}
          <div className={styles['footer-mobile7']}>
            <div className={styles['footer-mobile-sub-container']}>
              <p className={styles['text3']} >mettā muse ACCEPTS</p>
              {windowWidth >= 520 && (
                <div className={styles['payment-container']}>
                  <Image alt="gpay" className={styles['footer-image2']} src={gPay} />
                  <Image alt="mastercard" className={styles['footer-image2']} src={masterCard} />
                  <Image alt="paypal" className={styles['footer-image2']} src={payPal} />
                  <Image alt="amex" className={styles['footer-image2']} src={amex} />
                  <Image alt="applepay" className={styles['footer-image2']} src={applePay} />
                  <Image alt="opay" className={styles['footer-image2']} src={oPay} />
                </div>
              )}
            </div>
            {windowWidth < 520 && (
              <div className={styles['payment-container']}>
                <Image alt="gpay" className={styles['footer-image2']} src={gPay} />
                <Image alt="mastercard" className={styles['footer-image2']} src={masterCard} />
                <Image alt="paypal" className={styles['footer-image2']} src={payPal} />
                <Image alt="amex" className={styles['footer-image2']} src={amex} />
                <Image alt="applepay" className={styles['footer-image2']} src={applePay} />
                <Image alt="opay" className={styles['footer-image2']} src={oPay} />
              </div>
            )}
          </div>
        </div>
      )}
      <p className={styles['copyright']}>Copyright © 2023 mettamuse. All rights reserved.</p>
    </div>
  )
}

export default index;
