import styles from './index.module.scss'
import ShopCar from '@/features/ShopCar'

const Shop = () => {
    return <div className={styles.container}>
        <ShopCar layout='page' />
    </div>
}
export default Shop