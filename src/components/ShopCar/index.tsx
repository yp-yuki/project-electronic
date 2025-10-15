import styles from './index.module.less'
import { Empty, Typography } from 'antd'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import type { Product } from '@/types/apiType'
import { addItem, decreaseItem } from '@/store/slices/cartSlice'
const { Title } = Typography
interface Props {
    layout: 'page' | 'drawer'
}
const ShopCar = (props: Props) => {
    const items = useAppSelector(state => state.cartSlice.items)
    const dispatch = useAppDispatch()
    const addCart = (item: Product) => dispatch(addItem(item))
    const removeCart = (item: number) => dispatch(decreaseItem(item))
    return <div className={`${styles.container} ${props.layout === 'drawer' ? 'drawer-container' : ''}`}>
        {
            items.length > 0 ? (<ul className={styles.list}>
                {
                    items.map(item => {
                        return <li className={styles['list-item']} key={item.id}>
                            <div className={styles['list-item-img']}>
                                <img src={item.image} alt="" />
                            </div>
                            <div className={`${styles['list-item-info']} ${props.layout === 'drawer' ? 'drawer-list-item-title' : ''}`}>
                                <Title title={item.name} className={styles['list-item-title']} ellipsis={{ rows: 1 }} level={5}>{item.name}</Title>
                                <div className={styles['list-item-desc']}>
                                    <div className={styles['list-item-wrap']}>
                                        <div>销量：{item.sales}</div>
                                        <div className={props.layout === 'drawer' ? 'drawer-des' : ''}>描述：{item.description}</div>
                                    </div>

                                </div>
                                <div className={styles['list-item-option']}>
                                    <div className={styles['list-item-price']}>¥{item.price}</div>
                                    <div className={styles['list-item-opt']}>
                                        <div className={styles.btn} onClick={() => removeCart(item.id)}>-</div>
                                        <div className={styles['list-item-count']}>{item.count}</div>
                                        <div className={styles.btn} onClick={() => addCart(item)}>+</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    })
                }
            </ul>) : (<div className={styles.empty}>
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="暂无数据"/>
            </div>)
        }

    </div>
}
export default ShopCar