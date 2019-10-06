import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import page1 from './pages/page1';
import page2 from './pages/page2';
import page3 from './pages/page3';
import page4 from './pages/page4';
import Home from './pages/Home';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class MyRoute extends Component {
    render() {
        return (
            <div className="d-inline">
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/page1" component={page1}></Route>
                <Route exact path="/page2" component={page2}></Route>
                <Route exact path="/page3" component={page3}></Route>
                <Route exact path="/page4" component={page4}></Route>
            </div>
        );
    }
}

export default MyRoute;