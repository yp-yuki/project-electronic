import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@styles/global.less'
import App from './App.tsx'
import '@ant-design/v5-patch-for-react-19'
import 'antd/dist/reset.css'
import { Provider } from 'react-redux'
import { store } from './store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
