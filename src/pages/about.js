import React, { PureComponent } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import "../App.css";

function AboutProduct(props) {
  return (
    <ul>
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
    </ul>
  )
}

function AboutMessage(props) {
  return (
    <ul>
      <li>消息列表1</li>
      <li>消息列表2</li>
      <li>消息列表3</li>
    </ul>
  )
}

function AboutContact(props){
  return <h2>联系电话: 020-688888</h2>
}

function AboutJoin(props){
  return <h2>投递简历到aaa@163.com</h2>
}



export default class about extends PureComponent {
  render() {
    return (
      <div>
        <NavLink exact to="/about" activeClassName="about-active">商品</NavLink>
        <NavLink exact to="/about/message" activeClassName="about-active">消息</NavLink>
        <NavLink exact to="/about/contact" activeClassName="about-active">联系我们</NavLink>
       <button onClick={e=>this.jumpToJoin()}>加入我们</button>

        <Switch>
          <Route exact path="/about" component={AboutProduct} />
          <Route path="/about/message" component={AboutMessage} />
          <Route path="/about/contact" component={AboutContact} />
          <Route path="/about/join" component={AboutJoin} />
        </Switch>
      </div>
    )
  }

  jumpToJoin(){
    console.log(this.props.history);
    console.log(this.props.location);
    console.log(this.props.match);
    this.props.history.push('./about/join');
  }
}
