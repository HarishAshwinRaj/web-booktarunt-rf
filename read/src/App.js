import React from 'react';
import Navbar from "./components/navbar";
import {BrowserRouter} from "react-router-dom";
import Listrestar from './components/restacomponents/Lrestar';

function App() {
  return (
    <BrowserRouter>
<header>
  <Navbar/>
  <Listrestar/> 
</header>

</BrowserRouter>
  );
}

export default App;
