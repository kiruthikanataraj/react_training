import React from 'react';

class Helloworld extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <h1 style={{color: 'blue', fontSize: '25px' , position: 'absolute' , left: '20%', top: '20%'}}>React Tutorial!!</h1>
    )
  }
}

export default Helloworld;