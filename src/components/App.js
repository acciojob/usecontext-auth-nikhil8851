
import React,{useState} from "react";
import './../styles/App.css';

import Hello from "./Hello";
import RoboProvider from "../context/RoboProvider";


const App = () => {

  const [name, setName] = useState("Nikhil");
  
  return (
    <div>
        {/* Do not remove the main div */}
       <h1>click on the checkbox to get authenticated</h1>
         {/* <RoboProvider>
                   <h1>This is the RoboProvider</h1>
                   <Hello />
           </RoboProvider> */}
           
            <Hello  name={name}  />
       
        
    </div>
  )
}

export default App
