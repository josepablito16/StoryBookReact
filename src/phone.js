import React, { Component } from 'react';


class Phone extends Component 
{
  constructor(props)
  {
    super(props)    
  }

  
  render() 
  {
    
    const phonePath=require('./img/phone.png');
    return (

      <div>
        <img width={this.props.width} src={phonePath} ></img>
      </div>
      
    );
  }
}

export default Phone;