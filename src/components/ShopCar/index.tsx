import styles from './index.module.less'
import { Empty, Typography, Select } from 'antd'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import type { Product, Sku } from '@/types/apiType'
import { addItem, decreaseItem } from '@/store/slices/cartSlice'
import { useEffect, useState } from 'react'
const { Title } = Typography
interface Props {
    layout: 'page' | 'drawer'
}
interface OptionType {
    value: string
    label: string
}
const ShopCar = (props: Props) => {
    const items = useAppSelector(state => state.cartSlice.items)
    const dispatch = useAppDispatch()
    const addCart = (item: Product) => dispatch(addItem(item))
    const removeCart = (item: number) => dispatch(decreaseItem(item))

    const setSkuList = (item: Product) => {
        const skuArray: OptionType[] = []
        item.skuList.forEach(val => {
            skuArray.push({
                value: val.specs.join('-'),
                label: val.specs.join('-')
            })
        })
        return skuArray
    }
    console.log(items)
    const onChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value: string) => {
        console.log('search:', value);
    };

    return <div className={`${styles.container} ${props.layout === 'drawer' ? 'drawer-container' : ''}`}>
        {
            items.length > 0 ? (<ul className={styles.list}>
                {
                    items.map(item => {
                        return <li className={styles['list-item']} key={item.id + Date.now()}>
                            <div className={styles['list-item-img']}>
                                <img src={item.image} alt="" />
                            </div>
                            <div className={`${styles['list-item-info']} ${props.layout === 'drawer' ? 'drawer-list-item-title' : ''}`}>
                                <Title title={item.name} className={styles['list-item-title']} ellipsis={{ rows: 1 }} level={5}>{item.name}</Title>
                                <div className={styles['list-item-desc']}>
                                    <Select
                                        showSearch
                                        placeholder="选择规格"
                                        optionFilterProp="label"
                                        onChange={onChange}
                                        onSearch={onSearch}
                                        defaultValue={item.selectedSku && item.selectedSku !== '' ? item.selectedSku : setSkuList(item)[0].value}
                                        options={setSkuList(item)}
                                    />
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
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="暂无数据" />
            </div>)
        }

    </div>
}
export default ShopCar