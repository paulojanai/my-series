import React, { useState } from 'react'
import 'antd/dist/antd.css'
import './style.css'
import { Layout, Menu, Icon } from 'antd'
import NavHeader from '../Header/index'

const { Sider, Content } = Layout

function NavbarVertical () {
   const [collapsed, setCollapsed] = useState(false)
   const toggle = () => {
      setCollapsed(!collapsed)
   }

   return (
      <Layout style={{minHeight: '100vh'}}>
         <Sider trigger={null} style={{backgroundColor: 'dark'}} collapsible collapsed={collapsed}>
         <div className="logo">
            MyS
         </div>
         <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
               <Icon type="appstore" />
               <span>Minhas Séries</span>
            </Menu.Item>
            <Menu.Item key="2">
               <Icon type="video-camera" />
               <span>Assistindo</span>
            </Menu.Item>
            <Menu.Item key="3">
               <Icon type="heart" />
               <span>Lista de Favoritos</span>
            </Menu.Item>
         </Menu>
         </Sider>
         <Layout>
         <NavHeader collapsed={collapsed} toggle={toggle}/>
         </Layout>
      </Layout>
   );
}

export default NavbarVertical
