import React from 'react';
import Navbar from "./components/navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Listrestar from './components/restacomponents/Lrestar';
import RestaContextProvider from './contextapi/LsRest';
import Signinu from "./components/auth/Signinu";
import AuthContextProvider from './contextapi/auth';
import Signup from './components/auth/Signup';
function App() {

  return (
    <BrowserRouter>
<header>
<AuthContextProvider>
<RestaContextProvider>
    <Navbar/>
   <Route exact path ="/" component={Listrestar}/> 
   <Route path ="/signin" component={Signinu}/>
   <Route path ="/signup" component={Signup}/>
  </RestaContextProvider>
</AuthContextProvider>
</header>

</BrowserRouter>
  );
}

export default App;
