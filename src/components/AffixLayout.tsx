import React from 'react'
import AppAffix from './Common/Affix'
import AppDrawer from './Common/Drawer'
interface Props {
    children: React.ReactNode
}
const AffixLayout = ({ children }: Props) => {
    return <div>
        <main>{children}</main>
        <AppAffix />
        <AppDrawer />
    </div>
}
export default AffixLayout