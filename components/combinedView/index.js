// Importing CSS module styles
import styles from './style.module.css';
// Importing components
import Filter from '../filter/index.js';
import ProductList from '../productList/index.js';

// Functional component named index (consider renaming it to Index to follow convention)
function index(props) {
  return (
    <div className={styles['filter-product-container']}>
      {/* Conditional rendering based on the filter prop */}
      {props.filter ? (
        <div style={{ gridTemplateColumns: '1fr 5fr' }} className={styles['filter-product-sub-container']}>
          {/* Rendering Filter and ProductList components */}
          <Filter showFilter={props.filter} />
          <ProductList data={props.data} />
        </div>
      ) : (
        <div style={{ gridTemplateColumns: '6fr' }} className={styles['filter-product-sub-container']}>
          {/* Rendering only ProductList component */}
          <ProductList data={props.data} />
        </div>
      )}
    </div>
  )
}

// Exporting the index component as the default export
export default index;
