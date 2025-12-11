import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(email){
    this.email = email;
  }

  render() {
    return (
      <div>ClassComponent</div>
    )
  }
}