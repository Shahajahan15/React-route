import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class page3 extends Component {

    // get data from page 2
    constructor({match}){
        super();
        this.state={
            myDats:match.params.getDatas
        }
    }
    render() {

        // session check before login
        if (sessionStorage.getItem("UserName")==null) {
            return <Redirect to="/Login"/>
        }
        else
        {
            return (
                <div>
                    <h1>Page 03</h1>
                    <h1>{this.state.myDats}</h1> {/* view data */}
                </div>
            );
        }
    }
}

export default page3;