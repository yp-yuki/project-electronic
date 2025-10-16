import styles from './index.module.less'
interface Prop {
    id: string
}
const ProductInfo = (props: Prop) => {
    return <div id={props.id} className={styles.productInfo}>
        <div className={styles.top}>商品信息</div>
        <ul className={styles.content}>
            <li className={styles['content-item']}>
                <div className={styles['content-name']}>品牌</div>
                <div className={styles['content-value']}>三星</div>
            </li>
            <li className={styles['content-item']}>
                <div className={styles['content-name']}>型号</div>
                <div className={styles['content-value']}>s20utral</div>
            </li>
            <li className={styles['content-item']}>
                <div className={styles['content-name']}>分类</div>
                <div className={styles['content-value']}>2g白色；4g白色；2g黑色；4g黑色；8g白色；8g黑色</div>
            </li>
        </ul>
        <div className={styles.image}>
                <img src="/src/assets/img/pro/10001.jpg" alt="" />
                <img src="/src/assets/img/pro/priceDesc.png" alt="" />
        </div>
    </div>
}
export default ProductInfo