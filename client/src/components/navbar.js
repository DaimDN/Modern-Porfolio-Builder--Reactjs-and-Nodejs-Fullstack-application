import React from 'react'
import './navbar.css';
import logo from './logo.png';

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white bg-no">
           
            <a class="navbar-brand " href="/"> <img className="logo" src={logo}></img></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="/login">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="/register">Register</a>
                </li>
             
                </ul>
          </div>
            </nav>
        </div>
    )
}
