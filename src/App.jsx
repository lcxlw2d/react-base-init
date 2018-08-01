import React from 'react'
import { HashRouter as Router,Route,Link} from 'react-router-dom'
// import { Toast } from 'antd-mobile'

import Home from './containers/Home'

import './assets/style/base.less'

// 用于解决IOS上Modal.alert无法关闭的问题
import fastclick from 'fastclick'
fastclick.attach(document.body, {})

export default class App extends React.Component {
  render () {
    return (
      <Router>
        <div id='root'>
            <section>
                <Route path="/" component={Home} exact></Route>
            </section>
        </div>
      </Router>
    )
  }
}
