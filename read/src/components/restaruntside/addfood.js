import React,{useContext,useEffect,useState} from 'react';
import { SellerContext } from '../../contextapi/seller';
import { AuthContext } from '../../contextapi/auth';
const AddSupply = () => {
    const {food,dispatch} = useContext(SellerContext);
    const {Curruser} = useContext(AuthContext);
   const [fname, setfname] = useState('');
   const [fprice, setfprice] = useState('');
   useEffect(()=>{
       console.log("hello");
       dispatch({type:"FETCH_FOOD",uid :Curruser.uid,disp:dispatch})
   },[])
    return (
    <div className ="container white-text" >
        <div className="row">
        {food.map((data)=>{
            return(
            <div className= "col s6 m4 l3" key={data.id} >
                <div className ="card grey" >
                    <div className ="card-content "> 
                    <div className="card-title right">
                       <a className="dropdown-trigger waves-effect waves-light" href="#!" data-target ={data.id} > <i className ="material-icons left">more_vert</i></a>
                    </div>
                    <div className ={"card-content ".concat(data.color,"-text")}>
                    <br/>
                        <div className="valign-wrapper ">
                            <i className=" small material-icons ">local_dining</i>
                            {data.foodname} 
                        </div>
                        <div className="valign-wrapper">
                            <i className=" small material-icons">local_atm</i>
                            {data.price} 
                        </div>
                        
                    </div>
                    </div>
                </div>
               
                    <ul className ="dropdown-content" id ={data.id}  >
                        <li ><a className="orange-text " href="#!" onClick={()=>{dispatch({type:"DELETE_FOOD",delid:data.id,uid:Curruser.uid})}}><i className="material-icons"style={{verticalAlign:'center'}} >delete</i>delete</a></li>
                    </ul>
                
            </div>         
            )
        })}
        <div className ="col s6 m4 l3 ">
            <div className = "card  grey">
              
                <div className ="orange-text card-content center">
                    <a className="dropdown-trigger waves-effect waves-light  orange-text" href="#!" data-target="addbutton" >
                        <i className="medium material-icons">add</i>
                    </a>
                    <h5> add food</h5>
                </div>
            </div></div>
            <form id="addbutton" className="dropdown-content "  >
           
                
                        <div className="container">
                        <div className="input-field ">
                            <i className="material-icons prefix">local_dining</i>
                            <textarea value={fname} id="foodname" type="text" className="materialize-textarea" onChange={
                                (e)=>{setfname(e.target.value)}
                                }></textarea>
                            <label htmlFor="foodname">foodname</label>
                        </div>
                        </div>
                        <br/>
                        <div className="container">
                        <div className="input-field ">
                            <i className="material-icons prefix">local_atm</i>
                            <textarea id="foodprice" value={fprice} type="text" className="materialize-textarea"  onChange={
                                (e)=>{setfprice(parseInt(e.target.value))}
                                }></textarea>
                            <label htmlFor="foodprice">price</label>
                        </div>
                        </div>
                        <div className ="input-field">
                            <a className="btn pink waves-effect waves-light " type ="submit" href="#!" onClick={()=>{
                                console.log(fname,fprice,Curruser.uid);
                                dispatch({type:"ADD_FOOD",fname,fprice,uid:Curruser.uid});
                                setfname('');setfprice('');
                            }}>
                                    <i className="material-icons">done</i> save
                            </a>
                        </div>
                        <br/><br/><br/>
            </form>
        </div>
    </div>  );
}
 
export default AddSupply;