import {UserOutlined} from '@ant-design/icons'
import styles from './index.module.scss'
interface Comment {
    id: number
    goodsId: number
    username: string
    comment: string
    time: string
}
interface Prop {
    data: Comment[]
}
const CommentList = (props: Prop) => {
    const { data } = props
    return <ul className={styles.comment}>
        {
            data.map(val => {
                return <li className={styles['comment-item']} key={val.id}>
                    <div className={styles['comment-item-userImg']}><UserOutlined /></div>
                    <div className={styles['comment-item-userComment']}>
                        <div className={styles['comment-item-username']}>{val.username}</div>
                        <div className={styles['comment-item-content']}>{val.comment}</div>
                        <div className={styles['comment-item-info']}>{val.time}</div>
                    </div>
                </li>
            })
        }
    </ul>
}
export default CommentList