import { Carousel } from 'antd'
import styles from './index.module.less'

const images = import.meta.glob('@/assets/img/*.gif', { eager: true })
const carouselImages = Object.values(images).map((item: any, index) => ({
    src: item.default,
    id: index + Date.now()
}))

const AppCarousel = () => (
    <div className={styles.container}>
    <Carousel style={{height:'400px'}} autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
        {
            carouselImages.map(img => (
                <div className={styles.img} key={img.id}>
                    <img src={img.src} alt="" />
                </div>
            ))
        }
    </Carousel>
    </div>
)

export default AppCarousel