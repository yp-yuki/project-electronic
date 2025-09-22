import { Carousel } from 'antd'
import styles from './index.module.less'

const images = import.meta.glob('@/assets/img/*.gif', { eager: true })
const carouselImages = Object.values(images).map((item: any, index) => ({
    src: item.default,
    id: index + Date.now()
}))

const AppCarousel = () => (
    <div className={styles.container}>
        <Carousel className={styles.carouselCard} autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
            {
                carouselImages.map(img => (
                    <div key={img.id} className={styles.img}>
                        <img src={img.src} alt="" />
                    </div>
                ))
            }
        </Carousel>
    </div>
)

export default AppCarousel