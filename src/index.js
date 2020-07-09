import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './home/home';
import './index.css';
import 'antd/dist/antd.css';

axios.defaults.baseURL = 'http://127.0.0.1:6789';

ReactDOM.render((
  <BrowserRouter>
    <Route path="/" component={Home}/>
  </BrowserRouter>
), document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
