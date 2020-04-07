import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import Signin from './Signin';
import Signout from './Signout';
import {AuthContext} from "../contextapi/auth";
const Navbar = () => {
    const {Curruser}  = useContext(AuthContext);
   
    return (    
        <nav className ="nav-wrapper transparent  "> <div className = "container">
             <Link to ="/"  className ="brand-logo flow-text">booktarunt</Link >
             {!!Curruser?  <Signin/> :<Signout/>}    
            </div>
        </nav>
    ); 
}
 
export default Navbar;