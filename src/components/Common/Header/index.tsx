import styles from './index.module.less'
import AppNav from './Navigation'
import AppSearch from './Search'

const AppHeader = () => {

    return <div className={styles.header}>
        <div className={styles.logo}>网上商城</div>
        <AppNav />
        <AppSearch />
    </div>
}

export default AppHeader