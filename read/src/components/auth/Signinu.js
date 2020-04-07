import React,{useState,useCallback,useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../contextapi/auth';
import firebase from "../../firebase/firebase";

const Signinu = () => {
    const [email,setemail]=useState("");
    const [password,setpassword] = useState("");
    const [message,setmessage]= useState("");
    const {Curruser,addCurruser}= useContext(AuthContext);
    const histor =useHistory();
    return ( <div className="container center">
        <div className= " container orange-text row">
            <div className="container red-text"><h4>{message}</h4></div>
        <form className= "col s12 " onSubmit ={(e)=>{
            e.preventDefault();console.log("hkkkklsls");
             console.log(email);
             firebase.auth().signInWithEmailAndPassword(email,password).then(
                (data)=>{console.log("logged succesfully");addCurruser(data);
                histor.push("/");
            }).catch((e)=>{console.log("err",e);
            if (e.code === "auth/wrong-password"){setmessage("Invalid password ")}
            else if (e.code === "auth/user-not-found"){setmessage(" No such user found try signing up ")}
        })
        
        }}  >
        <div className ="input-field center">
            <input id ="email" className="validate orange-text"  onChange={(e)=>{setemail(e.target.value)}}  type = "email" ></input>
            <label htmlFor ="email">Email</label>
            
        </div>
<div className = "input-field center" >
<input id ="password" className="validate orange-text" onChange={(e)=>{setpassword(e.target.value);}} type = "password" ></input>
            <label htmlFor ="password">password</label>
    </div> 
    <div><input type ="submit" className ="btn btn-pink"  /></div>     
        </form></div></div> );
}

 export default Signinu;
