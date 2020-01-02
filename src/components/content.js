import React from 'react'
import { Layout } from 'antd'
import { Route } from 'react-router-dom'

import Home from '../views/home'
import Employee from '../views/employee'
import Parent from '../views/parent'
import Habit from '../views/habit'
import City from '../views/city'
import Department from '../views/department'
import Feedback from '../views/feedback'

const { Content } = Layout

export default () => {
  return(
    <Content style={{ marginTop: 50 }}>

        <Route path="/" exact component={Home} />
        <Route path="/employee" component={Employee} />
        <Route path="/parent" component={Parent} />
        <Route path="/habit" component={Habit} />
        <Route path="/city" component={City} />
        <Route path="/department" component={Department} />
        <Route path="/feedback" component={Feedback} />

    </Content>
  )
}