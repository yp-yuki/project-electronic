import PageHeader from '../Common/PageHeader'
import ProductItem from './ProductItem'
import styles from './index.module.less'
import { useState, useEffect } from 'react'
import { type Product } from '@/api/types'
import { productApi } from '@/api/productApi'
import { message } from 'antd'

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const getProducts = async () => {
        try {
            const response = await productApi.getProducts();
            setProducts(response.data)
        } catch (error) {
            message.error('获取商品列表失败')
        }
    }
    useEffect(() => {
        getProducts()
    }, [])
    return <div>
        <PageHeader icon="src/assets/img/heart.png" title="精选好物" />
        <div className={styles.container}>
            {
                products.map(item => {
                    return <ProductItem key={item.id} item={item} />
                })
            }
        </div>
    </div>
}
export default Products