import { Drawer } from 'antd'
import ShopCar from '@/features/ShopCar'
import { useAppSelector, useAppDispatch } from '@/hooks/hooks'
import { handleOpen } from '@/store/slices/cartSlice'

const AppDrawer = () => {
    const open = useAppSelector(state => state.cartSlice.isOpen)
    const dispatch = useAppDispatch()
    const onClose = () => {
        dispatch(handleOpen(false))
    }
    const drawerStyles = {
        header: {
            padding: '10px'
        },
        body: {
            padding: '15px 0 0 0',
            background: '#eff1f5'
        }
    }
    return <Drawer
        title="购物车"
        placement="right"
        onClose={onClose}
        open={open}
        styles={drawerStyles}
    >
        <ShopCar layout="drawer" />
    </Drawer>
}
export default AppDrawer