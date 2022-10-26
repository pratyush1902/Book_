import React from 'react'
import Header from './component/Header'
import '../src/App.css'
import { Route,Routes } from 'react-router-dom';
import Home from './component/Home';
import Fav from './component/Fav';
import  Detail from './component/Detail'

export default function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/book/:id' element={<Detail/>}/>
        <Route path='/fav' element={<Fav/>}/>
      </Routes>
      
    </div>
  )
}
