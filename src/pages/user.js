import React, { PureComponent } from 'react'
import { Redirect } from 'react-router';

export default class user extends PureComponent {
  constructor(){
      super();

    this.state = {
      isLogin:false
    }
  }
  render() {
    return this.state.isLogin? (
      <div>
        <h2>user</h2>
        <h2>用户名: lacner </h2>
      </div>
    ):<Redirect to="/login"/>
  }
}
