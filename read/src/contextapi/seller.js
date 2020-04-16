import React,{createContext,useReducer} from 'react';
import {SellfoodReducer} from '../reducers/sellerReducer';
export const SellerContext = createContext();
const SellerContextProvider = ({children}) => {   
    const [food,dispatch] = useReducer(SellfoodReducer,[{foodname:"dosa",price:60,id:"0",color:"cyan"}])
    return ( <SellerContext.Provider value ={{food,dispatch}}>
        {children}
    </SellerContext.Provider> );
}
 
export default SellerContextProvider;
