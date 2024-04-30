import { useState } from 'react';
import styles from './style.module.css'; // Import CSS module styles
import Link from 'next/link';

// This component represents a side navigation menu.
// It receives a prop called closeMenu, which is a function to close the menu.
export default function index(props) {
    return (
        <div id="mySidenav" className={styles["sidenav"]}>
            {/* Close button */}
            <Link href="#" className={styles["closebtn"]} onClick={() => props.closeMenu()}>&times;</Link>
            {/* Menu items */}
            <Link href="#">SHOP</Link>
            <Link href="#">SKILLS</Link>
            <Link href="#">STORIES</Link>
            <Link href="#">ABOUT</Link>
            <Link href="#">CONTACT US</Link>
        </div>
    );
}
