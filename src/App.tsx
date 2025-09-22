import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@/components/Home'
import Shop from '@/components/Shop'
import AppLayout from '@/components/Layout'

const App = () => {
  return <BrowserRouter>
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </AppLayout>
  </BrowserRouter>
}
export default App