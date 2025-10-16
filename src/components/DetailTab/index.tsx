import { Anchor } from "antd"
import styles from './index.module.less'
import UserComment from "../UserComment"
import ProductInfo from "../ProductInfo"
import Recommend from "../Recommend"
import type React from "react"
const DetailTab = () => {
    const anchorClick = (e: React.MouseEvent) => {
    e.preventDefault()
}
return <div className={styles.tab}>
    <div className={styles['tab-title']}>
        <Anchor
            direction="horizontal"
            targetOffset={40}
            onClick={anchorClick}
            items={[
                {
                    key: 'part-1',
                    href: '#part-1',
                    title: '用户评价',
                },
                {
                    key: 'part-2',
                    href: '#part-2',
                    title: '商品信息',
                },
                {
                    key: 'part-3',
                    href: '#part-3',
                    title: '推荐',
                }
            ]}
        />
    </div>
    <div className={styles['tab-content']}>
        <UserComment id="part-1" />
        <ProductInfo id="part-2" />
        <Recommend id="part-3" />
    </div>
</div>
}
export default DetailTab