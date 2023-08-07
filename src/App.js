import './App.css';
import Navbar from './Components/Navbar';
import NewsItems from './Components/NewsItems';
import React, { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import LoadingBar from 'react-top-loading-bar';

const App =() =>  {
  
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(30);
 
    return (
      <div className="App bg-dark">
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />

        <Routes>
          <Route path='business' element={<NewsItems setProgress={setProgress} key='1' country='in' category='business' apiKey={apiKey} />}></Route>
          <Route path='health' element={<NewsItems setProgress={setProgress} key='2' country='in' category='health' apiKey={apiKey} />}></Route>
          <Route path='entertainment' element={<NewsItems setProgress={setProgress} key='3' country='in' category='entertai apiKey={apiKey}nment' />}></Route>
          <Route path='technology' element={<NewsItems setProgress={setProgress} key='4' country='in' category='technology' apiKey={apiKey} />}></Route>
          <Route path='/' element={<NewsItems setProgress={setProgress} key='5' country='in' category='general' apiKey={apiKey} />}></Route>
          <Route path='science' element={<NewsItems setProgress={setProgress} key='6' country='in' category='science' apiKey={apiKey} />}></Route>
          <Route path='sports' element={<NewsItems setProgress={setProgress} key='7' country='in' category='sports' apiKey={apiKey} />}></Route>
        </Routes>
      </div>
    )
  
}
export default App
