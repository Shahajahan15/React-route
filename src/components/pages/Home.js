import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

class Home extends Component {
    render() {

        // session check before login
        if (sessionStorage.getItem("UserName")==null) {
            return <Redirect to="/Login"/>
        }
        else
        {
            return (
                <div>
                    <h1>Home</h1>
                </div>
            );
        }
    }
}

export default Home;