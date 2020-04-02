import React from "react";
import { Link } from "react-router-dom";
const Signin = () => {
    return ( 
        <ul className ="right hide-on-med-and-down ">
            <li><Link to ="/">logout</Link></li>
            <li><Link to ="/" className ="btn-floating pink "><i className="material-icons">person</i></Link></li>
        </ul>
     );
}
 
export default Signin;