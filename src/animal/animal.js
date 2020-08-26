import React from 'react';
import axios from 'axios';
import libData from './../assets/data/lib.json';
import './animal.css';


class Animal extends React.Component {
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
        if(libitem.key === 'animal'){
          libitem.count = response.data;
        }
      })
      this.setState({ libData: this.state.libData });
    })
    .catch((error) => {
      console.log(error);
    })
  }

  test(str) {
    console.log(this,str)
  }

  render() {
    return (
      <div>
        <span onClick={this.test.bind(this,'test')}>12312313131</span>
      </div>
    );
  }
}

export default Animal;
