import styles from './style.module.css';
import Product from '../../components/product/index.js';

function index(props) {
  return (
    <div className={styles['product-list-container']}>
      {props.data && props.data.map((product,index)=>
        <Product key={index} data={product}/>
      )}
    </div>
  )
}

export default index
