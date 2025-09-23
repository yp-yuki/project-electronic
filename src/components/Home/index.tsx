import { useNavigate } from 'react-router-dom'
import styles from './index.module.less'
const Home=()=>{
    const navigate = useNavigate()
    const toMall = ()=>{
        navigate('/mall')
    }
    return <div className={styles.container}>
        <nav>
            <div>首页</div>
            <div onClick={toMall}>进入商城</div>
        </nav>
        <div className={`${styles.bgs} ${styles.bg1}`}></div>
        <div className={`${styles.bgs} ${styles.bg2}`}></div>
        <div className={`${styles.bgs} ${styles.bg3}`}></div>
    </div>
}
export default Home