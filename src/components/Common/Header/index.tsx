import { useNavigate } from 'react-router-dom'
import styles from './index.module.less'
import AppNav from './Navigation'
import AppSearch from './Search'

const AppHeader = () => {
    const navigate = useNavigate();
    const toHome = ()=>{
        navigate('/home')
    }
    return <div className={styles.header}>
        <div className={styles.logo} onClick={toHome}>网上商城</div>
        <AppNav />
        <AppSearch />
    </div>
}

export default AppHeader