import React from 'react'
import '../styles/home.css';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Sidebar from '../components/Sidebar';
import { Routes, Route } from 'react-router-dom'
import Users from '../components/Users';
import Analytics from '../components/Analytics';
import MyAccount from '../components/MyAccount';
import Support from '../components/Support';
import Training from '../components/Training';

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/training' element={<Training />} />
                <Route path='/users' element={<Users />} />
                <Route path='/analytics' element={<Analytics />} />
                <Route path='/my-account' element={<MyAccount />} />
                <Route path='/support' element={<Support />} />
            </Routes>
        </div>
    )
}

export default Home