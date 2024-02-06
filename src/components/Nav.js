import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home'
import AddUser from './AddUser';
import Update from './Update';


function Nav() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navBg">
        <div className="container">
            <div className="col-md-6">
            <h6 className="navbar-brand">React Axios Task</h6>
            </div>
            
            <div className="col-md-6">
            <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink to="/" className="nav-link">Users</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/add-user" className="nav-link">Add User</NavLink>
                </li>
            </ul>
            </div>
        </div>
    </nav>
        <Routes>
            <Route path="/" element={<Home />}/> 
            <Route path="/add-user" element={<AddUser/>}/> 
            <Route path="/update/:id" element={<Update/>}/> 
        </Routes>
    </div>
    
  )
}

export default Nav