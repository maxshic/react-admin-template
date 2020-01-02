import React from 'react';
// import { Layout } from 'antd'
import { Route ,Switch } from 'react-router-dom'
import './App.css';

import Login from './views/login'
import MyView from './views/myView'
// import Header from './components/header'
// import Content from './components/content'

// import Home from './views/home'
import Employee from './views/employee'
import Parent from './views/parent'
import Habit from './views/habit'
import City from './views/city'
import Department from './views/department'
import Feedback from './views/feedback'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
          <MyView path="/view" component={MyView}>
            <Route path="/view/employee" component={Employee} />
            <Route path="/view/parent" component={Parent} />
            <Route path="/view/habit" component={Habit} />
            <Route path="/view/city" component={City} />
            <Route path="/view/department" component={Department} />
            <Route path="/view/feedback" component={Feedback} />
          </MyView>
      </Switch>
    </div>
  );
}

export default App;
