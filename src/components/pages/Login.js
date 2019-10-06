import React, { Component } from 'react';


class Login extends Component {

    // create login arrary function
    login=()=>{
        sessionStorage.setItem("UserName", "Shahajahan");
    }

    //  session clear to logout
    logout=()=>{
        sessionStorage.clear();
    }

    render() {
        return (
            <div>
                <button onClick={this.login}>Login</button>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}

export default Login;