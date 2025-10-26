import type { Product } from '@/types/apiType'
import styles from './index.module.scss'
import { useEffect, useState } from 'react'
import { RedoOutlined } from '@ant-design/icons'
import { productApi } from '@/api'
import ProductItem from '@/features/Products/ProductItem'
interface Prop {
    id: string
}
const Recommend = (props: Prop) => {
    const [products, setProducts] = useState<Product[]>([])
    const getProducts = async () => {
        const response = await productApi.getProducts()
        setProducts(response.data)
    }
    useEffect(() => {
        getProducts()
    }, [])
    return <div id={props.id}>
        <div className={styles.top}>看了又看</div>
        <div className={styles['container-refresh']}>
            <div className={styles['container-btn']}>
                <div>换一批</div>
                <RedoOutlined />
            </div>
        </div>
        <div className={styles.container}>
            {
                products.map(item => {
                    return <ProductItem key={item.id} item={item} />
                })
            }
        </div>
    </div>
}
export default Recommend