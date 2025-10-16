interface Prop {
    id: string
}
const ProductInfo = (props: Prop) => {
    return <div id={props.id} style={{height: '80vh'}}>商品信息</div>
}
export default ProductInfo