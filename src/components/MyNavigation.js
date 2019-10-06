import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class MyNavigation extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-sm justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="" className="nav-link"><Link to="/">Home</Link></a></li>
                    <li className="nav-item"><a href="" className="nav-link"><Link to="/page1">Page1</Link></a></li>
                    <li className="nav-item"><a href="" className="nav-link"><Link to="/page2">Page2</Link></a></li>
                    <li className="nav-item"><a href="" className="nav-link"><Link to="/page3">Page3</Link></a></li>
                    <li className="nav-item"><a href="" className="nav-link"><Link to="/page4">Page4</Link></a></li>
                </ul>
            </div>
        );
    }
}

export default MyNavigation;