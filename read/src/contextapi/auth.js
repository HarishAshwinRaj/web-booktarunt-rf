import React,{useState,useEffect,createContext} from 'react';
import Rerender from "../components/rerendering/Rerender";
import firebase from "../firebase/firebase";
export const AuthContext =createContext();
const AuthContextProvider = (props) => {
   const [Curruser,seturruser] = useState(null);
   const [Seller,setSeller] = useState(false);
   const addCurruser = (data)=>{
        seturruser(data);
   }
   firebase.auth().onAuthStateChanged((data)=>{
        console.log("user state changed" );
        seturruser(data);
        if (!!data){
        const dn = data.displayName;
        setSeller((dn ==="true")? true:false);}
        else{
                setSeller(false)
        }
        
})
   useEffect(() => {
           // logging to console 
        console.log( Curruser && Curruser.user,"lkl");
        console.log(Seller,"sfsfs");
        //firebase auth method
        //jquery for side nav
         Rerender();
         
   }, [Curruser,Seller])
 
    return (
        <AuthContext.Provider value={{Curruser,addCurruser,Seller,setSeller}} >
{props.children}
        </AuthContext.Provider>
      );
}
 
export default AuthContextProvider;
