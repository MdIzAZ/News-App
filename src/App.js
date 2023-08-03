import './App.css';
import Navbar from './Components/Navbar';
import NewsItems from './Components/NewsItems';
import React, { Component } from 'react'
import { Route, Routes } from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <div className="App bg-dark">
        <Navbar />
        <Routes>
          <Route path='business' element={<NewsItems key ='1' country='in' category='business' />}></Route>
          <Route path='health' element={<NewsItems key ='2' country='in' category='health' />}></Route>
          <Route path='entertainment' element={<NewsItems key ='3' country='in' category='entertainment' />}></Route>
          <Route path='technology' element={<NewsItems key ='4' country='in' category='technology' />}></Route>
          <Route path='/' element={<NewsItems key ='5' country='in' category='general' />}></Route>
          <Route path='science' element={<NewsItems key ='6' country='in' category='science' />}></Route>
          <Route path='sports' element={<NewsItems key ='7' country='in' category='sports' />}></Route>
        </Routes>
      </div>
    )
  }
}
