import PageHeader from '../Common/PageHeader'
import ProductItem from './ProductItem'
import styles from './index.module.less'
import { useState, useEffect, useCallback } from 'react'
import { type Product } from '@/types/apiType'
import { productApi } from '@/api/mock/products'
import { message, Spin } from 'antd'

const Products = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [hasMore, setHasMore] = useState<boolean>(true)
    const [page, setPage] = useState<number>(1)
    const getProducts = useCallback(async (pageNum: number, isLoadMore: boolean) => {
        if (loading) return
        setLoading(true)
        try {
            const limit = isLoadMore ? 6 : 12
            const loadMoreLimit = isLoadMore ? products.length : 0
            await new Promise(res => setTimeout(res, 500)) //模拟延迟
            const response = await productApi.getProducts({ page: pageNum, limit, loadMoreLimit })
            setHasMore(!response.pagination?.haveNext ? false : true)
            if (isLoadMore) {
                setProducts(prev => [...prev, ...response.data])
            } else {
                setProducts(response.data)
            }
            setPage(pageNum)
        } catch (error) {
            message.error('获取商品列表失败')
            console.error(error)
        } finally {
            setLoading(false)
        }
    }, [loading, products])
    useEffect(() => {
        const handleScroll = () => {
            if (loading || !hasMore) return
            const { scrollHeight, scrollTop, clientHeight } = document.documentElement
            if (scrollHeight - scrollTop <= clientHeight + 100) {
                getProducts(page + 1, true)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [page, getProducts, loading, hasMore])
    useEffect(() => {
        getProducts(page, false)
    }, [])
    return <div>
        <PageHeader icon="/src/assets/img/heart.png" title="精选好物" />
        <div className={styles.container}>
            {
                products.map(item => {
                    return <ProductItem key={item.id} item={item} />
                })
            }
        </div>
        {
            loading && <div className={styles.load}>
                <Spin />
            </div>
        }
        {
            !hasMore && <div className={styles.more}>
                已经到底了～
            </div>
        }
    </div>
}
export default Products