import { Button, Card, Col, Row, Typography } from 'antd'
import styles from './index.module.less'
import type { Product } from '@/types/apiType'
import { addItem } from '@/store/slices/cartSlice'
import { useAppDispatch } from '@/hooks/hooks'
import { useNavigate } from 'react-router-dom'

const { Title } = Typography
interface Props {
    item: Product
}
const ProductItem = ({ item }: Props) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const onAddCart = (item: Product) => dispatch(addItem(item))
    const toDetail = (item: Product) => {
        navigate(`/mall/detail?id=${item.id}`, {
            state: {
                item
            }
        })

    }
    return <Card
        key={item.id}
        className={styles.cardBody}
        hoverable
        cover={
            <div
                style={{ height: '210px',background: `url(/src/assets/img/pro/${item.image}) center/cover no-repeat` }}
                draggable={false}
                title={item.description}
                onClick={() => toDetail(item)}
            />
        }
    >
        <Title title={item.name} ellipsis={{ rows: 1 }} level={5}>{item.name}</Title>
        <Row justify='space-between' align='middle'>
            <Col>¥{item.price}</Col>
            <Col>
                <Button type='link' onClick={() => onAddCart(item)}>购买</Button>
            </Col>
        </Row>
    </Card>
}
export default ProductItem