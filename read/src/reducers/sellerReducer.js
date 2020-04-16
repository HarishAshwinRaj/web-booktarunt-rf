import firebase from "../firebase/firebase";
import Rerender from "../components/rerendering/Rerender";
export const SellfoodReducer = (state, action )=>{
    Rerender();
    switch(action.type){
        
        case 'STORE_FOOD':
            console.log("stored food successfully")
            return action.update
        case 'FETCH_FOOD':
            //console.log("fetched  food congrats!!");
            //async request create a proxy action
                 firebase.firestore().collection("restarunts").doc(action.uid).get()
                .then(
                    (data) =>{ 
                        const  hell= data.data().food
                        console.log(hell)
                        console.log("fetched  food congrats!!");
                         action.disp({type:"STORE_FOOD",update:hell}) }
                        
                ).catch (
                    (err)=>{
                        console.log("err - firestore - seller -food ",err);
                    }
                ) 
                console.log("helle")
            
           
            return state
        case 'ADD_FOOD':
            const len= state.length.toString();
            console.log(":;",len);
            const acolor =["amber","lime","cyan","orange","indigo","purple","red","light-green"]
            const col=Math.floor(Math.random()*7)
            console.log(acolor[col]);
            const star =[...state,{id :len,foodname:action.fname,price:action.fprice,color:acolor[col]}];
            console.log(star);
            firebase.firestore().collection("restarunts").doc(action.uid).update({food:star}).then((data)=>{console.log("succ -resta add "); return star;}).catch((err)=>{console.log("err adding"); return state;})
            return star; 
        case 'DELETE_FOOD':
            const sta=state.filter((data)=>{
                return data.id!==action.delid;
            })
            firebase.firestore().collection("restarunts").doc(action.uid).update({food:sta}).then((data)=>{console.log("succ -resta add "); return star;}).catch((err)=>{console.log("err adding"); return state;})
            return sta;  
        default:
            return state
    }
}