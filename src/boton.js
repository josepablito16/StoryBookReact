import React, { Component } from 'react';
import './boton.css';
//import NavPage from './NavPage';

class Boton extends Component 
{
  constructor(props)
  {
    super(props)    
  }

  btnFunction()
  {
    
    const btn = document.querySelector("#btn");
    const item = document.querySelectorAll(".menu__item");

    let showCard = (event) => {
        btn.classList.toggle("is-rotate");
        for (var i = 0; i < item.length; i++) 
        {
            item[i].classList.toggle(`item-${i}`);
        }
    }

    btn.addEventListener("click", showCard);
    btn.click()
  }

  
  render() 
  {

    return (
      <div>

        <img onClick={this.btnFunction} className="menu__trigger" id="btn" src={this.props.icon} ></img>

        <img className="menu__item menu__item--0" src={this.props.imgOption1} ></img>
        <img className="menu__item menu__item--1" src={this.props.imgOption2} ></img>
        <img className="menu__item menu__item--2" src={this.props.imgOption3} ></img>
      </div>
      
    );
  }
}

export default Boton;