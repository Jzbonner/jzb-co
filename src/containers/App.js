import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Sidebar from './Sidebar';
import Bio from './Bio';
import Home from './Home';
import Experience from './Experience';
import Resume from './Resume'; 
import Portfolio from './Portfolio'; 

import NavIndex from '../assets/source-code.png';
import '../App.css';


const routes = [
    {
        path : "/", 
        exact: true, 
        sidebar: () => <Sidebar />,
        main: () => <Home />,
    }, 
    {
        path : "/Home", 
        exact: true, 
        sidebar: () => <Sidebar />,
        main: () => <Home />,
    }, 
    {
        path : "/Bio", 
        exact: true, 
        sidebar: () => <Sidebar />,
        main: () => <Bio />,
    },
    {
        path : "/Experience", 
        exact: true, 
        sidebar: () => <Sidebar />,
        main: () => <Experience />,
    }, 
    {
        path : "/Portfolio", 
        exact: true, 
        sidebar: () => <Sidebar />,
        main: () => <Portfolio />,
    },
    {
        path : "/Resume", 
        exact: true, 
        sidebar: () => <Sidebar />,
        main: () => <Resume />,
    },  
]; 

export default class App extends Component {
    render() {
        return (
        <Router>
            <div className="container-fluid">
                <div className="row design-bg">
                    {/*
                        Navbar Section with Link and BrowserRouter functionality 
                    */}
                    <div className="col-lg-2">
                        <nav className="navbar navbar-light">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapseItems" aria-controls="navbarCollapseItems" aria-expanded="false" aria-label="Toggle navigation">
                                <img src={NavIndex} className="nav-index" alt="nav-index" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapseItems">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link to="/Home" className="nav-link">
                                        <p className="nav-id"><i id="icon" className="fas fa-circle-notch"></i> Home </p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Bio" className="nav-link">
                                        <p className="nav-id"><i id="icon" className="far fa-user-circle"></i> Bio </p> 
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Experience" className="nav-link">
                                        <p className="nav-id"><i id="icon" className="fas fa-flask"></i> Experience </p> 
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Portfolio" className="nav-link">
                                        <p className="nav-id"><i id="icon" className="far fa-file-alt"></i> Portfolio </p> 
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Resume" className="nav-link">
                                        <p className="nav-id"><i id="icon" className="fas fa-align-right"></i> Resume </p> 
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    {/*
                        Section for displaying the navbar/sidebar links to display the 
                        actual content; this section needs to be bootstrapped to provide 
                        more of a grid layout for the UI of the page
                    */}
                    <div className="col-lg-3">
                        <div className="sidebar-view">
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.sidebar}
                            />
                        ))}
                        </div>
                    </div>
                    {/*
                        Section for displaying the actual content that is triggered 
                        from the navbar/sidebar sections 
                    */}
                    <div className="col-lg-7">
                        <div className="content-view">
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))}
                        </div>
                    </div>
                </div> 
            </div>
        </Router>
        )
    }
};