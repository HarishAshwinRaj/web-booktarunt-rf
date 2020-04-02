import React from "react";
import { Link } from "react-router-dom";
const Signin = () => {
    return ( 
        <div>
      <a className ="sidenav-trigger" data-target ="mobl"><i className ="material-icons">menu</i></a>
        <ul className ="right hide-on-med-and-down ">
            <li><Link to ="/">logout</Link></li>
            <li><Link to ="/" className ="btn-floating pink "><i className="material-icons">person</i></Link></li>
        </ul>
        <ul className ="sidenav " id = "mobl">
            
            <li><div><Link to ="/" className ="btn-floating pink  ">
                <i className="  material-icons white-text center" >person</i>
            </Link>
            <span>account settings</span>
            </div></li>
            <li><Link to ="/" >logout</Link></li>
        </ul>
        </div>
     );
}
 
export default Signin;