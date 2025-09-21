import { Button, Card, Col, Row, Typography } from 'antd'
import styles from './index.module.less'
import type { Product } from '@/api/types'

const { Title } = Typography
interface Props {
    item: Product
}
const ProductItem = ({ item }: Props) => {
    return <Card
        key={item.id}
        className={styles.cardBody}
        hoverable
        style={{ width: 280, height: 300 }}
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
                <Button type='link'>购买</Button>
            </Col>
        </Row>
    </Card>
}
export default ProductItem