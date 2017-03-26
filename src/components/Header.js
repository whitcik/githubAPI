import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import routePaths from 'constans/routePaths';
import './Header.css';

export default class Header extends Component {
  isActive(clicked, current) {
    if(!clicked) {
      return false;
    }
    if(clicked.path.length === 1){
      return clicked.path === current.pathname;
    }
    return current.pathname.indexOf(clicked.path) === 0;
  }

  render() {
    console.log('Headerss', this.props);
    const { HOME, ABOUT, USERS } = routePaths;
    return (
      <header className="container">
        <nav className="navbar navbar-inverse">
            <div className="navbar-header">
              <NavLink className="navbar-brand" to={HOME} isActive={this.isActive}>
                GitHub API
              </NavLink>
            </div>
            <div id="navbar">
              <ul className="nav navbar-nav">
                <li>
                  <NavLink to={HOME} isActive={this.isActive}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={USERS} isActive={this.isActive}>Users</NavLink>
                </li>
                <li>
                  <NavLink to={ABOUT} isActive={this.isActive}>About</NavLink>
                </li>
              </ul>
            </div>
        </nav>
      </header>
    );
  }
}
