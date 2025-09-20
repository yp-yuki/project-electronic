import { updateUser } from '@/store/slices'
import  AppCarousel from '@components/Carousel'
import Products from '../Products'
import { useAppSelector } from '@/store/hooks'

const Home = ()=>{
    const state = useAppSelector(state=>state)
    console.log(state)
    console.log(updateUser({name:'jo'}))
    return <div>
        <AppCarousel/>
        <Products/>
    </div>
}
export default Home