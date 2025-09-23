import { Menu, type MenuProps } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './index.module.less'

type MenuItem = Required<MenuProps>['items'][number]
const AppNav = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const Items: MenuItem[] = [
        {
            key: '/mall/shop',
            label: '商城'
        },
        {
            key: '/mall/cart',
            label: '购物车'
        },
        {
            key: 'a',
            label: '帮助'
        }
    ]
    const handleMenuClick: MenuProps['onClick'] = item => {
        navigate(item.key)
    }
    return <Menu mode="horizontal" className={styles.menu} selectedKeys={[location.pathname]} onClick={handleMenuClick} items={Items} />
}
export default AppNav