import React, { Component } from 'react';
import './Nav.css';
import Boton from './boton';

class App extends Component 
{
  constructor(props)
  {
    super(props)    
  }

  
  render() 
  {
  

    return (

      <div className="main">
        <div className="menu">

          <img className="menu__base" src={this.props.leftIcon} ></img>
          <img className="menu__base left" src={this.props.rightIcon} ></img>
          <Boton  icon={this.props.centerIcon} 
                  imgOption1={this.props.imgOption1} 
                  imgOption2={this.props.imgOption2}
                  imgOption3={this.props.imgOption3}/>

         
        </div>
      </div>
      
    );
  }
}

export default App;