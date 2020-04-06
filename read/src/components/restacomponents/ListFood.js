import React from 'react';

const ListFood = () => {
    return ( 
        <div >
            <div className ="brand-logo white-text">rishab</div>
    <div className="row ">
        <div className ="col  s12 m4 l3 ">
            <div className=" waves-effect waves-orange  white card z-depth-3  ">
          
            <div className ="card-content orange-text">dosa  ---  40rs</div>
            
            </div></div>

            <div className ="col  s12 m4 l3 teal-text ">
                <div className="card z-depth-3 waves-effect waves-teal white">
            <div className ="card-content">chicken 65 -- 65 rs</div>
            </div></div>

            <div className ="col  s12 m4 l3 purple-text">
                <div className="card z-depth-3 waves-effect waves-purple white">
            
            <div className ="card-content">idly --  -- -- 30rs</div>
            
            </div></div>
    
      </div>
      </div>
     );
}
 
export default ListFood;