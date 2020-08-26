import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './home/home';
import Animal from './animal/animal';
import './index.css';
import 'antd/dist/antd.css';

axios.defaults.baseURL = 'http://127.0.0.1:6789';

ReactDOM.render((
  <div>
    <div className="header">
    </div>
    <div className="content">
      <BrowserRouter>
        <Switch>
          <Route path="/animal" component={Animal}/>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  </div>
), document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
