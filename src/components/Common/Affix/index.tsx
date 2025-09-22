import { useAppSelector } from '@/hooks/hooks'
import styles from './index.module.less'
import NumberTip from './NumberTip'
import type { MouseEventHandler } from 'react'

interface imageType{
    src: string,
    title: string,
    num: boolean,
    count?: number | undefined,
    click?: MouseEventHandler<HTMLDivElement>
}
const AppAffix = () => {
    const cartCount = useAppSelector(state=>state.cartSlice.totalCount)
    const images:imageType[] = [{
            src: 'src/assets/img/affix/message.png',
            title: '消息',
            num: true
        },
        {
            src: 'src/assets/img/affix/shopcart.png',
            title: '购物车',
            num: true,
            count: cartCount,
            click: ()=>{
                console.log('click')
            }
        },
        {
            src: 'src/assets/img/affix/contact.png',
            title: '联系我们',
            num: false
        },
        {
            src: 'src/assets/img/affix/feedback.png',
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