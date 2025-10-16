import { useNavigate } from 'react-router-dom'
import { ShoppingCartOutlined } from '@ant-design/icons'
import styles from './index.module.less'
import AppSearch from './Search'

const AppHeader = () => {
    const navigate = useNavigate();
    const toHome = () => {
        navigate('/home')
    }
    const toShopcar = () => {
        navigate('/mall/cart')
    }
    return <div className={styles.header}>
        <div className={styles.logo} onClick={toHome}>网上商城</div>
        <div className={styles['header-right']}>
            <AppSearch />
            <ShoppingCartOutlined className={styles.cart} onClick={toShopcar} />
        </div>
    </div>
}

export default AppHeader