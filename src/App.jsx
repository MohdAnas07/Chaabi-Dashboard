import { useState } from 'react'
import './styles/App.css';
import Home from './pages/Home';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <div className='app'>
      <Sidebar />
      <Home />
    </div>
  )
}

export default App
