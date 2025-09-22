import React from 'react'
import AppHeader from './Common/Header'
import AppFooter from './Common/Footer'
import AppAffix from './Common/Affix'
import AppDrawer from './Common/Drawer'
interface Props {
    children: React.ReactNode
}
const AppLayout = ({ children }:Props) => {
    return <div>
        <AppHeader/>
        <main style={{paddingTop: '70px'}}>{children}</main>
        <AppAffix/>
        <AppDrawer/>
        <AppFooter/>
    </div>
}
export default AppLayout