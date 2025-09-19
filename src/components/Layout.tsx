import React from "react"

interface Props {
    children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
    return (<div>
        <header>导航栏</header>
        <main>{children}</main>
        <footer>页脚</footer>
    </div>
    )
}
export default Layout