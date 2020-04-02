import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (    
        <nav className ="nav-wrapper  light-green accent-3 "> <div className = "container">
             <Link to ="/"  className ="brand-logo flow-text">booktarunt</Link >
            
             
            </div>
        </nav>
    ); 
}
 
export default Navbar;