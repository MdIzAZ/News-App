import './App.css';
import Navbar from './Components/Navbar';
import NewsItems from './Components/NewsItems';
import React, { Component } from 'react'
import Spinner from './Components/Spinner';

export default class App extends Component {
  render() {
    return (
      <div className="App bg-dark">
        <Navbar />
        {/* <Spinner/> */}
        <NewsItems />
      </div>
    )
  }
}
