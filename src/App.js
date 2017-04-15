import React, { Component } from 'react';
import Header from './components/Header';
import Users from './pages/users/components/Users';
import About from './pages/about/components/About';
import Home from './pages/home/components/Home';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import routePaths from 'constans/routePaths';
import './App.scss';

class App extends Component {

  render() {
    console.log('App', this.props);
    return (
      <div className='height-100p'>
        <Header />
        <Route exact path={routePaths.HOME} component={Home}/>
        <Route path={routePaths.USERS} component={Users}/>
        <Route path={routePaths.ABOUT} component={About}/>
        <Footer />
      </div>
    );
  }
}

export default App;

