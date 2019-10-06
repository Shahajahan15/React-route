import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
class page1 extends Component {
    render() {

        // session check before login
        if (sessionStorage.getItem("UserName")==null) {
            return <Redirect to="/Login"/>
        }
        else
        {
            return (
                <div>
                    <h1>Page 01</h1>
                </div>
            );
        }
    }
}

export default page1;