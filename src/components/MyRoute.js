import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import page1 from './pages/page1';
import page2 from './pages/page2';
import page3 from './pages/page3';
import page4 from './pages/page4';
import Home from './pages/Home';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import notFound from './pages/notFound';

class MyRoute extends Component {
    render() {
        return (
            <div className="d-inline">
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/page1" component={page1}></Route>
                    <Route path="/page2" component={page2}></Route>
                    <Route path="/page3/:getDatas" component={page3}></Route> {/*get data*/}
                    <Route path="/page4" component={page4}></Route>
                    <Route component={notFound}></Route>
                </Switch>
            </div>
        );
    }
}

export default MyRoute;