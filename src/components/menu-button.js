import React, { Component } from "react";
//import {Button} from 'react-bootstrap'


class MenuButton extends Component {

 

  render() {




    return (
    



<button className="hamburger hamburger--slider active" type="button" onMouseDown={this.props.handleMouseDown}>
  <span className="hamburger-box">
    <span className="hamburger-inner"></span>
  </span>
</button>  






 
    );
  }
}
 
export default MenuButton;