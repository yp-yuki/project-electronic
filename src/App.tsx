import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "@components/Home"
import Shop from "@components/Shop"
import Layout from "@components/Layout"

const App = () => {
  return <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Layout>
  </BrowserRouter>
}
export default App