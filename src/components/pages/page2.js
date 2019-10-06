import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'; 

class page2 extends Component {

    //  passing data 
    constructor(){
        super();
        this.state={
            passData:"passing My Data from page 2 to page 3"
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
                    <h1>Page 02</h1>
                    {/* <button><Link to={Data}>Pass Data</Link></button> */}
                </div>
            );
        }

        // var Data ="/page3/"+this.state.passData;
        // return (
        //     <div>
        //         <h1>Page 02</h1>
        //         <button><Link to={Data}>Pass Data</Link></button>
        //         {/* <button><Link to="/page3/Shahajahan">Pass Data</Link></button> */}  {/*send data */}
        //     </div>
        // );
    }
}

export default page2;