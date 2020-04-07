import React from 'react';
import {NavLink} from 'react-router-dom';

const Signout = () => {
    return ( <div>
        <a className ="sidenav-trigger" data-target ="mob2"><i className ="material-icons">menu</i></a>
        <ul className="right hide-on-med-and-down ">
            <li><NavLink  to ="/signin" className="waves-effect waves-light  white-text " >login</NavLink>  </li>
            <li><NavLink to ="/signup" className="waves-effect waves-light  white-text " >signup</NavLink>  </li>
        </ul>
        <ul className ="sidenav transparent" id ="mob2">
            <li  ><NavLink to ="/signin" className="waves-effect waves-light  white-text" >login</NavLink></li>
            <li  ><NavLink to ="/Signup" className="waves-effect waves-light  white-text">signup</NavLink></li>
        </ul>
        </div>
       
     );
}
 
export default Signout;