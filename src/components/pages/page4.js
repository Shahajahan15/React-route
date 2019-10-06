import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class page4 extends Component {
    render() {

        // session check before login
        if (sessionStorage.getItem("UserName")==null) {
            return <Redirect to="/Login"/>
        }
        else
        {
            return (
                <div>
                    <h1>Page 04</h1>
                </div>
            );
        }
    }
}

export default page4;