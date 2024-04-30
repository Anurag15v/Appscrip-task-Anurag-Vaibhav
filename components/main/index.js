import styles from './style.module.css'; // Import CSS module styles

function index() {
    return (
        <div className={styles['container']}>
            {/* Main text */}
            <h1 className={styles['main-text']} >DISCOVER OUR PRODUCTS</h1>
            {/* Subtext */}
            <h2 className={styles['main-sub-text']}>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</h2>      
        </div>
    );
}

export default index;
