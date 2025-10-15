import { type Product, type Sku, type Value } from '@/types/apiType'
import styles from './index.module.less'
import Title from 'antd/es/typography/Title'
import { useEffect, useState } from 'react'
import { useAppDispatch } from '@/hooks/hooks'
import { addItem } from '@/store/slices/cartSlice'

interface Prop {
    item: Product
}
interface Select {
    specname: string
    value: string
}
interface SkuState extends Sku {
    selected: boolean
}
const Info = (props: Prop) => {
    const [sku, setSku] = useState<SkuState[]>([])
    const [currentStock, setCurrentStock] = useState<number>(0)
    const [currentPrice, setCurrentPrice] = useState<number>(0)
    const dispatch = useAppDispatch()
    const { item } = props
    const [currentProduct, setCurrentProduct] = useState<Product>(item)
    console.log(item)
    useEffect(() => {
        //初始化
        const initialSku = item.skuList.map((sku,index) => ({
            ...sku,
            selected: index === 0
        }))
        setCurrentPrice(item.price)
        setCurrentStock(item.stock)
        setCurrentProduct({
            ...item,
            selectedSku: item.selectedSku && item.selectedSku !== '' ? item.selectedSku : item.skuList[0].specs.join('-')
        })
        setSku(initialSku)
    }, [item.specifications, item.skuList])
    //选中规格和其他规格状态联动
    const getSelectedValidSpecs = () => {
        const selectedSku = item.skuList.filter(sku => {
            
        })
    }

    const valueClick = (skuId: string) => {
        const updateSku = sku.map(val => {
            return {
                ...val,
                selected: val.selected ? !val.selected : val.id === skuId
            }
        })
        setSku(updateSku)
        const filterSku = updateSku.find(val => val.id === skuId)
        setCurrentPrice(filterSku?.price || item.price)
        setCurrentStock(filterSku?.stock || item.stock)
        setCurrentProduct({
            ...item,
            selectedSku: filterSku?.specs.join('-')
        })
        //匹配对应的sku
    }
    const addCart = () => {
        dispatch(addItem(currentProduct))
    }
    return <div className={styles.info}>
        <div className={styles.leftWrap}>
            <img src={item.image} alt="" />
        </div>
        <div className={styles.rightWrap}>
            <Title level={5} title={item.name} ellipsis={{ rows: 2 }}>{item.name}</Title>
            <div className={styles.saleWrap}>
                <div className={styles.price}>¥{currentPrice}</div>
                <div className={styles.sale}>销量: {item.sales}</div>
                <div className={styles.stock}>库存: {currentStock}</div>
            </div>
            <div className={styles.tip}>七天无理由退换｜免运费｜假一赔十</div>
            <div className={styles.specific}>
                <div>规格</div>
                <div className={styles['specific-wrap']}>
                    {
                        sku.map(sku => {
                            return <div className={styles['specific-specs']} key={sku.id}>
                                <div
                                    className={`${styles['specific-value']} ${sku.selected ? styles['specific-active'] : ''}`}
                                    onClick={() => valueClick(sku.id)}>
                                    {sku.specs.join('-')}
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className={styles.option}>
                <div className={styles['option-btn']} onClick={addCart}>加入购物车</div>
            </div>
        </div>
    </div>
}
export default Info