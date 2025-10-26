import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'
import ShoppingMall from '@/pages/ShoppingMall'
import Shop from '@/pages/Shop'
import AppLayout from '@/components/Layout'
import Detail from '@/pages/Detail'
import AffixLayout from '@/components/AffixLayout'
import Login from '@/features/Auth'

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/mall/*' element={
        <AffixLayout>
          <Routes>
            <Route index element={<Navigate to='/mall/shop' />} />
            <Route path="/shop" element={
              <AppLayout>
                <ShoppingMall />
              </AppLayout>
            } />
            <Route path="/cart" element={
              <AppLayout>
                <Shop />
              </AppLayout>
            } />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </AffixLayout>
      } />
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
  </BrowserRouter>
}
export default App