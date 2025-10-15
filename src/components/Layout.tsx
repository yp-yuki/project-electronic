import React from 'react'
import AppHeader from './Common/Header'
import AppFooter from './Common/Footer'
interface Props {
    children: React.ReactNode
}
const AppLayout = ({ children }: Props) => {
    return <div>
        <AppHeader />
        <main style={{paddingTop: '70px'}}>{children}</main>
        <AppFooter />
    </div>
}
export default AppLayout