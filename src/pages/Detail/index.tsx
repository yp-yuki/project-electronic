import Back from '@/components/Common/PageHeader'
import AppFooter from '@/components/Common/Footer'
import Info from './components/DetailInfo'
import DetailTab from './components/DetailTab'
import styles from './index.module.scss'
import { useLocation } from 'react-router-dom'
const Detail = () => {
    const location = useLocation()
    const { item } = location.state

    return <div className={styles.detail}>
        <Back />
        <div className={styles.container}>
            <Info item={item} />
            <DetailTab />
        </div>
        <AppFooter/>
    </div>
}
export default Detail