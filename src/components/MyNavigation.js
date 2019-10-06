import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class MyNavigation extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-sm justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item p-3"><NavLink exact activeStyle={{color: "green"}} to="/">Home</NavLink></li>
                    <li className="nav-item p-3"><NavLink exact activeStyle={{color: "green"}} to="/page1">Page1</NavLink></li>
                    <li className="nav-item p-3"><NavLink exact activeStyle={{color: "green"}} to="/page2">Page2</NavLink></li>
                    <li className="nav-item p-3"><NavLink exact activeStyle={{color: "green"}} to="/page3">Page3</NavLink></li>
                    <li className="nav-item p-3"><NavLink exact activeStyle={{color: "green"}} to="/page4">Page4</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default MyNavigation;