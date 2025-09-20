import styles from './index.module.less'
interface Props {
    title?: string,
    describe?: string,
    icon?: string
}
const PageHeader = (prop: Props) => {
    return <div className={styles.container}>
        <img className={styles.icon} src={prop.icon} alt="" />
        <div>{prop.title}</div>
        <div>{prop.describe}</div>
    </div>
}
export default PageHeader