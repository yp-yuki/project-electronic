import type { Product, SpecState, Value } from '@/types/apiType'
import styles from './index.module.less'
import Title from 'antd/es/typography/Title'
import { useEffect, useState } from 'react'

interface Prop {
    item: Product
}
interface Select {
    specname: string
    value: string
}
const Info = (props: Prop) => {
    const [specs, setSpecs] = useState<SpecState[]>([])
    const [currentStock, setCurrentStock] = useState<number>(0)
    const [currentPrice, setCurrentPrice] = useState<number>(0)
    const [selectedArray, setSelectedArray] = useState<Select[]>([])
    const { item } = props

    const getAllValidSpecs = () => {
        const skuSet = new Set<string>()
        item.skuList.forEach(sku => {
            sku.specs.forEach(key => {
                skuSet.add(key)
            })
        })
        return skuSet
    }
    const validSpecs = getAllValidSpecs()
    useEffect(() => {
        //初始化
        const initialSpecs = item.specifications.map(val => {
            return {
                ...val,
                values: val.values.map(key => ({
                    name: key,
                    valid: validSpecs.has(key),
                    selected: false
                }))
            }
        })
        setSpecs(initialSpecs)
    }, [item.specifications])
    //选中规格和其他规格状态联动
    const getSelectedValidSpecs = () => {
        const selectedSku = item.skuList.filter(sku => {
            return selectedArray.every(select => sku.specs.includes(select.value))
        })
        console.log('selected')
        console.log(JSON.stringify(selectedArray))
        console.log('sku')
        console.log(JSON.stringify(selectedSku))
        const updateSpecs = specs.map(spec => {
            if(selectedArray.some(sel=>sel.specname === spec.name)){
                return {
                    ...spec,
                    values: spec.values.map(val=>({
                        ...val,
                        selected: selectedArray.some(key=>{
                            return key.value === val.name
                        })
                    }))
                }
            }
            if (!selectedArray.some(sel => sel.specname === spec.name)) {
                return {
                    ...spec,
                    values: spec.values.map(val => ({
                        ...val,
                        valid: selectedSku.some(sku => sku.specs.includes(val.name))
                    }))
                }
            }
            return spec
        })
        console.log(updateSpecs)
        return updateSpecs
    }
    useEffect(()=>{
        if(selectedArray.length > 0){
            const updateSpecs = getSelectedValidSpecs()
            setSpecs(updateSpecs)   
        }
    },[selectedArray])
    const valueClick = (specName: string, value: Value) => {
        setSelectedArray(prev=>{
            const filterd = prev.filter(key=>(key.specname !== specName))
            return [...filterd,{ specname: specName, value: value.name }]
        })
        //匹配对应的sku
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
            </div>
            <div className={styles.tip}>七天无理由退换｜免运费｜假一赔十</div>
            <div className={styles.specific}>
                <div>规格</div>
                <div className={styles['specific-wrap']}>
                    {
                        specs.map((el) => {
                            return <div className={styles['specific-specs']} key={el.name + Date.now()}>
                                <div className={`${styles['specific-name']} }`}>{el.name}：</div>
                                <div className={styles['specific-values']}>
                                    {
                                        el.values.map(val => {
                                            return val.valid ? <div
                                                key={val.name + Date.now()}
                                                className={`${styles['specific-value']} ${val.selected ? styles['specific-active'] : ''}`}
                                                onClick={() => valueClick(el.name, val)}>
                                                {val.name}
                                            </div>
                                                : <div
                                                    key={val.name + Date.now()}
                                                    className={`${styles['specific-value']} ${styles['specific-disabled']}`}
                                                >
                                                    {val.name}
                                                </div>
                                        })
                                    }
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className={styles.option}>
                <div className={styles['option-stock']}>库存: {currentStock}</div>
                <div className={styles['option-btn']}>加入购物车</div>
            </div>
        </div>
    </div>
}
export default Info