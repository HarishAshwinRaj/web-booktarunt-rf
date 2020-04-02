import React from 'react';
import {Link} from 'react-router-dom';
import Signin from './Signin';
import Signout from './Signout';
const Navbar = () => {
    return (    
        <nav className ="nav-wrapper transparent "> <div className = "container">
             <Link to ="/"  className ="brand-logo flow-text">booktarunt</Link >
             
            <Signin/>
            <Signout/>
             
            </div>
        </nav>
    ); 
}
 
export default Navbar;