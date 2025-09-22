import { Drawer } from "antd"
import ShopCar from "../ShopCar"
import { useState } from "react"

const AppDrawer = () => {
    const [open, setOpen] = useState(false)
    const onClose = () => {
        setOpen(false)
    }

    return <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <ShopCar layout="drawer" />
    </Drawer>
}
export default AppDrawer