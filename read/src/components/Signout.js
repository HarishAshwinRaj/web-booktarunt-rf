import React from 'react';
import {NavLink} from 'react-router-dom';

const Signout = () => {
    return ( 
        <ul className="right">
            <li><NavLink  to ="/">login</NavLink>  </li>
            <li><NavLink to ="/" >signup</NavLink>  </li>
        </ul>
     );
}
 
export default Signout;