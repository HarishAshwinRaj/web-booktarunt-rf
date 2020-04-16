import React,{useContext} from 'react';
import {Restacontext} from "../../contextapi/LsRest";
import OfferComp from '../specialoffers';
 const ListRestar = () => {
   const {Resta} = useContext(Restacontext);
   
   return ( 
    <div className ="container ">
     <OfferComp/><div>
    {Resta.map(resta=>{
      return(<div  className =" hb1" key = {resta.id}>
        <div className ="brand-logo white-text"><h3>{resta.name }</h3></div>
        <div className ='row'>
 {resta.food.map(food =>{
   return(
     <div className ="col  s12 m4 l3  "  key ={food.id}>
       <div className=" waves-effect waves-orange  white card " >
       <div className ="card-content orange-text">{food.name}  ---  {food.price} rs</div>
       </div>  
       </div>
   )
 })}
        </div>
      </div>)
    })} </div>
    </div>
    );
 }
  
 export default ListRestar;
