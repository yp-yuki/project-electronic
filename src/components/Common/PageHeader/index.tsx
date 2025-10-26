import { useNavigate } from 'react-router-dom'
import {LeftOutlined} from '@ant-design/icons'
import styles from './index.module.scss'
const Back = ()=>{
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }
    return <div className={styles.top}>
            <div className={styles.back} onClick={back}>
                <LeftOutlined />
                <span>返回</span>
            </div>
        </div>
}
export default Back