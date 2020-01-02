import React from 'react'
import Header from '../components/header'
import { Layout } from 'antd'

const { Content } = Layout

export default props => {
  return(
    <Layout>
      <Header />
      <Content style={{ paddingTop: 50 }}>
        {props.children}
      </Content>
    </Layout>
  )
}