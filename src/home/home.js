import React from 'react';
import axios from 'axios';
import libData from './../assets/data/lib.json';
import './home.css';

function LibList(props) {
  const libList = props.libList;
  const listItems = libList.map((libitem) => {
    return (
      <li className="lib-list-item" key={libitem.key}>
        <img src={require(`./../assets/images/${libitem.img}`)} className="lib-image"/>
        <span className="lib-span">{libitem.label}</span>
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
  }

  componentWillMount() {
    axios.get('/animal/animal_list')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
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
          <LibList libList={libData}/>
        </div>
      </div>
    );
  }
}

export default Home;
