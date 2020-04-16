import React,{useState} from 'react';
import firebase from "../../firebase/firebase";
//import { firestore } from 'firebase';
import { useHistory } from 'react-router-dom';

const Signup = () => {
const [email,setemail] =useState("");
const [password,setpassword] =useState("");
const [name,setname] =useState("");
const [clg,setclg] =useState("");
const [seller,setseller] = useState("");
const [message,setmessage] = useState(null);
//const histor =useHistory();
    return ( 
<div className="container center">
        <div className= " container orange-text row">
    <div className= "container red-text"><h5>{message}</h5></div>
        <form className= "col s12 " onSubmit={
                (e)=>{
                    e.preventDefault();
                    //console.log(email,name,clg);
                    // creating user a 
                    firebase.auth().createUserWithEmailAndPassword(email,password).then(
                        (data)=>{
                            //console.log(seller);
                            //firebase adding try property
                            if ( seller) {
                                firebase.auth().currentUser.updateProfile({displayName:"true"}).then(()=>{
                                    console.log("success")
                                    firebase.firestore().collection("restarunts").doc(data.user.uid).set(
                                        { name:name,
                                         email:email,
                                         clg:clg,
                                         food:[]
                                     })
                                     .then(
                                         ()=>{
                                         console.log("sucess full restarunt ");
                                         useHistory.push("/");
                                         }
                                     )
                                     .catch((e)=>{
                                         console.log("err-res-data",e.message);}
                                     )
                                })
                                .catch((e)=>{
                                    console.log("fail",e)
                                })
                               
                            }
                            else{

                            firebase.auth().currentUser.updateProfile({displayName:"false"}).then(()=>{
                                console.log("success")
                                firebase.firestore().collection("user").doc(data.user.uid).set({
                                    name:name,
                                    email:email,
                                    clg:clg,
                                    orders:[]
                                }).then(()=>{
                                    console.log("create success!");
                                useHistory.push("/")}).catch( (e)=>{
                                    // catch statement for create a database
                                        console.log("err",e.message); });
                            })
                            .catch((e)=>{
                                console.log("fail",e)
                            })
                                }
                        }).catch((e)=>{
                            //catch for creating a auth sercivee
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
            <div className =" white-text left switch"><label>
            BUYER <input type="checkbox" onChange ={(e)=>{
setseller( e.target.checked);
            }}></input>
            <span className ="lever"></span> SELLER </label></div>
<div><br/><br/></div>
            <div><input type ="submit" className ="btn waves-effect waves-light pink "  /></div>     
        </form>
        </div>
    </div>
     );
}
 
export default Signup;

