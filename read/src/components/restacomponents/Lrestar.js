import React, { Component } from 'react';
import ListFood from './ListFood';

class ListRestar extends Component {
    
    render() { 
        return ( 
          <div className ="container">
            <br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/>
            <ListFood/>
            <br/><br/>
            <ListFood/>
            <br/><br/>
            <ListFood/> 
            <br/><br/>
            <ListFood/>
            <br/><br/>
            <ListFood/> 
            </div>
         );
    }
}
 
export default ListRestar;