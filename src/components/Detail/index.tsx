import Back from '../Common/BackNav'
import AppFooter from '../Common/Footer'
import Info from '../DetailInfo'
import DetailTab from '../DetailTab'
import styles from './index.module.less'
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