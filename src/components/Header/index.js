import React, { useState } from 'react'
import 'antd/dist/antd.css'
import { Layout, Icon } from 'antd'

const { Header } = Layout

function NavHeader (collapsed, toggle) {

   return (
      <Layout>
         <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
            style={{marginLeft: '20px'}}
            type={collapsed ? 'arrow-right' : 'arrow-left'}
            onClick={toggle}
            />
         </Header>
      </Layout>
   );
}

export default NavHeader
