import React ,{useState,useEffect,createContext}from 'react';
import firebase from "../firebase/firebase";


export const Restacontext = createContext();

const RestaContextProvider = (props) => {
  const [Resta, setResta] = useState([
     
  ])
  useEffect(()=>{
      console.log("hello world")
      const unsub = firebase.firestore().collection("restarunts").onSnapshot((snap)=>{
          const nrest =snap.docs.map((data)=>{
            return({id :data.id,...data.data()})
          })
          setResta(nrest);
      })
    
      return ()=>unsub()
  },[])
    return (
        <Restacontext.Provider value ={{Resta}}>
            {props.children}
        </Restacontext.Provider>
      );
}
 
export default RestaContextProvider;
