import React,{useState} from 'react';
import firebase from "../../firebase/firebase";
import { firestore } from 'firebase';
import { useHistory } from 'react-router-dom';

const Signup = () => {
const [email,setemail] =useState("");
const [password,setpassword] =useState("");
const [name,setname] =useState("");
const [clg,setclg] =useState("");
const [message,setmessage] = useState(null);
const histor =useHistory();
    return ( 
<div className="container center">
        <div className= " container orange-text row">
    <div className= "container red-text"><h5>{message}</h5></div>
        <form className= "col s12 " onSubmit={
                (e)=>{
                    e.preventDefault();
                    console.log(email,name,clg);
                    firebase.auth().createUserWithEmailAndPassword(email,password).then(
                        (data)=>{
                           firebase.firestore().collection("user").doc(data.user.uid).set({
                                name:name,
                                email:email,
                                clg:clg,
                                orders:[]
                            }).then(()=>{console.log("create success!");
                            useHistory.push("/")}).catch( (e)=>{
                                    console.log("err",e.message); });
                        }).catch((e)=>{
                            console.log("create",e);
                            if (e.code ==="auth/email-already-in-use"){
                                setmessage("this email is already enrolled try logingin")
                            }
                        })
                 }} >
            <div className ="input-field center">
                <input id ="email" className="validate orange-text"  onChange={(e)=>{setemail(e.target.value)}}  type = "email" ></input>
                <label htmlFor ="email">Email</label>
            </div>
            <div className = "input-field center" >
                <input id ="password" className="validate orange-text" onChange={(e)=>{setpassword(e.target.value);}} type = "password" ></input>
                <label htmlFor ="password">password</label>
            </div> 
            <div className = "input-field center" >
                <input id ="name" className="validate orange-text" onChange={(e)=>{setname(e.target.value);}} type = "text" ></input>
                <label htmlFor ="name">name</label>
            </div> 
            <div className = "input-field center" >
                <input id ="clg" className="validate orange-text" onChange={(e)=>{setclg(e.target.value);}} type = "text" ></input>
                <label htmlFor ="clg">enter name or id of clg</label>
            </div>
            <div><input type ="submit" className ="btn btn-pink"  /></div>     
        </form>
        </div>
    </div>
     );
}
 
export default Signup;

