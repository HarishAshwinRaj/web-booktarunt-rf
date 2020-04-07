import React from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase/firebase";

const Signin = () => {
    return ( 
        <div>
      <a className ="sidenav-trigger" data-target ="mobl"><i className ="material-icons">menu</i></a>
        <ul className ="right hide-on-med-and-down ">
            <li><Link to ="/" className= "waves-effect waves-light white-text" onClick={()=>{
                firebase.auth().signOut();
                console.log("logged out");
            }}>logout</Link></li>
            <li><Link to ="/" className =" btn-floating pink waves-effect waves-light white-text">
                <i className="material-icons">person</i>
                </Link></li>
        </ul>
        <ul className ="sidenav transparent" id = "mobl">
            
            <li><div className ="waves-effect waves-light white-text">
                <Link to ="/" className ="btn-floating pink  ">
                <i className="  material-icons white-text center" >person</i>
            </Link>
            <span>account settings</span>
            </div></li>
            <li><Link to ="/"className ="waves-effect waves-light white-text" onClick={()=>{
                firebase.auth().signOut();
                console.log("logged out");
            }} >logout</Link></li>
        </ul>
        </div>
     );
}
 
export default Signin;