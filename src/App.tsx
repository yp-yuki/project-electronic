import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from '@/components/Home'
import ShoppingMall from './components/ShoppingMall'
import Shop from '@/components/Shop'
import AppLayout from '@/components/Layout'

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/mall/*' element={
        <AppLayout>
          <Routes>
            <Route index element={<Navigate to='/mall/shop'/>}/>
            <Route path="/shop" element={<ShoppingMall />} />
            <Route path="/cart" element={<Shop />} />
          </Routes>
        </AppLayout>
      } />
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
  </BrowserRouter>
}
export default App