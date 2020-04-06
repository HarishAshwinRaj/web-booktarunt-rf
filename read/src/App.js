import React from 'react';
import Navbar from "./components/navbar";
import {BrowserRouter} from "react-router-dom";
import Listrestar from './components/restacomponents/Lrestar';
import RestaContextProvider from './contextapi/LsRest';

function App() {
  return (
    <BrowserRouter>
<header>
  <Navbar/>
  <RestaContextProvider>
    <Listrestar/> 
  </RestaContextProvider>
</header>

</BrowserRouter>
  );
}

export default App;
