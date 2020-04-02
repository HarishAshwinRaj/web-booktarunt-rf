import React from 'react';
import Navbar from "./components/navbar";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
<header>
  <Navbar/>
  
</header>

</BrowserRouter>
  );
}

export default App;
