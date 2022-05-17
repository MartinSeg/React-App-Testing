import { Suspense } from "react";
import { BrowserRouter, Navigate } from "react-router-dom"
import { Routes, Route, NavLink } from 'react-router-dom'
import logo from '../logo.svg';
import { routes } from "./routes";

const Navigation = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="" />
                    <ul>
                        {routes.map( ({to, label}) => 
                            <li key={to}>
                                <NavLink to={to}>{label}</NavLink>
                            </li>
                        )}
                    </ul>
                </nav>
                <Routes>
                    {routes.map( ({path, Component}) => 
                        <Route path={path} element={<Component/>} key={path} />
                    )}
                    <Route path="/*" element={<Navigate to='/lazy1' replace/>} />
                </Routes>
            </div>
        </BrowserRouter>
    </Suspense>
  )
}

export default Navigation