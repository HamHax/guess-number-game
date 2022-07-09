import React, { Component } from 'react'
import Wrapper from '../../Ui/Wrapper/Wrapper'

export default class Input extends Component {
  render() {
    return (
      <Wrapper>
      <input 
      onChange={this.props.onChange} 
      className = {this.props.className}
      placeholder={this.props.placeholder}
      type={this.props.type} 
      ref={this.props.propsRef}
       /> <br />
       </Wrapper>
    )
  }
}
