import styles from './index.module.less'
import ShopCar from '../ShopCar'

const Shop = () => {
    return <div className={styles.container}>
        <ShopCar layout='page' />
    </div>
}
export default Shop