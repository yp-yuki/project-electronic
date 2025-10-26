import { Carousel } from 'antd'
import styles from './index.module.scss'

interface ImportMetaGlob{
    [key: string]: {
        default: string
    }
}
interface CarouselImages{
    src: string
    id: number
}
const images = import.meta.glob('@/assets/img/carousel/*.gif', { eager: true }) as ImportMetaGlob
const carouselImages: CarouselImages[] = Object.values(images).map((item, index) => ({
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