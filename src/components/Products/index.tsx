import PageHeader from '../Common/PageHeader'
import ProductItem from '../ProductItem'
import styles from './index.module.less'
import { useState, useEffect, useCallback, useRef } from 'react'
import { type Product } from '@/types/apiType'
import { productApi } from '@/api/mock/products'
import { message, Spin } from 'antd'
import headIcon from '@assets/img/heart.png'

const Products = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [hasMore, setHasMore] = useState<boolean>(true)
    const [page, setPage] = useState<number>(1)
    const [errorCount, setErrorCount] = useState<number>(0)
    const requestSwitch = useRef(false)
    const getProducts = useCallback(async (pageNum: number, isLoadMore: boolean) => {
        if (loading || !hasMore || requestSwitch.current) return
        requestSwitch.current = true
        setLoading(true)
        try {
            const limit = isLoadMore ? 6 : 12
            const loadMoreLimit = isLoadMore ? products.length : 0
            const response = await productApi.getProducts({ page: pageNum, limit, loadMoreLimit })
            await new Promise(res => setTimeout(res, 500)) //模拟延迟
            setHasMore(!response.pagination?.haveNext ? false : true)
            if (isLoadMore) {
                setProducts(prev => [...prev, ...response.data])
            } else {
                setProducts(response.data)
            }
            setPage(pageNum)
            setErrorCount(0)
        } catch (error) {
            setErrorCount(prev => prev + 1)
            //第一次或每5次请求失败提示一次
            if(errorCount === 0 || errorCount % 5 === 0){
                message.error('获取商品列表失败')
            }
            console.error(error)
        } finally {
            setLoading(false)
            requestSwitch.current = false
        }
    }, [loading, products.length,errorCount])
    useEffect(() => {
        //无限加载
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
        //初始化展示
        getProducts(page, false)
    }, [])
    return <div>
        <PageHeader icon={headIcon} title="精选好物" />
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