import React, { Component } from 'react';

import Header from './container/Header'
import Banner from './container/Banner'
import Prateleira from './container/Prateleira'
import Footer from './container/Footer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Prateleira />
        <Footer />
      </div>
    );
  }
}

export default App;
