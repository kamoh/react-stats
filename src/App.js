import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import SideBar from './components/SideBar'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Main />
        <SideBar />
        <Footer />
      </div>
    );
  }
}

export default App;
