import { useAppDispatch, useAppSelector } from '@/hooks'
import styles from './index.module.scss'
import NumberTip from './NumberTip'
import type { MouseEventHandler } from 'react'
import { handleOpen } from '@/store/slices/cartSlice'
import { getImageUrl } from '@/utils/utils'

interface imageType {
    src: string,
    title: string,
    num: boolean,
    count?: number | undefined,
    click?: MouseEventHandler<HTMLDivElement>
}
const AppAffix = () => {
    const cartCount = useAppSelector(state => state.cartSlice.totalCount)
    const dispatch = useAppDispatch()
    const images: imageType[] = [{
        src: getImageUrl('message.png','affix'),
        title: '消息',
        num: true
    },
    {
        src: getImageUrl('shopcart.png','affix'),
        title: '购物车',
        num: true,
        count: cartCount,
        click: () => {
            dispatch(handleOpen(true))
        }
    },
    {
        src: getImageUrl('contact.png','affix'),
        title: '联系我们',
        num: false
    },
    {
        src: getImageUrl('feedback.png','affix'),
        title: '反馈',
        num: false
    }]
    const iconImages = images.map((item, index) => ({
        id: index + Date.now(),
        ...item
    }))
    return <div className={styles.affix}>
        {
            iconImages.map(item => {
                return <div className={styles.icon} onClick={item.click} key={item.id} title={item.title} style={{ backgroundImage: `url(${item.src})` }}>
                    {item.num && <NumberTip count={item.count} />}
                </div>
            })
        }
    </div>
}
export default AppAffix