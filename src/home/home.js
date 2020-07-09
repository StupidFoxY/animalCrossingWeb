import React from 'react';
import axios from 'axios';
import libData from './../assets/data/lib.json';
import './home.css';

import { Progress } from 'antd';

function LibList(props) {
  const libList = props.libList;
  const listItems = libList.map((libitem) => {
    return (
      <li className="lib-list-item" key={libitem.key}>
        <img src={require(`./../assets/images/${libitem.img}`)} className="lib-image"/>
        <div className="lib-label-div">
          <span className="lib-label-span">{libitem.label}</span>
          <span>{libitem.userCount}/{libitem.count}</span>
          <Progress percent={libitem.userCount/libitem.count} size="small" showInfo={false}/>
        </div>
      </li>
    )
  });
  return (
    <ul className="lib-list">{listItems}</ul>
  );
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      libData:libData
    }
  }

  componentWillMount() {
    axios.get('/animal_count')
    .then((response) => {
      console.log('/animal_count>>>',response);
      this.state.libData.forEach((libitem) => {
        if(libitem.key == 'animal'){
          libitem.count = response.data;
        }
      })
      this.setState({ libData: this.state.libData });
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="container">
        <div className="header">

        </div>
        <div className="lib">
          <div className="birthday"></div>
          <LibList libList={this.state.libData}/>
        </div>
      </div>
    );
  }
}

export default Home;
