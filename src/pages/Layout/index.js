import { Outlet } from "react-router-dom"
import { Button } from 'antd-mobile'
const Layout = () =>{
    return (    
        <div>
            <Outlet />
            我是layout
            <Button color="primary">测试全局</Button> 
            {/* 是Button,不是button,Button是antd里面的固定的组件 */}
        </div>
    )
}
export default Layout