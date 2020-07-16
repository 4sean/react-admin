import React, { Component } from 'react';
import { HashRouter,Switch,Route } from 'react-router-dom';
import Home from './views/Home'
import About from './views/About'
import {Button} from 'antd'

import './App.scss'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <HashRouter>
        <div className='test'>ceshi</div>
        <Switch>
          <Route exact  component={Home} path="/">Home</Route>
          <Route component={About} path="/about">About</Route>
        </Switch>
        <ul>
          <li>ceshi</li>
        </ul>
        <Button type="primary">ceshi </Button>
      </HashRouter>
     );
  }
}
 
export default App;