import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
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
        {/* <div className={styles.page1}>
            <div>page1</div>
            <div>page1描述描述</div>
        </div>
        <div className={styles.page2}>
            <div>page2</div>
            <div>page2描述描述</div>
        </div> */}
    </div>
}
export default Home