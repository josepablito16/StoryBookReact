import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Phone from './phone';

class App extends Component 
{
  constructor(props)
  {
    super(props)

  }

  
  render() 
  {
    const menuImgPath=require('./img/menu.svg');
    const lupaImgPath=require('./img/lupa.svg');
    const masImgPath=require('./img/mas.svg');
    const youtubeImgPath=require('./img/youtube.svg');
    const twitterImgPath=require('./img/twitter.svg');
    const facebookImgPath=require('./img/facebook.svg');

    return (
      <div className="app">
        <div className="nav">
          <Nav 
            leftIcon={menuImgPath} 
            centerIcon={masImgPath} 
            rightIcon={lupaImgPath} 
            imgOption1={youtubeImgPath} 
            imgOption2={twitterImgPath} 
            imgOption3={facebookImgPath}/>
          </div>
        
        <div className="phone">
          <Phone width="380px"/>
        </div>

      </div>
    );
  }
}

export default App;