import { BrowserRouter, Navigate } from "react-router-dom"
import { Routes, Route, NavLink } from 'react-router-dom'
import logo from '../logo.svg';

const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="" />
                <ul>
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/users'>Users</NavLink>
                </ul>
            </nav>
            <Routes>
                <Route path="/about"  element={<h1>About Page</h1>} />
                <Route path="/users" element={<h1>Users Page</h1>}/>
                <Route path="/home" element={<h1>Home Page</h1>}/>
                <Route path="/*" element={<Navigate to='/home' replace/>} />
            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default Navigation