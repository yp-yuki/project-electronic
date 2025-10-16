interface Prop{
    id: string
}
const Recommend = (props: Prop)=>{
    return <div id={props.id} style={{height: '80vh'}}>
        推荐
    </div>
}
export default Recommend