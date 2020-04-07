import React,{useState,useEffect,createContext} from 'react';
import firebase from "../firebase/firebase";
export const AuthContext =createContext();
const AuthContextProvider = (props) => {
   const [Curruser,seturruser] = useState(null);
   const addCurruser = (data)=>{
        seturruser(data);
   }

   useEffect(() => {
           //firebase auth method
        firebase.auth().onAuthStateChanged((data)=>{
                seturruser(data);
                console.log("user state changed");
                
        })
         console.log(!!Curruser,"user log inn");
         //jquery for side nav
         const va = document.getElementById("jq1");
         document.body.removeChild(va);
         const ghi = document.createElement("script");
         ghi.src="jv.js"
         ghi.id="jq1"

         document.body.appendChild(ghi);
         
   }, [Curruser])
 
    return (
        <AuthContext.Provider value={{Curruser,addCurruser}} >
{props.children}
        </AuthContext.Provider>
      );
}
 
export default AuthContextProvider;
