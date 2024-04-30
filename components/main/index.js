import styles from './style.module.css'; // Import CSS module styles

function index() {
    return (
        <div className={styles['container']}>
            {/* Main text */}
            <p className={styles['main-text']} >DISCOVER OUR PRODUCTS</p>
            {/* Subtext */}
            <p className={styles['main-sub-text']}>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>      
        </div>
    );
}

export default index;
