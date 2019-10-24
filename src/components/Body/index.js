import React from 'react'
import 'antd/dist/antd.css'
import { Layout } from 'antd'

const { Content } = Layout

function Body () {
  return (
    <Layout>
        <Content
            style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280,
            }}
        >
        
        </Content>
    </Layout>
  );
}

export default Body