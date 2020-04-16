import React,{useContext} from 'react';
import Navbar from "./components/navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Listrestar from './components/restacomponents/Lrestar';
import RestaContextProvider from './contextapi/LsRest';
import Signinu from "./components/auth/Signinu";
import {AuthContext} from './contextapi/auth';
import Signup from './components/auth/Signup';
import Landpg from './components/Newuser';
import AddSupply from "./components/restaruntside/addfood";
import SellerContextProvider from './contextapi/seller';

function App() {
  const {Curruser,Seller} = useContext(AuthContext);
  return (
    <BrowserRouter>
<header>

<RestaContextProvider>
  <SellerContextProvider>
      <Navbar/>
      <Route exact path ="/" component= { !!Curruser ?( Seller ? AddSupply:Listrestar):Landpg }/> 
      <Route path ="/signin" component={Signinu}/>
      <Route path ="/signup" component={Signup}/>
   </SellerContextProvider>
</RestaContextProvider>

</header>

</BrowserRouter>
  );
}

export default App;
