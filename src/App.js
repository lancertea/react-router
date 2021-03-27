import Home from './pages/home';
import About from './pages/about';
import Profile from './pages/profile';
import User from './pages/user';
import NoMatch from './pages/noMatch';
import Login from './pages/login';
import "./App.css";
//switch 排他操作
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
        <Link to="/profile">我的</Link> */}
        <NavLink exact to="/" activeClassName="link-active">
          首页
        </NavLink>
        <NavLink to="/about" activeClassName="link-active">
          关于
        </NavLink>
        <NavLink to="/profile" activeClassName="link-active">
          我的
        </NavLink>
        <NavLink to="/user" activeClassName="link-active">
          用户
        </NavLink>
        <NavLink to="/abc" activeClassName="link-active">
          abc
        </NavLink>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
