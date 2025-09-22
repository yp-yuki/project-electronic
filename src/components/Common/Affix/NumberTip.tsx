import styles from './index.module.less'

interface Props{
    count: number | undefined
}
const NumberTip = (props: Props)=>{
    return props.count ? (<div className={styles.num}>{props.count}</div>) : ''
}
export default NumberTip