import { Button, Card, Col, Row, Typography } from 'antd'
import styles from './index.module.less'
import type { Product } from '@/api/types'
import { addItem } from '@/store/slices/cartSlice'
import { useAppDispatch } from '@/hooks/hooks'

const { Title } = Typography
interface Props {
    item: Product
}
const ProductItem = ({ item }: Props) => {
    const dispatch = useAppDispatch()
    const onAddCart = (item: Product) => dispatch(addItem(item))
    return <Card
        key={item.id}
        className={styles.cardBody}
        hoverable
        cover={
            <img
                style={{ height: '210px' }}
                draggable={false}
                alt={item.name}
                src={item.image}
            />
        }
    >
        <Title title={item.name} ellipsis={{ rows: 1 }} level={5}>{item.name}</Title>
        <Row justify='space-between' align='middle'>
            <Col>¥99</Col>
            <Col>
                <Button type='link' onClick={() => onAddCart(item)}>购买</Button>
            </Col>
        </Row>
    </Card>
}
export default ProductItem