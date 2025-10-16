import { Button } from 'antd'
import CommentList from '../CommentList'
import styles from './index.module.less'
interface Prop{
    id: string
}
const UserComment = (props: Prop) => {
    const data = [
        {
        id: 1,
        goodsId: 2,
        username: '张三',
        comment: '非常好',
        time: '2024-09-28'
    },
        {
        id: 2,
        goodsId: 2,
        username: '张三',
        comment: '非常好',
        time: '2024-03-25'
    },
        {
        id: 3,
        goodsId: 2,
        username: '张三',
        comment: '非常好',
        time: '2025-02-18'
    },
        {
        id: 4,
        goodsId: 2,
        username: '张三',
        comment: '非常好',
        time: '2025-10-10'
    },
        {
        id: 5,
        goodsId: 2,
        username: '张三',
        comment: '非常好',
        time: '2025-09-22'
    }
]

    const allCommentClick = ()=>{
        console.log('全部评价')
    }
    return <div id={props.id} className={styles['tab-comment']}>
        <div className={styles.top}>
            <div className={styles['top-left']}>用户评价(100+)</div>
            <div className={styles['top-right']}>{`超92%买家赞不绝口 >`}</div>
        </div>
        <div className={styles.tag}>
            <div>超级舒适</div>
            <div>性价比高</div>
        </div>
        <CommentList data={data}/>
        <div className={styles.opt}>
            <Button onClick={allCommentClick}>查看全部评价</Button>
        </div>
    </div>
}
export default UserComment