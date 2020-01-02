import React from 'react'
import { Layout ,Menu ,Icon } from 'antd'
import { Link ,withRouter } from 'react-router-dom'

import logoUrl from '../css/logo-w.png'

const { Header } = Layout
const { SubMenu } = Menu

const Head = props => {
  // console.log(props)
  return(
    <Header style={{ position: 'fixed', zIndex: 1 ,width: '100%' , height: '50px' ,lineHeight: '50px'}}>
      <div className="logo" style={{ height: 50,width: 200,float: 'left', padding: 5, boxSizing: 'border-box' }}>
        <img src={logoUrl} alt="" height="44" style={{ float: 'left' }}/>
      </div>
      <Menu 
        mode="horizontal"
        theme="dark"
        style={{lineHeight: '50px'}}
        defaultSelectedKeys={[props.location.pathname]}
      >
        {/* <Menu.Item key="/">
          <Link to="/">
            <span>首页</span>
          </Link>
        </Menu.Item> */}
        <Menu.Item key="/view/employee">
          <Link to="/view/employee">
            <span>员工</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/view/parent">
          <Link to="/view/parent">
            <span>家属</span>
          </Link>
        </Menu.Item>
        <SubMenu
          key="4"
          title={
            <span>
              <span>预约率</span>
              <Icon type="caret-down" />
            </span>
          }
        >
          <Menu.Item key="/view/habit">
            <Link to="/view/habit">
              <span>按习惯</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/view/city">
            <Link to="/view/city">
              <span>按城市</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/view/department">
            <Link to="/view/department">
              <span>按部门</span>
            </Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="/view/feedback">
          <Link to="/view/feedback">
            <span>反馈</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
}

export default withRouter(Head)