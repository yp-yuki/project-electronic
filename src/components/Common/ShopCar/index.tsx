import styles from './index.module.less'
import { Typography } from 'antd'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import type { Product } from '@/api/types'
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
    return <div className={styles.container}>
        {
            items.length > 0 ? (<ul className={styles.list}>
                {
                    items.map(item => {
                        return <li className={styles['list-item']} key={item.id}>
                            <div className={styles['list-item-img']}>
                                <img src={item.image} alt="" />
                            </div>
                            <div className={styles['list-item-info']}>
                                <Title title={item.name} ellipsis={{ rows: 1 }} level={5}>{item.name}</Title>
                                <div className={styles['list-item-desc']}>
                                    <div className={styles['list-item-wrap']}>
                                        <div>销量：{item.sales}</div>
                                        <div>描述：{item.description}</div>
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
                这里什么都没有哦～
            </div>)
        }

    </div>
}
export default ShopCar