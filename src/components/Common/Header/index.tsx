import { useNavigate } from 'react-router-dom'
import styles from './index.module.less'
import AppSearch from './Search'

const AppHeader = () => {
    const navigate = useNavigate();
    const toHome = ()=>{
        navigate('/home')
    }
    const toShopcar = ()=>{
        navigate('/mall/cart')
    }
    return <div className={styles.header}>
        <div className={styles.logo} onClick={toHome}>网上商城</div>
        <AppSearch />
        <div className={styles.shopcar} onClick={toShopcar}>购物车</div>
        <div></div>
    </div>
}

export default AppHeader