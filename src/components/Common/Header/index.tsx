import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './index.module.less'

type MenuItem = Required<MenuProps>['items'][number]
const AppHeader = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const Items: MenuItem[] = [
        {
            key: '/',
            label: '首页'
        },
        {
            key: '/shop',
            label: '购物车'
        },
        {
            key: 'a',
            label: '关于我们'
        }
    ]
    const handleMenuClick: MenuProps['onClick'] = item => {
        console.log(item)
        navigate(item.key)
    }
    return <div className={styles.header}>
        <div className={styles.logo}>网上商城</div>
        <Menu mode="horizontal" className={styles.menu} selectedKeys={[location.pathname]} onClick={handleMenuClick} items={Items} />
    </div>
}

export default AppHeader