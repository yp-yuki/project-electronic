import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from '@/components/Home'
import ShoppingMall from './components/ShoppingMall'
import Shop from '@/components/Shop'
import AppLayout from '@/components/Layout'
import Detail from '@/components/Detail'
import AffixLayout from './components/AffixLayout'

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home />} />
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
      {/* <Route path='*' element={<Navigate to='/'/>}/> */}
    </Routes>
  </BrowserRouter>
}
export default App