import styles from './index.module.less'
import NumberTip from './NumberTip'

const AppAffix = () => {
    const images = [{
            src: 'src/assets/img/affix/message.png',
            title: '消息',
            num: true
        },
        {
            src: 'src/assets/img/affix/shopcart.png',
            title: '购物车',
            num: true
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
                return <div className={styles.icon} key={item.id} title={item.title} style={{ backgroundImage: `url(${item.src})` }}>
                    {item.num && <NumberTip />}
                </div>
            })
        }
    </div>
}
export default AppAffix