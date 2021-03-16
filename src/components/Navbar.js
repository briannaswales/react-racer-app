import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar sticky-top navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Home</Link>
                        <Link className="navbar-brand" to="/about">About</Link> 
                        <Link className="navbar-brand" to="/contact">Contact</Link> 
                    </div>
                </nav>
            </div>
        )
    }
}
